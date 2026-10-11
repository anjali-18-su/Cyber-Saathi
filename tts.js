/**
 * tts.js — Text-to-Speech engine for Cyber Saathi
 *
 * Uses the browser's built-in Web Speech API (speechSynthesis).
 * No external API. No backend. No API key. No cost.
 *
 * Public API (window.TTS):
 *   TTS.isSupported()          → boolean
 *   TTS.hasVoice(lang)         → boolean — true only if a native voice exists for lang
 *   TTS.speak(text, lang, id)  → starts speaking; stops any current speech first
 *   TTS.pause()                → pauses current utterance
 *   TTS.resume()               → resumes a paused utterance
 *   TTS.stop()                 → cancels current utterance
 *   TTS.stopAll()              → stop + reset; called on language change
 *   TTS.getState()             → 'idle' | 'speaking' | 'paused'
 *   TTS.onStateChange(fn)      → register callback(state, sectionId)
 *   TTS.attachButton(btn, getTextFn, sectionId)
 *                              → fully manages one Listen button's lifecycle
 *
 * Strict language policy (requirement 9):
 *   - en → en-IN, en-GB, en-US  (always finds a voice on any browser)
 *   - hi → hi-IN only           (no cross-language fallback)
 *   - mr → mr-IN only           (never falls back to Hindi)
 *   If no native voice is found for hi or mr, hasVoice() returns false
 *   and attachButton() hides the button rather than producing wrong-language audio.
 */

window.TTS = (() => {

  /* ----------------------------------------------------------
     Feature detection
  ---------------------------------------------------------- */
  const _supported = typeof window !== 'undefined'
                  && 'speechSynthesis' in window
                  && typeof SpeechSynthesisUtterance !== 'undefined';

  /* ----------------------------------------------------------
     State machine
     States: 'idle' | 'speaking' | 'paused'
  ---------------------------------------------------------- */
  let _state         = 'idle';
  let _activeSectionId = null;   // which section is currently speaking
  let _callbacks     = [];       // registered onStateChange listeners

  function _setState(newState, sectionId) {
    _state           = newState;
    _activeSectionId = (newState === 'idle') ? null : (sectionId || _activeSectionId);
    _callbacks.forEach(fn => {
      try { fn(newState, _activeSectionId); } catch (e) { /* ignore */ }
    });
  }

  /* ----------------------------------------------------------
     Voice selection — STRICT: no cross-language fallbacks.
     Each language only accepts voices whose BCP-47 tag starts
     with the correct language prefix.  hi never falls back to
     an English voice; mr never falls back to hi-IN.
     Returns null when no suitable voice is found.
  ---------------------------------------------------------- */

  /* Acceptable BCP-47 prefixes per language code.
     Order = preference (first match wins).                    */
  const _voicePrefixes = {
    en: ['en-IN', 'en-GB', 'en-US', 'en'],   /* English always available */
    hi: ['hi'],                                /* Hindi only               */
    mr: ['mr']                                 /* Marathi only — never hi  */
  };

  /* utterance.lang tag to set on the SpeechSynthesisUtterance */
  const _bcp47Tag = { en: 'en-IN', hi: 'hi-IN', mr: 'mr-IN' };

  /**
   * _pickVoice(lang) → SpeechSynthesisVoice | null
   * Returns the best available native voice for lang, or null.
   * For 'en', falls back through en-IN → en-GB → en-US → any 'en' voice.
   * For 'hi' and 'mr', returns null if no native voice exists — never
   * substitutes a different language.
   */
  function _pickVoice(lang) {
    if (!_supported) return null;
    const voices   = window.speechSynthesis.getVoices();
    if (!voices.length) return null;

    const prefixes = _voicePrefixes[lang] || _voicePrefixes['en'];

    /* Try each preferred prefix in order */
    for (const pfx of prefixes) {
      /* Exact BCP-47 match first (e.g. 'en-IN') */
      const exact = voices.find(v => v.lang === pfx);
      if (exact) return exact;

      /* Prefix match (e.g. 'hi' matches 'hi-IN', 'hi-Deva-IN') */
      const prefix = voices.find(
        v => v.lang.toLowerCase().startsWith(pfx.toLowerCase() + '-')
          || v.lang.toLowerCase() === pfx.toLowerCase()
      );
      if (prefix) return prefix;
    }

    /* No voice found for this language — return null, do not cross-substitute */
    return null;
  }

  /**
   * hasVoice(lang) → boolean
   * Public method — returns true only if a native voice is available for lang.
   * Called by attachButton to decide whether to show or hide the TTS button.
   * For 'en' this is almost always true.
   * For 'hi'/'mr' this depends on what the device/browser has installed.
   * Uses a voices-ready promise to handle Chrome's async voice loading.
   */
  function _voicesReady() {
    return new Promise(resolve => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) { resolve(voices); return; }
      /* Chrome loads voices asynchronously */
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.onvoiceschanged = null;
        resolve(window.speechSynthesis.getVoices());
      };
      /* Timeout safety: resolve empty after 2s if event never fires */
      setTimeout(() => resolve(window.speechSynthesis.getVoices()), 2000);
    });
  }

  async function hasVoice(lang) {
    if (!_supported) return false;
    await _voicesReady();
    return _pickVoice(lang) !== null;
  }

  /* ----------------------------------------------------------
     Core speak / pause / resume / stop
  ---------------------------------------------------------- */

  function speak(text, lang, sectionId) {
    if (!_supported) return;

    /* Always cancel any running speech first */
    window.speechSynthesis.cancel();

    if (!text || !text.trim()) {
      _setState('idle', null);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text.trim());

    /* Set language tag — primary signal to the speech engine */
    utterance.lang = _bcp47Tag[lang] || 'en-IN';

    /* Assign specific voice if available */
    const voice = _pickVoice(lang);
    if (voice) utterance.voice = voice;

    /* Comfortable reading rate for seniors — slightly slower than default */
    utterance.rate   = 0.88;
    utterance.pitch  = 1.0;
    utterance.volume = 1.0;

    utterance.onstart  = () => _setState('speaking', sectionId);
    utterance.onpause  = () => _setState('paused',   sectionId);
    utterance.onresume = () => _setState('speaking', sectionId);
    utterance.onend    = () => _setState('idle',     null);

    utterance.onerror = (e) => {
      /* 'interrupted' / 'canceled' fire when cancel() is called — not real errors */
      if (e.error !== 'interrupted' && e.error !== 'canceled') {
        console.warn('[TTS] SpeechSynthesis error:', e.error);
      }
      _setState('idle', null);
    };

    /* Chrome async-voice bug: if voices aren't ready, wait then assign */
    _voicesReady().then(() => {
      const v = _pickVoice(lang);
      if (v) utterance.voice = v;
    });

    window.speechSynthesis.speak(utterance);
    /* Optimistically set state — onstart fires async and may lag */
    _setState('speaking', sectionId);
  }

  function pause() {
    if (!_supported || _state !== 'speaking') return;
    window.speechSynthesis.pause();
    /* Some browsers fire onpause; others don't. Force state update. */
    _setState('paused', _activeSectionId);
  }

  function resume() {
    if (!_supported || _state !== 'paused') return;
    window.speechSynthesis.resume();
    _setState('speaking', _activeSectionId);
  }

  function stop() {
    if (!_supported) return;
    window.speechSynthesis.cancel();
    _setState('idle', null);
  }

  function getState()  { return _state; }
  function isSupported() { return _supported; }

  function onStateChange(fn) {
    if (typeof fn === 'function') _callbacks.push(fn);
  }

  /* ----------------------------------------------------------
     attachButton(btn, getTextFn, sectionId)
     ─────────────────────────────────────────────────────────
     Fully manages a single Listen button.

     Parameters:
       btn         — the <button> DOM element
       getTextFn   — zero-arg function returning the text to speak
                     (called at click time — always uses live language)
       sectionId   — unique string identifying this section

     Behaviour:
       • If speechSynthesis is absent → replace btn with a notice.
       • If speechSynthesis present but NO native voice for the current
         language → hide btn gracefully (no wrong-language audio).
       • If a native voice exists → manage full Listen/Pause/Resume cycle.
       • On language change, caller must call stopAll() then re-check
         hasVoice() for the new language and call refreshButton(newLang).
  ---------------------------------------------------------- */
  function attachButton(btn, getTextFn, sectionId) {
    if (!btn) return;

    /* ── speechSynthesis entirely absent ────────────────── */
    if (!_supported) {
      const notice = document.createElement('p');
      notice.className = 'tts-unavailable';
      notice.setAttribute('role', 'note');
      btn._ttsNotice = notice;
      btn.parentNode.replaceChild(notice, btn);
      return;
    }

    /* ── Label helpers ───────────────────────────────────── */
    function label(key, fallback) {
      return (window.I18n && I18n.t(key)) || fallback;
    }

    /* ── Visual / accessible state update ───────────────── */
    function updateBtn(state, activeSec) {
      const isThisSection = activeSec === sectionId;

      if (state === 'speaking' && isThisSection) {
        btn.textContent = label('tts_pause', '⏸ Pause');
        btn.setAttribute('aria-label',   label('tts_pause', 'Pause reading'));
        btn.setAttribute('data-tts-state', 'speaking');
        btn.setAttribute('aria-pressed',   'true');

      } else if (state === 'paused' && isThisSection) {
        btn.textContent = label('tts_resume', '▶ Resume');
        btn.setAttribute('aria-label',   label('tts_resume', 'Resume reading'));
        btn.setAttribute('data-tts-state', 'paused');
        btn.setAttribute('aria-pressed',   'true');

      } else {
        btn.textContent = label('tts_listen', '🔊 Listen');
        btn.setAttribute('aria-label',   label('tts_listen', 'Listen to this section'));
        btn.setAttribute('data-tts-state', 'idle');
        btn.setAttribute('aria-pressed',   'false');
      }
    }

    /* ── Click handler ───────────────────────────────────── */
    function onClick() {
      const currentState = getState();
      if (currentState === 'speaking' && _activeSectionId === sectionId) {
        pause();
      } else if (currentState === 'paused' && _activeSectionId === sectionId) {
        resume();
      } else {
        const text = getTextFn();
        const lang = (window.I18n && I18n.getLang()) || 'en';
        speak(text, lang, sectionId);
      }
    }

    /* ── Initial setup ───────────────────────────────────── */
    updateBtn('idle', null);
    onStateChange((state, activeSec) => updateBtn(state, activeSec));
    btn.addEventListener('click', onClick);

    /* ── Voice availability check (async) ───────────────── */
    /* Check once on attach for the current language.
       The wrap element's visibility is toggled here and also
       by refreshButton() when the language changes.           */
    const wrap = btn.closest('.tts-btn-wrap');

    async function checkVoiceAvailability(lang) {
      const available = await hasVoice(lang);
      if (wrap) {
        /* Hide the whole wrap (button + border) when no voice */
        wrap.style.display = available ? '' : 'none';
      }
    }

    const initLang = (window.I18n && I18n.getLang()) || 'en';
    checkVoiceAvailability(initLang);

    /* Expose a refresh method so scenario-detail.html can call it
       after a language change without re-creating the button.    */
    btn._ttsRefresh = (newLang) => {
      stop(); /* ensure clean state */
      updateBtn('idle', null);
      checkVoiceAvailability(newLang);
    };
  }

  /* ----------------------------------------------------------
     stopAll — convenience: stop speech and reset all buttons.
     Called by scenario-detail.html when language changes.
  ---------------------------------------------------------- */
  function stopAll() {
    stop();
  }

  /* ----------------------------------------------------------
     Public API
  ---------------------------------------------------------- */
  return {
    isSupported,
    hasVoice,
    speak,
    pause,
    resume,
    stop,
    stopAll,
    getState,
    onStateChange,
    attachButton
  };

})();
