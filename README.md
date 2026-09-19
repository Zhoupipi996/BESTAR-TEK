# Bestar — bestartek.com rebuild v2 (per BESTAR-建站AI指令.pdf)

Static HTML/CSS/JS, no build step. Built directly on top of the first-batch
deliverable you uploaded (`index.html`, `solutions.html`, `css/style.css`,
`js/main.js`, and the two hand-built SVGs) — same design system throughout.

## What's in this batch (16 pages total)

```
index.html                                  ✅ from your upload (About link added to nav)
solutions.html                              ✅ from your upload (About link added to nav)
about.html                                  ✅ new — company info, confirmed address/phone/team/MOQ
faq.html                                    ✅ new — FAQPage structured data
contact.html                                ✅ new — tiered form (fields change by Tier 1/2 vs 3/4)

smart-devices/index.html                    ✅ new — division landing
smart-devices/tablet-pc.html                ✅ new — real specs/images from bestartek.com
smart-devices/e-ink-tablet.html             ✅ new — honest placeholder, no invented specs

eco-appliances/index.html                   ✅ new — division landing
eco-appliances/food-waste-disposers.html    ✅ new — content via manufacturing partner, sourcing note kept

capabilities/index.html                     ✅ new — ODM workflow (9 steps, text form)
capabilities/manufacturing-partners.html    ✅ new — certifications, non-exclusive partner wording
capabilities/quality-control.html           ✅ new — 4-stage QC, hand-built SVG diagram
capabilities/logistics-delivery.html        ✅ new — shipping lanes, hand-built SVG route map

resources/index.html                        ✅ new — blog index (3 posts, 1 linked)
resources/understanding-gms-certification.html  ✅ new — article template, GEO-structured Q&A
```

## Image status (see `IMAGE-BRIEF.md` from your upload for the full plan)

**Delivered as clean hand-built SVG (no external tool used):**
`hero-circuit-visual.svg`, `service-progression-diagram.svg` (both from your
upload), plus 4 new tier icons and 2 new infographics I built this batch:
`tier-icon-01..04.svg`, `qc-process-diagram.svg`, `logistics-route-diagram.svg`.
I chose hand-built SVG over an AI raster generator for the QC and logistics
diagrams too — same reasoning as the original two: line-art infographics are
something I can produce directly, on-brand, and vector-crisp, without needing
an external image tool.

**Still needs an external AI image generator (I don't have one in this
environment):** the two lifestyle "for illustration purposes" scenes —
`scene-education-tablet.jpg` and `scene-eco-kitchen.jpg`. Both pages have a
placeholder block with the ready-to-use prompt from `IMAGE-BRIEF.md`. Run
those prompts through Midjourney/DALL·E/your tool of choice, save into
`images/generated/`, swap the placeholder `<div class="img-placeholder">`
for an `<img>`, and add a visible "for illustration purposes" caption.

**Must stay real photography — never AI, still placeholders:**
certification badges (Home, About, Capabilities/Manufacturing Partners),
tablet/E-ink/disposer product photos beyond what's already hotlinked from
bestartek.com, and the real ODM workflow diagram if one already exists on
the current site (reuse verbatim, don't regenerate).

## Content sourcing — what's verified vs. placeholder

- **Tablet PC / Digital Signage**: real content and images, hotlinked from
  bestartek.com's own media library. Download and re-host in `images/real/`
  before decommissioning WordPress.
- **E-ink Tablet**: genuinely empty on the current bestartek.com — no specs
  invented. Page tells you exactly what's needed to fill it in.
- **Eco Appliances / Food Waste Disposers**: sourced from the reference
  manufacturing partner's catalog per your instruction, framed as "strategic
  partnership with certified manufacturing facilities" (non-exclusive,
  non-subsidiary wording) per the brief's relationship-boundary requirement.
  Factory names are intentionally not published pending authorization.
- **Company details** (address, phone, team size, MOQ): the values you
  confirmed are now live on About and Contact.
- **Resources articles**: titles ported from Bestar's existing news section;
  only one has a full (placeholder) article page — the other two are listed
  but not yet built out.
- **Incoterms / export documentation practice**: not yet specified —
  flagged as `[not yet specified]` on Logistics & Delivery.

## SEO / GEO implementation

- Per-page `<title>` + meta description targeting "OEM ODM solution
  provider", "custom hardware manufacturer", "smart display terminal", "eco
  appliance OEM" — no keyword stuffing.
- `canonical` link on every page.
- Schema.org JSON-LD: `Organization` (Home, About), `Service` +
  `OfferCatalog` (Solutions), `Product` (Tablet PC, Food Waste Disposers),
  `FAQPage` (FAQ), `Article` (Resources template).
- FAQ answers kept to roughly 100–150 words per the brief's GEO guidance.

## Run locally

```bash
python3 -m http.server 8000
```

## Deploy

Same as before — `git init` is already done in this folder.

```bash
git add .
git commit -m "Batch 2: full sitemap"
git remote add origin https://github.com/<you>/bestartek-site.git
git branch -M main
git push -u origin main
```

Then GitHub repo → Settings → Pages → Deploy from branch → `main` / `(root)`.
For the `bestartek.com` custom domain, add a `CNAME` file containing
`bestartek.com` and point your DNS per GitHub's current Pages docs.

## Next steps I'd suggest

1. Confirm the two remaining Resources articles (PoE, OEM vs ODM) — I can
   build those pages once you say go.
2. Supply real product/cert photography per `IMAGE-BRIEF.md`.
3. Run the two lifestyle-scene prompts through an image generator and drop
   the files in.
4. Fill in Incoterms/export documentation on Logistics & Delivery.
5. Decide whether to name manufacturing partner factories (needs their
   authorization first, per the brief).
