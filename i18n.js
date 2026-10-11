/**
 * i18n.js — Language switching engine
 * Cyber Saathi
 *
 * Strategy:
 *  - Supported languages defined in SUPPORTED_LANGS.
 *  - Active translations cached in memory after first fetch.
 *  - Every element with [data-i18n="key"] gets its textContent replaced.
 *  - Elements with [data-i18n-html="key"] get innerHTML replaced (for
 *    strings that contain markup like <strong> or <a>).
 *  - Elements with [data-i18n-aria="key"] get their aria-label replaced.
 *  - Elements with [data-i18n-placeholder="key"] get their placeholder replaced.
 *  - The <html lang=""> attribute is updated so screen readers know the language.
 *  - Preference is saved to localStorage and restored on every page load.
 *  - The module exports a public API: { init, setLang, getLang, t }.
 */

const I18n = (() => {
  /* ----------------------------------------------------------
     Constants
  ---------------------------------------------------------- */
  const SUPPORTED_LANGS = ['en', 'hi', 'mr'];
  const DEFAULT_LANG    = 'en';
  const STORAGE_KEY     = 'cs_lang';           // cs = Cyber Saathi
  const LOCALE_BASE     = 'locales/';          // relative to site root

  /* Lang → BCP-47 code for the HTML lang attribute */
  const LANG_CODES = {
    en: 'en',
    hi: 'hi',
    mr: 'mr'
  };

  /* ----------------------------------------------------------
     Internal state
  ---------------------------------------------------------- */
  let _currentLang  = DEFAULT_LANG;
  let _translations = {};          // { en: {...}, hi: {...}, mr: {...} }
  let _callbacks    = [];          // functions to call after every lang change

  /* ----------------------------------------------------------
     Helpers
  ---------------------------------------------------------- */

  /**
   * Resolve the path to a locale file.
   * Works whether the page is at root (/index.html) or a sub-path
   * (/pages/about.html) because we use an absolute path from root.
   */
  function _localePath(lang) {
    // Build an absolute path from the site root so it works in sub-pages too.
    const base = document.querySelector('meta[name="locale-base"]');
    const prefix = base ? base.content : LOCALE_BASE;
    return `${prefix}${lang}.json`;
  }

  /**
   * Fetch a locale JSON file and cache it.
   * Returns a Promise that resolves to the translations object.
   */
  async function _loadLocale(lang) {
    if (_translations[lang]) {
      return _translations[lang];          // already cached
    }

    try {
      const res = await fetch(_localePath(lang));
      if (!res.ok) {
        throw new Error(`HTTP ${res.status} loading ${lang}.json`);
      }
      const data = await res.json();
      _translations[lang] = data;
      return data;
    } catch (err) {
      console.error(`[i18n] Failed to load locale "${lang}":`, err);

      // Fallback: if we can, return English
      if (lang !== DEFAULT_LANG && _translations[DEFAULT_LANG]) {
        console.warn(`[i18n] Falling back to "${DEFAULT_LANG}".`);
        return _translations[DEFAULT_LANG];
      }
      return {};
    }
  }

  /**
   * Apply loaded translations to the DOM.
   * Scans for every element with a recognised data-i18n-* attribute.
   */
  function _applyToDOM(translations) {
    // 1. textContent replacements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[key] !== undefined) {
        el.textContent = translations[key];
      }
    });

    // 2. innerHTML replacements (safe — strings come from our own JSON)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (translations[key] !== undefined) {
        el.innerHTML = translations[key];
      }
    });

    // 3. aria-label replacements
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (translations[key] !== undefined) {
        el.setAttribute('aria-label', translations[key]);
      }
    });

    // 4. placeholder replacements
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[key] !== undefined) {
        el.setAttribute('placeholder', translations[key]);
      }
    });

    // 5. document <title>
    const titleKey = document.title; // if already a key, replace
    const siteNameEl = document.querySelector('[data-i18n="site_name"]');
    if (siteNameEl && document.title) {
      // Keep original English page title suffix after " – "
      const titleParts = document.title.split(' – ');
      const pagePart   = titleParts.length > 1 ? titleParts[1] : '';
      const siteName   = translations['site_name'] || 'Cyber Saathi';
      document.title   = pagePart ? `${siteName} – ${pagePart}` : siteName;
    }
  }

  /**
   * Update visual state of language toggle buttons.
   * Buttons must have [data-lang="en|hi|mr"] and role="button".
   */
  function _updateButtons(lang) {
    document.querySelectorAll('[data-lang]').forEach(btn => {
      const isActive = btn.getAttribute('data-lang') === lang;
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  /**
   * Update the <html lang=""> attribute for screen readers.
   */
  function _updateHtmlLang(lang) {
    document.documentElement.setAttribute('lang', LANG_CODES[lang] || lang);
  }

  /* ----------------------------------------------------------
     Public API
  ---------------------------------------------------------- */

  /**
   * Initialise i18n on page load.
   * Reads stored preference, loads locale, applies translations.
   */
  async function init() {
    // Pre-load English always so we have a fallback ready
    await _loadLocale(DEFAULT_LANG);

    // Determine starting language from storage or browser
    const stored   = localStorage.getItem(STORAGE_KEY);
    const browser  = (navigator.language || navigator.userLanguage || '').substring(0, 2).toLowerCase();
    const detected = SUPPORTED_LANGS.includes(stored)  ? stored
                   : SUPPORTED_LANGS.includes(browser) ? browser
                   : DEFAULT_LANG;

    await setLang(detected, false);   // false = don't re-save (already from storage)
  }

  /**
   * Switch active language.
   * @param {string}  lang  — one of SUPPORTED_LANGS
   * @param {boolean} save  — whether to persist to localStorage (default true)
   */
  async function setLang(lang, save = true) {
    if (!SUPPORTED_LANGS.includes(lang)) {
      console.warn(`[i18n] Unsupported language "${lang}". Ignoring.`);
      return;
    }

    const translations = await _loadLocale(lang);
    _currentLang = lang;

    _applyToDOM(translations);
    _updateButtons(lang);
    _updateHtmlLang(lang);

    if (save) {
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch (e) {
        // localStorage might be blocked in some private browsers — silent fail
      }
    }

    // Notify any registered callbacks
    _callbacks.forEach(cb => {
      try { cb(lang, translations); } catch (e) { /* ignore */ }
    });

    // Dispatch a custom DOM event so other scripts can react
    document.dispatchEvent(new CustomEvent('langchange', {
      detail: { lang, translations },
      bubbles: false
    }));
  }

  /**
   * Return the current active language code.
   */
  function getLang() {
    return _currentLang;
  }

  /**
   * Translate a single key, with optional fallback string.
   * @param {string} key
   * @param {string} [fallback]
   */
  function t(key, fallback = '') {
    const dict = _translations[_currentLang] || _translations[DEFAULT_LANG] || {};
    return dict[key] !== undefined ? dict[key] : fallback;
  }

  /**
   * Register a callback to run after every language change.
   * @param {Function} fn — receives (lang, translations)
   */
  function onChange(fn) {
    if (typeof fn === 'function') _callbacks.push(fn);
  }

  return { init, setLang, getLang, t, onChange };
})();

/* Export for use in main.js and any other scripts */
window.I18n = I18n;
