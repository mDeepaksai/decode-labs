# StackFind

> A static SaaS tool discovery platform — browse, filter, search, and submit tools.

🔗 **Live:** [mdeepaksai.github.io/decode-labs](https://mdeepaksai.github.io/decode-labs/)

---

## Overview

StackFind is a frontend-only multi-page web app that lets users discover and explore SaaS tools across categories like AI, Design, Dev Tools, Marketing, and more. Built with vanilla HTML, CSS, and JavaScript — no frameworks, no build step.

---

## Live Pages

| Page | URL |
|---|---|
| Home | [/decode-labs/](https://mdeepaksai.github.io/decode-labs/) |
| Sign In | [/decode-labs/signin.html](https://mdeepaksai.github.io/decode-labs/signin.html) |
| Create Account | [/decode-labs/create.html](https://mdeepaksai.github.io/decode-labs/create.html) |
| Submit a Tool | [/decode-labs/submittool.html](https://mdeepaksai.github.io/decode-labs/submittool.html) |

---

## Features

**Home (`index.html`)**
- Hero section with live search bar
- Category filter pills — All, AI Tools, Productivity, Dev Tools, Design, Marketing, Sales, Support
- Tool cards with logo, tagline, description, category tag, and Visit link
- Search scans title, tagline, and description in real time
- Fully responsive — 1 col → 2 col → 3 col grid

**Sign In (`signin.html`)**
- Email + password form with validation
- GitHub and Google OAuth buttons (UI only)
- Forgot password link
- Two-column layout on desktop

**Create Account (`create.html`)**
- First name, last name, email, password, confirm password
- Live password strength meter (4 segments: Weak → Fair → Good → Strong)
- Password visibility toggle
- Inline field-level error messages
- Terms of Service checkbox
- Success state replaces form on completion

**Submit a Tool (`submittool.html`)**
- Tool name, website URL, logo upload with live preview
- Category dropdown, tagline, description textarea
- Pricing model chip selector — Free, Freemium, Paid, Open Source, Contact Sales
- Submitter name + email
- Inline success banner after submission, form resets automatically

---

## Tech Stack

| Layer | Tech |
|---|---|
| Markup | HTML5 |
| Styles | CSS3 (custom, no framework) |
| Logic | Vanilla JavaScript (ES6) |
| Fonts | [Montserrat](https://fonts.google.com/specimen/Montserrat) via Google Fonts |
| Icons | [Font Awesome 6.5](https://fontawesome.com/) via CDN |
| Hosting | GitHub Pages |

---

## Project Structure

```
decode-labs/
├── index.html
├── index.css
├── index.js
├── signin.html
├── signin.css
├── signin.js
├── create.html
├── create.css
├── create.js
├── submittool.html
├── submittool.css
├── submittool.js
└── README.md
```

---

## Design System

| Token | Value |
|---|---|
| Background | `#0a0a14` |
| Surface | `rgba(255,255,255,0.04)` |
| Border | `rgba(160,212,224,0.2)` |
| Accent cyan | `#A0D4E0` |
| Brand warm | `#A5856E` |
| Text primary | `#F2F0EA` |
| Text muted | `rgba(242,240,234,0.5)` |
| Error | `rgba(255,100,100,0.6)` |
| Font | Montserrat 400/500/700 |

**Page gradient:**
```css
background: linear-gradient(to bottom, #0a0a14 0%, #1a1a2e 30%, #16213e 60%, #0a0a14 100%);
```

---

## Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| `< 768px` | Mobile — single column, hamburger nav |
| `≥ 768px` | Tablet — 2-col card grid |
| `≥ 1024px` | Desktop — 3-col grid, inline nav, split auth layout |

---

## Running Locally

```bash
# Clone
git clone https://github.com/mDeepaksai/decode-labs.git
cd decode-labs

# Serve (Python)
python -m http.server 8080

# Or with Node
npx serve .
```

Open `http://localhost:8080`

> Direct file open (`file://`) works for most things but may cause CORS issues with fonts — use a local server.

---

## Current Limitations

- No backend — all form submissions are simulated with `setTimeout`
- OAuth buttons are UI stubs only (no actual auth flow)
- Tool cards are hardcoded in HTML — no database or CMS
- No empty state shown when search returns zero results

---

## Author

**Mallarpu Deepak Sai**
- GitHub: [@mDeepaksai](https://github.com/mDeepaksai)
- LinkedIn: [mdeepaksai](https://www.linkedin.com/in/mdeepaksai/)
- Twitter: [@mdeepaksai806](https://x.com/mdeepaksai806)
