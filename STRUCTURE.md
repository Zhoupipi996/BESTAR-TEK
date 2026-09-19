# Bestar Site — File & Page Structure Plan

Static HTML/CSS/JS (no build step) — deploys as-is to GitHub Pages, Vercel, or
Cloudflare Pages. Chosen over Next.js because the site has no dynamic data
requirements yet; a static export adds a build step for no current benefit.
If the site later needs a CMS-driven blog or multi-language routing, a Next.js
migration is a reasonable second phase.

## Directory tree

```
/
├── index.html                          Home  ✅ built
├── solutions.html                      Solutions (4-tier ladder)  ✅ built
├── about.html                          About  — not yet built
├── faq.html                            FAQ — not yet built
├── contact.html                        Contact (tiered form) — not yet built
│
├── smart-devices/
│   ├── index.html                      Division landing — not yet built
│   ├── tablet-pc.html                  — not yet built
│   └── e-ink-tablet.html               — not yet built
│
├── eco-appliances/
│   ├── index.html                      Division landing — not yet built
│   └── food-waste-disposers.html       — not yet built
│
├── capabilities/
│   ├── index.html                      — not yet built
│   ├── manufacturing-partners.html     — not yet built
│   ├── quality-control.html            — not yet built
│   └── logistics-delivery.html         — not yet built
│
├── resources/
│   ├── index.html                      Blog index — not yet built
│   └── [article-slug].html             Article template — not yet built
│
├── css/
│   └── style.css                       ✅ built — shared design system
├── js/
│   └── main.js                         ✅ built — nav toggle, hero animation, tier-jump links
└── images/
    ├── generated/                      AI-generated / hand-built illustrative assets
    └── real/                           Placeholders for required real photography
```

## Category-template pattern (for future scalability)

Every product page (`smart-devices/tablet-pc.html`,
`eco-appliances/food-waste-disposers.html`, and any future SKU category)
should reuse the same section order so a new category page can be built by
copying the template and swapping content — no navigation or CSS changes
required:

1. Product hero (name, one-line positioning, primary spec highlights)
2. Spec table (`.compare-table` component from `solutions.html`)
3. Real product photography block (`.img-placeholder` until supplied)
4. Embedded mini tier-ladder (condensed 4-card version, same component as
   the Home page `.ladder`, linking back to `solutions.html#tier-N` for
   full detail rather than duplicating tier copy)
5. Certifications relevant to that product
6. CTA banner (`.cta-banner` component)

Adding a new division (beyond Smart Devices / Eco Appliances) means: add one
`division-card` block to `index.html`, add one folder under root, and reuse
every CSS class already defined — no structural changes to `style.css` or
the header/footer.

## Navigation

Header nav and footer are identical across all pages (copy/paste — no
templating layer yet since there's no build step). If the page count grows
past ~15, consider adding a lightweight static-site generator (e.g. Eleventy)
purely for shared header/footer includes, without changing the visual design.

## Next batch (recommended build order)

1. `contact.html` — tiered form (stock/light-OEM fields vs. ODM/integration
   fields), since every CTA on Home and Solutions already links here
2. `smart-devices/index.html` + `eco-appliances/index.html` — division
   landing pages
3. `eco-appliances/food-waste-disposers.html` — content already exists in
   depth from the foodcycler-manufacturer.top build; this is largely a
   content-port exercise once the two-domain content-overlap strategy is
   decided
4. `capabilities/*` — three sub-pages
5. `faq.html`, `about.html`
6. `resources/index.html` + article template
