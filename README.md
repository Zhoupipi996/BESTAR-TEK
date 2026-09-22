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

---

## Batch 3 — SEO/GEO pass + full catalogs + Resources restructure

Based on your live edits at zhoupipi996.github.io/BESTAR-TEK (I couldn't fetch that URL directly — search didn't index it yet — so this batch builds on the local copy from Batch 2 plus your change list).

**Site-wide**
- "Bestar" → "BESTAR" everywhere.
- "Stock" → "Ready Inventory" everywhere it described inventory (tier names, CTAs, the service-progression SVG label). Internal values (`tier=stock` URL param, `tier-icon-01-stock.svg` filename) left as-is since they're not user-visible.
- Removed "Tier 4 (System Integration) applies to Smart Devices only" from the Eco Appliances page.
- "Building a private-label composter line?" → "...food cycler line?"
- Home hero: "Over 7 yrs Custom hardware & OEM/ODM experience" / "EU · US · JP · KR Core export markets".
- Home Division 01 now lists 3 categories in order: Tablet PC, Interactive Digital Signage, E-ink Tablet.

**New: Interactive Digital Signage is now its own category page** (`smart-devices/digital-signage.html`), pulled out of the old Tablet PC page, with all 6 real signage products from bestartek.com.

**Full real catalogs** (previously partial):
- Tablet PC: all 12 models from bestartek.com/products/, real images + spec text + source links.
- Digital Signage: all 6 models, same treatment.
- Electric Food Waste Disposers: all 8 capacity series (2L, 2.8L, 3L, 3.8L, 4.8L, 4L×2, 5.5L) with **real product photos** hotlinked from foodcycler-manufacturer.top's CDN — per your go-ahead to use that site's images/content directly, I stopped placeholder-blocking them.

**SEO / GEO keyword pass** (as requested — Electric Food Waste Disposer primary, Electric Food Cycler / Electric Kitchen Composter secondary):
- Disposer page: primary keyword in H1, first paragraph, title tag, meta description, URL slug; secondary terms woven into subheads, alt text, and a new on-page FAQ block with `FAQPage` schema. Product schema now includes `alternateName` for the two secondary terms.
- Tablet PC / Digital Signage pages: primary "OEM Android Tablet PC" / "Interactive Digital Signage", secondary/long-tail terms ("bulk Android tablets for business", "wall-mounted digital display", "white-label Android tablet") worked into H1s, alt text, and body copy.

**Resources restructured into two division hubs** (your concern about mixing content was right):
- `resources/index.html` is now a simple hub linking to two sub-hubs.
- `resources/smart-devices/` — 3 articles (1 fully placeholder-built, 2 stubs), real titles from bestartek.com's news section.
- `resources/eco-appliances/` — 6 articles listed, 1 fully placeholder-built ("Why Choose OEM for Your Electric Food Waste Disposer Brand?"), titles and dates ported from foodcycler-manufacturer.top's blog.
- Each division hub is independently expandable — adding a new post to one never touches the other's list.

**Still pending / needs your input**
- The two AI lifestyle scenes (classroom, kitchen) — still no image-gen tool available here; prompts are on the pages.
- Real certification badge artwork (ISO/CE/PSE/etc.) — still placeholder slots everywhere.
- E-ink Tablet — still empty on the source site, no specs invented.
- Most Eco Appliances article pages are listed but not yet built out (only the OEM one is).

---

## Batch 4 — Product detail pages, contact prefill, disposer page edits, real article content

**1. Every product now has its own permanent detail page** (no more depending on bestartek.com staying online):
- `smart-devices/tablet-pc/<slug>.html` — 12 pages, one per tablet model
- `smart-devices/digital-signage/<slug>.html` — 6 pages, one per signage model
- Each has: full spec table, unique ~100-word keyword-rich description, mini 4-tier ladder, 3 related products, and its own Product schema.
- Listing pages (`tablet-pc.html`, `digital-signage.html`) now link to these instead of external bestartek.com URLs, and every product card got a **"Send Inquiry" button** next to "View Full Specs" — same layout across all 18 cards.
- Contact form now reads a `?model=` URL param and pre-fills the "Product model" field, so a click-through from any product card/detail page arrives pre-filled.

**2. Eco Appliances / Electric Food Waste Disposers page:**
- Removed the "Sourcing note" paragraph.
- Added an **"Our Advantages"** heading above the stat row, with two new items: *Modular Detachable & Washable Design (Patent)* and *Vertical Manufacturer — Self-Owned Motor & Mold Factory*, alongside the existing Capacity/Noise/Motor/SKUs stats (now 6 items total).

**3. Resources articles now have real content**, not placeholder shells — all 4 built pages rewritten with 400–600 words each, H2-structured for GEO, internal links to relevant product pages, and `FAQPage` schema blocks:
- Why Choose OEM for Your Electric Food Waste Disposer Brand?
- Understanding GMS Certification for B2B Android Tablets
- What is PoE and Why Your Smart Home Control Panel Needs It?
- OEM vs. ODM Android Tablets: Which Is Best?

**Still pending:** the 5 other Eco Appliances article titles listed on the Resources hub still don't have built pages (only "Why Choose OEM..." does) — say the word and I'll write those out too.

---

## Batch 5 — Real technical spec pages, Eco Appliances fixes, Resources content expansion

**1. Every Tablet PC and Digital Signage product now has a real, permanent detail page** with the layout you asked for:
- **Overview** section first (condensed, in our own words — not copy-pasted from bestartek.com — covering what the product is, key differentiators, and target use case), with a scannable "Key Features" bullet list underneath (good for GEO/AI-answer extraction).
- **Technical Specification** section below it, split into three sub-tables exactly matching bestartek.com's own structure: **Technical Parameter**, **Hardware Specification**, **Software Specification**. All values were fetched directly from each product's real page on bestartek.com and kept accurate — nothing invented.
- Product JSON-LD now includes `additionalProperty` entries pulled from the real spec data, for richer structured data.
- This layout is identical across all 18 pages (12 Tablet PC + 6 Digital Signage) for consistency.
- Every product card on the listing pages still has both **"View Full Specs"** (→ the new internal detail page) and **"Send Inquiry"** buttons, same layout throughout.

**2. Eco Appliances / Electric Food Waste Disposers page:** "DESIGN" advantage label renamed to **"Patent"**.

**3. Resources — Smart Devices Insights expanded from 3 to 5 real articles**, pulling from bestartek.com's actual `/news/` section (two more real posts existed there: the 12.2" tablet launch and the digital calendar launch) — all rewritten in our own words, not copy-pasted.

**Resources — Eco Appliances Insights: all 6 listed articles now have real, working pages** (previously only 1 of 6 was built; the other 5 were dead links). Content is **original** — written by us, not reposted from foodcycler-manufacturer.top/blog, so their site's own traffic and SEO aren't affected. One flag: the original "Market Size 2025–2030... 18% CAGR" article blurb had an invented statistic — I removed it and rewrote that article to discuss general demand drivers instead, with an editorial note explaining why no market-size figure is cited (we don't have a verified source for one).

---

## Batch 6 — Repositioning, real factory/cert imagery, clickable breadcrumbs, Patent fix

**1. Repositioning — "sourcing" language removed sitewide.** BESTAR is no longer framed as working "in strategic partnership with certified manufacturing facilities" or shipping products "through our manufacturing partner." Rewritten across index.html, about.html, capabilities/manufacturing-partners.html (retitled "Certifications & Compliance" — file path kept for link stability), eco-appliances/index.html, eco-appliances/food-waste-disposers.html, faq.html, and 5 Resources articles. New positioning: compliant factories, standardized certification, qualified product quality, after-sales support, hands-on full-process service from factory to export, transparent factory pricing, flexible MOQ. Smart Devices copy leads with customer-need-driven customization + certification testing assistance + air/sea/express freight. Eco Appliances copy leads with internationally certified SKU range + patented design + flexible MOQ + freight.

**2. Real imagery added** (previously placeholder "real badge pending" boxes and no factory photos at all):
- All 9 Smart Devices certification badges (ISO 9001, ISO 14001, CE, FCC, TELEC, EMC, LVD, UN38.3, MSDS) are now real PNG badges from bestartek.com, on Home, About, Capabilities, Tablet PC, and Digital Signage pages.
- Added a real BESTAR TEK factory photo + 4 real QC/testing equipment photos (aging test, temp/humidity chamber, GPS signal tester, battery voltage tester) to About and Capabilities pages.
- Added 3 real Eco Appliances manufacturing photos (factory overview, assembly line, certification wall) to the Disposer page and Capabilities page.

**3. Breadcrumbs are now clickable sitewide** — all 18 product detail pages plus 20 other pages (Capabilities subpages, Resources articles/hubs, Eco Appliances, Smart Devices category pages) had their "X › Y › Z" trail turned into real links back to each parent page.

**4. Eco Appliances "Patent" advantage item** now reads just "Modular Detachable & Washable Design" under the PATENT label (dropped the redundant "(Patent)" suffix).

**Full audit + recommendations + manual action-item list delivered in chat, not as a separate file** — see conversation history.

---

## Batch 7 — About page rebuilt per approved copy (PDF spec)

Full rebuild of about.html using the exact copy supplied, following every structural and content red-line requirement:

- **Hero**: exact intro copy.
- **Our Story**: "2024" (company founding) and "7+ yrs" (founder's personal pre-BESTAR experience) shown as two visually distinct stat blocks so they can't be misread as "the company has 7 years of history." Optional Founder/CEO card included as a clearly-marked placeholder (no AI-generated photo — needs a real one from you, or delete the card).
- **Our Expertise**: Smart Devices and Eco Appliances shown as two separate cards, not one blended narrative. Smart Devices card uses the 4 real cert badges (ISO9001, ISO14001, CE, FCC). Eco Appliances card intentionally does **not** use any third-party certificate badge — it uses a neutral hand-built "Quality Assured" icon instead, per the red-line rule.
- **Quality Commitment** and **Team** sections: exact copy, kept general (no invented stats, no team photos, no named staff besides the optional Founder/CEO slot).
- **CTA**: "Talk to Us" → Contact, "Explore Our Solutions" → Solutions.
- No factory name appears anywhere on the page, and nothing implies Eco Appliances is a subsidiary of a named third party.
- Removed the old About-page company-details table (address/phone/MOQ) since it wasn't part of this spec and that info already lives on Contact/FAQ — nothing lost, just decluttered to match the approved structure.

**One inconsistency worth flagging:** this page now says BESTAR was **founded in 2024**, while other pages (Home hero stat, Capabilities, FAQ) still say the company has been "operating since 2018" — that 2018 figure came from bestartek.com's own real site content in an earlier batch, before this new founding narrative existed. I didn't touch those other pages since this request was scoped to About only, but you'll probably want the 2018 mentions updated or reconciled with the "founded 2024 / founder's 7+ years" story before launch.
