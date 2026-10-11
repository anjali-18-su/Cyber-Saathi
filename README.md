# Cyber Saathi 🛡️

**Stop. Think. Verify. Report.**

Cyber Saathi is a free, multilingual cybersecurity awareness website designed to help ordinary people — students, parents, and senior citizens — understand what to do when they encounter suspicious digital activity.

---

## Languages

| Code | Language |
|------|----------|
| `en` | English |
| `hi` | हिंदी (Hindi) |
| `mr` | मराठी (Marathi) |

Selected language is saved in `localStorage` and persists across visits.

---

## Project Structure

```
cyber-saathi/
├── index.html                  # Homepage
├── assets/
│   ├── css/
│   │   ├── main.css            # Design tokens, reset, base typography
│   │   ├── components.css      # Navbar, hero, cards, buttons, emergency, footer
│   │   └── responsive.css      # Mobile-first breakpoints (xs → xl)
│   └── js/
│       ├── i18n.js             # Language switching engine (window.I18n)
│       └── main.js             # Navigation, hamburger menu, scroll, init
├── locales/
│   ├── en.json                 # English strings
│   ├── hi.json                 # Hindi strings
│   └── mr.json                 # Marathi strings
└── README.md
```

---

## How to Run Locally

### Option 1 — VS Code Live Server (recommended)

1. Install the **Live Server** extension in VS Code.
2. Right-click `index.html` → **Open with Live Server**.
3. The site opens at `http://127.0.0.1:5500/`.

### Option 2 — Python HTTP server

```bash
# Python 3
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

### Option 3 — Node.js `serve`

```bash
npx serve .
```

> ⚠️ **Do not open `index.html` directly as a `file://` URL.**
> The i18n engine fetches locale JSON files using `fetch()`, which
> browsers block on `file://` for security reasons. A local server
> is required (any option above works).

---

## How to Deploy (Free)

### GitHub Pages

1. Create a public GitHub repository named `cyber-saathi`.
2. Push all files to the `main` branch.
3. Go to **Settings → Pages → Source**: `main` branch, `/ (root)`.
4. Your site goes live at `https://<your-username>.github.io/cyber-saathi/`.

> If deploying to a sub-path like `/cyber-saathi/`, update the
> `<meta name="locale-base" content="locales/">` in each HTML file
> to use a root-relative path: `content="/cyber-saathi/locales/"`.

### Other free options

| Platform | Steps |
|----------|-------|
| **Netlify** | Drag the project folder to [app.netlify.com/drop](https://app.netlify.com/drop) |
| **Vercel** | `npx vercel` in the project folder |
| **Cloudflare Pages** | Connect GitHub repo, no build command needed |

---

## Technology

- Plain **HTML5** — semantic, accessible markup
- Plain **CSS3** — custom properties, grid, flexbox, no framework
- Plain **Vanilla JavaScript** — no bundler, no dependencies
- **Google Fonts** — Noto Sans + Noto Sans Devanagari (covers all three scripts)

No backend. No database. No analytics. No cookies. No paid services.

---

## Accessibility

- WCAG AA colour contrast throughout
- Minimum 48×48 px touch targets
- Visible keyboard focus indicators
- `aria-live` regions for language change and card announcements
- `lang` attribute updated on every language switch
- Skip-to-main link for keyboard users
- `prefers-reduced-motion` respected

---

## Phase Roadmap

| Phase | Status | Content |
|-------|--------|---------|
| 1 | ✅ Done | Homepage foundation, i18n, scenario cards |
| 2 | Planned | Individual scenario detail pages |
| 3 | Planned | Self-check quiz |
| 4 | Planned | Verified resources / helplines page |
| 5 | Planned | About page |

---

## Important Note on Content

This website provides **general awareness information only**.

- No official helpline numbers or government URLs are included until they have been individually verified.
- Always cross-check information with official Indian government sources:
  - [cybercrime.gov.in](https://cybercrime.gov.in) — National Cyber Crime Reporting Portal
  - [cert-in.org.in](https://www.cert-in.org.in) — CERT-In
  - [rbi.org.in](https://www.rbi.org.in) — Reserve Bank of India

---

## License

This project is released for public benefit. You may freely adapt and redistribute it for non-commercial awareness purposes with attribution.
