# Bestar Site — Image Asset Plan

Two folders, two different rules. Nothing in `/images/real/` may ever be
filled with an AI-generated image — see the original brief's trust-risk
rationale. Everything in `/images/generated/` is either already built as
clean hand-coded SVG (delivered in this batch) or documented below with a
ready-to-use generation prompt for the remaining raster/photo-style pieces.

## `/images/generated/` — delivered this batch (hand-built SVG, no external tool needed)

| File | Used on | Notes |
|---|---|---|
| `hero-circuit-visual.svg` | Home hero (inlined directly in `index.html` for the draw-in animation) | Static copy kept here for reuse/reference on future pages |
| `tier-icon-01-stock.svg` | Home + Solutions, Tier 1 | Single-color line art, `currentColor`-compatible if recolored |
| `tier-icon-02-light-oem.svg` | Home + Solutions, Tier 2 | |
| `tier-icon-03-odm.svg` | Home + Solutions, Tier 3 | |
| `tier-icon-04-integration.svg` | Home + Solutions, Tier 4 | |
| `service-progression-diagram.svg` | Solutions page, below the hero | Ascending 4-stage flow per the original brief's description |

## `/images/generated/` — still needed (photo-style, requires an image-generation tool)

These need a raster image generator (Midjourney / DALL·E / your generation
tool of choice) — they are illustrative "for illustration purposes" scenes,
not proof of real deployments, and must be labeled as such in `alt` text and
a visible caption per the original brief.

| Planned filename | Used on | Generation prompt |
|---|---|---|
| `scene-education-tablet.jpg` | `smart-devices/tablet-pc.html` | "A wide-angle photo-realistic style illustration of a modern classroom setting with a tablet device mounted on a student desk, natural lighting, diverse students in background slightly out of focus, professional editorial photography style" |
| `scene-eco-kitchen.jpg` | `eco-appliances/food-waste-disposers.html` | "A bright modern kitchen interior with a compact food waste disposer unit installed under the sink cabinet, clean minimalist Scandinavian style kitchen, natural daylight, no visible brand logos, lifestyle photography aesthetic" |
| `qc-process-infographic.png` | `capabilities/quality-control.html` | "A vertical 4-step infographic showing quality control stages: 'Incoming Material Inspection', 'In-Process Inspection', 'Final Product Inspection', 'Pre-Shipment Random Sampling', each step with a simple line-art icon, connected by arrows, clean corporate style, brand navy/steel-blue color palette" |
| `logistics-route-map.png` | `capabilities/logistics-delivery.html` | "A simplified world map illustration highlighting shipping routes from China to Europe, North America, and East Asia with dotted line paths and small ship/plane icons, flat minimalist cartography style, brand navy and light gray color scheme" |
| `blog-cover-[article-slug].jpg` | `resources/*` article covers | Concept/infographic style per-article, generated individually per the original brief's "blog configurations: concept/infographic style" guidance |

All AI-generated raster images: **must** include visible "for illustration
purposes" labeling (caption or corner watermark) wherever they depict a
scene that could be mistaken for a real customer deployment (the two lifestyle
scenes above) — not required for the abstract hero visual or pure
icon/infographic assets, which are self-evidently non-photographic.

## `/images/real/` — must be true photography/scans, currently placeholders

Every item below is currently rendered as a dashed-border `.img-placeholder`
block in the HTML (see `manufacturing-partners.html` once built, and the
cert-strip on Home). Replace the placeholder `<div>` with an `<img>` pointing
to the real file once supplied — the CSS class can be removed at that point.

| Planned filename | Used on | Source |
|---|---|---|
| `cert-iso9001.png` | Home cert strip, Capabilities | Real certificate scan/photo |
| `cert-iso14001.png` | Home cert strip, Capabilities | Real certificate scan/photo |
| `cert-ce.png` | Home cert strip, Capabilities | Real certificate scan/photo |
| `cert-fcc.png` | Home cert strip, Capabilities | Real certificate scan/photo |
| `cert-telec.png` | Home cert strip, Capabilities | Real certificate scan/photo |
| `cert-emc-lvd.png` | Home cert strip, Capabilities | Real certificate scan/photo |
| `product-tablet-pc-01.jpg` … `-03.jpg` | `smart-devices/tablet-pc.html` | Real product photography — port from bestartek.com if already shot |
| `product-eink-tablet-01.jpg` … `-03.jpg` | `smart-devices/e-ink-tablet.html` | Real product photography |
| `product-disposer-01.jpg` … `-03.jpg` | `eco-appliances/food-waste-disposers.html` | Real product photography — may already exist from the foodcycler-manufacturer.top build |
| `odm-workflow-diagram.png` | `capabilities/index.html` | Reuse the existing bestartek.com workflow diagram verbatim per the original brief — do not regenerate |

## Naming convention going forward

`kebab-case`, prefixed by type: `cert-`, `product-`, `scene-`, `tier-icon-`,
`hero-`, `blog-cover-`. Numbered suffixes (`-01`, `-02`) only when multiple
photos exist for the same subject.
