# Audit Engine 🔍

I built this simple tool to get a quick read on how a website's DOM structure and semantics look to modern crawlers. It's basically a lightweight diagnostic engine that flags common SEO blockers and structural issues.

Basically, if your site looks like "div-soup" to a bot, this will find it.

### What it does:
- **Indexability Audit**: Scans the URL structure and protocol.
- **Structural Analysis**: Checks for JSON-LD/Schema.org markups and proper heading nesting.
- **Bento UI**: Results are presented in a clean, grid-based layout for quick scanning.
- **Dev-Ready**: Includes a "One-Click Copy" feature to grab a Markdown report for your team or bug tracker.

### The Stack:
- **Framework**: React 19 + Vite (for that instant HMR).
- **Styling**: Tailwind CSS 4.0.
- **State**: Standard React hooks (kept it simple).

### Getting Started:

First, install the deps:
```bash
npm install
```

Then, fire up the dev server:
```bash
npm run dev
```

### Note on the Audit Logic:
Right now, the scoring is handled by a local logic engine (`src/utils/auditModel.js`). It's designed to simulate a real-world crawl with about 800ms of latency so you can see the UI states in action. I'm planning to hook this up to a real backend later.

---
Built by [Ayush Biju](https://github.com/ayushbiju)
