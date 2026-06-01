# i5 Creative LLC — Website
## Job: 26002-ICL | Phase 1 | Built: June 2026

---

## File Structure

```
i5creative/
├── index.html          — Home page (all 8 sections)
├── services.html       — Services + FAQ
├── about.html          — About / Story / Values
├── contact.html        — Contact + Lead Form
├── sitemap.xml         — XML sitemap
├── robots.txt          — Search crawler rules
├── llms.txt            — AI search optimization
├── vercel.json         — Vercel deployment config
├── css/
│   └── styles.css      — Global design system (all pages)
└── js/
    └── main.js         — Global JS (nav, reveal, GA4, forms)
```

---

## Pre-Launch TODO Checklist

### Client Confirmations Required
- [ ] `TODO: A_serviceArea` — Define specific service area (counties, cities, radius)
- [ ] `TODO: A_hours` — Business hours for footer/contact page
- [ ] `TODO: B_logoFormat` — Provide logo file (SVG preferred); replace header text logo with image
- [ ] `TODO: K_homeNotes` — Any homepage-specific copy notes
- [ ] `TODO: K_servicesNotes` — Services page copy notes
- [ ] `TODO: K_aboutNotes` — About page copy notes
- [ ] `TODO: K_contactNotes` — Contact page contact notes
- [ ] Portfolio images (6 slots in home hero section, services page)
- [ ] Primary hero image (if using photography instead of type graphic)
- [ ] Competitor sites for reference/differentiator copy (Section C of PRD)
- [ ] Google Business Profile URL (for schema sameAs links)
- [ ] Social media profile URLs

### Technical Required Before Launch
- [ ] Replace `TODO_GA4_ID` with actual GA4 Measurement ID (all 4 HTML files)
- [ ] Replace `TODO_PRIVACY_POLICY_URL` with actual Privacy Policy URL (all 4 HTML files)
- [ ] Update `https://www.i5creative.com` throughout if domain differs
- [ ] Connect contact form to actual endpoint (Formspree, Netlify Forms, or custom backend)
- [ ] Add OG image (`/assets/og-image.jpg`) — 1200×630px
- [ ] Add favicon (`/assets/favicon.ico` or `favicon.svg`)
- [ ] Replace text logo in header with SVG logo asset when provided
- [ ] Add GBP/social `sameAs` URLs to JSON-LD on index.html
- [ ] Update `TODO_PRIVACY_POLICY_URL` with actual Privacy Policy URL

### SEO / GEO
- [ ] Create Google Business Profile if none exists
- [ ] Submit sitemap to Google Search Console post-launch
- [ ] Validate schema at schema.org/validator
- [ ] Run WAVE accessibility audit (wave.webaim.org)
- [ ] Run axe DevTools accessibility audit
- [ ] Run PageSpeed Insights (target: 90+ mobile, 95+ desktop)
- [ ] Check all images have descriptive alt text
- [ ] Keyboard navigation test (Tab through every interactive element)

---

## Deployment to Vercel

1. Push project to GitHub repo
2. Connect repo to Vercel (vercel.com → Import Project)
3. Vercel auto-detects static HTML — no build configuration needed
4. Set custom domain in Vercel project settings
5. Update DNS at domain registrar:
   - Add `A` record: `76.76.21.21`
   - Add `CNAME` for `www`: `cname.vercel-dns.com`
6. Vercel handles SSL automatically via Let's Encrypt

---

## Font Notes

The brand spec calls for **Neue Plak W01 Narrow SemiBold** and **Neue Plak W01 Regular**.
These are licensed fonts not available on Google Fonts. Two options:
1. **Purchase license** via Adobe Fonts or Fontsmith and self-host the WOFF2 files
2. **Fallback as-built**: DM Sans is used as the Google Fonts fallback — visually close, no license required

To add self-hosted fonts, add them to `/assets/fonts/` and update the `@font-face` declarations in `styles.css`.

---

## Design System Quick Reference

| Token | Value |
|-------|-------|
| Red | `#F84525` |
| Black | `#111111` |
| White | `#F9F9F9` |
| Gray mid | `#6F6F6F` |
| Gray light | `#E8E8E8` |
| Gray dark | `#2A2A2A` |
| Headline font | Montserrat 700 |
| Body font | DM Sans 400 |
| Base spacing unit | 8px |

---

*Built by i5 Creative | Job 26002-ICL | Phase 1 Static Site*
