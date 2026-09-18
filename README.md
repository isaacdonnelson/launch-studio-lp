# Launch Studio — Personal Brand Landing Page

Operator brand LP for Isaac Donnelson: **SaaS launch + standing Grok bots**.

## House locks
- **Close = LAUNCH + product → DM/call** (Launch Sprint apply). Never VSL / link-in-bio / page checkout as the default close.
- Early-buy **Launch Sprint Starter ($97)** only **after** lead submit.
- Unique mix: SaaS launch + standing Grok bots. No AI slop. No fake proof.

## Quick start
```bash
npm start
# open http://localhost:5173
```

Static HTML/CSS/JS. Leads/applies store in `localStorage` in demo mode (`ls_leads`, `ls_apply`, `ls_early_buy`).

## Wire production capture
1. **Formspree / Resend / custom API** — replace `save()` in `app.js` with `fetch` to your endpoint. Env ideas: `FORMSPREE_ID`, `RESEND_API_KEY`.
2. **Stripe early-buy** — create a Price for $97 Starter; set `STRIPE_PRICE_ID` and redirect `early-buy` click to Stripe Checkout. Keep it post-lead only.
3. **Deploy** — any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages).

## Docs (research + signed funnel)
See `/docs` for blueprint, train pack, LP brief, TBD lock, audits, and pins.

## Sentence
Systems to build, launch, and grow SaaS and online businesses — Grok bots on standing duties.
