/**
 * main.js — Shared initialisation, navigation behaviour
 * Cyber Saathi
 *
 * Responsibilities:
 *  1. Initialise I18n on DOMContentLoaded.
 *  2. Wire up language-switcher buttons.
 *  3. Hamburger menu open/close (mobile nav).
 *  4. Close mobile menu on outside click or Escape key.
 *  5. Highlight active nav link for the current page.
 *  6. Smooth-scroll anchor links.
 *  7. Handle "Browse All Situations" hero CTA scroll.
 */

document.addEventListener('DOMContentLoaded', async () => {

  /* ============================================================
     1. Language switcher buttons
     ============================================================ */

  /**
   * Wire every [data-lang] button so clicking it calls I18n.setLang().
   */
  function initLangSwitcher() {
    document.querySelectorAll('[data-lang]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const lang = btn.getAttribute('data-lang');
        await I18n.setLang(lang);
      });

      // Keyboard: Space or Enter triggers the button (they are <button> elements,
      // so this is handled natively — here just for documentation purposes).
    });
  }

  /* ============================================================
     2. Mobile hamburger menu
     ============================================================ */

  function initMobileMenu() {
    const hamburger  = document.getElementById('nav-hamburger');
    const mobileMenu = document.getElementById('nav-mobile-menu');

    if (!hamburger || !mobileMenu) return;

    function openMenu() {
      hamburger.setAttribute('aria-expanded', 'true');
      mobileMenu.classList.add('is-open');
      // Trap focus: move focus to first link in menu
      const firstLink = mobileMenu.querySelector('a, button');
      if (firstLink) firstLink.focus();
    }

    function closeMenu() {
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('is-open');
    }

    function toggleMenu() {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      isOpen ? closeMenu() : openMenu();
    }

    hamburger.addEventListener('click', toggleMenu);

    // Close on Escape key
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && hamburger.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        hamburger.focus();
      }
    });

    // Close when clicking outside the navbar
    document.addEventListener('click', e => {
      const navbar = document.querySelector('.navbar');
      if (navbar && !navbar.contains(e.target)) {
        closeMenu();
      }
    });

    // Close when a mobile nav link is clicked (navigating on same page)
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  /* ============================================================
     3. Active nav link
     ============================================================ */

  /**
   * Mark the nav link whose href matches the current page as
   * aria-current="page" so screen readers announce it correctly.
   */
  function setActiveNavLink() {
    const current = window.location.pathname.split('/').pop() || 'index.html';

    document.querySelectorAll('.navbar__nav-link, .navbar__mobile-nav-link').forEach(link => {
      const href = link.getAttribute('href') || '';
      const linkPage = href.split('/').pop();

      // Match exact page name, or treat empty / index.html as equivalent
      const isCurrent = linkPage === current
        || (current === '' && (linkPage === 'index.html' || linkPage === ''))
        || (current === 'index.html' && (linkPage === '' || linkPage === 'index.html'));

      if (isCurrent) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  /* ============================================================
     4. Hero CTA — "Browse All Situations" scroll
     ============================================================ */

  function initHeroCTA() {
    const ctaPrimary = document.getElementById('cta-browse');
    if (!ctaPrimary) return;

    ctaPrimary.addEventListener('click', e => {
      const target = document.getElementById('scenarios');
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Move focus to section heading for accessibility
        const heading = target.querySelector('h2');
        if (heading) {
          heading.setAttribute('tabindex', '-1');
          heading.focus({ preventScroll: true });
        }
      }
    });
  }

  /* ============================================================
     5. Smooth-scroll for all in-page anchor links (#...)
     ============================================================ */

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        const targetId = anchor.getAttribute('href').slice(1);
        const target   = document.getElementById(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  /* ============================================================
     6. Scenario card interaction
         Cards with a real href (e.g. scenario-detail.html?id=message)
         navigate normally as links — no interception needed.
         Cards that still have href="#" (not yet built) show a
         friendly "coming soon" notice via the aria-live region.
     ============================================================ */

  function initScenarioCards() {
    document.querySelectorAll('.scenario-card').forEach(card => {
      const href = card.getAttribute('href');

      // Card has a real destination — let the browser handle it naturally.
      // No click listener needed; the <a> element does the work.
      if (href && href !== '#') return;

      // Card is still a placeholder — intercept and announce coming soon.
      card.addEventListener('click', e => {
        e.preventDefault();
        const liveRegion = document.getElementById('card-announcement');
        if (liveRegion) {
          const title = card.querySelector('.scenario-card__title');
          const name  = title ? title.textContent : 'This section';
          liveRegion.textContent = `${name} — detailed guide coming soon.`;
          setTimeout(() => { liveRegion.textContent = ''; }, 4000);
        }
      });
    });
  }

  /* ============================================================
     7. Navbar scroll shadow
         Adds a slightly stronger shadow once the user scrolls
         past 10px, so the sticky nav feels grounded.
     ============================================================ */

  function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let ticking = false;

    function updateNavbar() {
      if (window.scrollY > 10) {
        navbar.style.boxShadow = '0 2px 12px rgba(26,86,160,0.13)';
      } else {
        navbar.style.boxShadow = '';
      }
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    }, { passive: true });
  }

  /* ============================================================
     8. Boot sequence
     ============================================================ */

  // Step 1 — Initialise translations (loads locale JSON, applies to DOM)
  await I18n.init();

  // Step 2 — Wire up interactive components
  initLangSwitcher();
  initMobileMenu();
  setActiveNavLink();
  initHeroCTA();
  initSmoothScroll();
  initScenarioCards();
  initNavbarScroll();

  // Step 3 — Re-run active nav link after lang changes (site name may change)
  I18n.onChange(() => {
    setActiveNavLink();
  });

  /* ----------------------------------------------------------
     Announce language change to screen readers via a live region
  ---------------------------------------------------------- */
  I18n.onChange((lang) => {
    const liveRegion = document.getElementById('lang-announcement');
    if (!liveRegion) return;
    const langNames = { en: 'English', hi: 'हिंदी', mr: 'मराठी' };
    liveRegion.textContent = `Language changed to ${langNames[lang] || lang}`;
    setTimeout(() => { liveRegion.textContent = ''; }, 3000);
  });

});
