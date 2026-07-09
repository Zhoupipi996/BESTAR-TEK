# BESTAR TEK Website v2.0

**White + Green Professional B2B · Multi-Page · SEO Ready**

> Static site — zero dependencies, GitHub Pages in under 5 minutes.

---

## 📁 File Structure

```
bestartek-website/
├── index.html                    ← Homepage (white theme, all main sections)
├── products/
│   ├── android-tablets.html      ← 7 tablet models with full spec tables
│   └── digital-signage.html      ← 5 signage categories, 20+ models, spec tables
├── assets/
│   ├── css/style.css             ← Full stylesheet (white/green theme, responsive)
│   ├── js/main.js                ← FAQ, lang switcher, nav, form handler
│   └── images/                   ← Place favicon.png + og-image.jpg here
├── 404.html                      ← Branded 404 page
├── sitemap.xml                   ← SEO sitemap (update domain before launch)
├── robots.txt                    ← SEO crawler rules
├── _config.yml                   ← GitHub Pages config
└── .gitignore
```

---

## 🚀 Deploy to GitHub Pages

### Step 1 — Create repository
1. Go to [github.com/new](https://github.com/new)
2. Name: `bestartek-website` · Visibility: **Public**
3. Click **Create repository**

### Step 2 — Upload files
**Via browser:**
- Click "uploading an existing file"
- Drag ALL files AND the `products/` + `assets/` folders
- Keep folder structure intact
- Click **Commit changes**

**Via Git:**
```bash
git clone https://github.com/YOUR_USERNAME/bestartek-website.git
# Copy all project files in, then:
git add .
git commit -m "Launch BESTAR TEK website v2"
git push origin main
```

### Step 3 — Enable GitHub Pages
1. Repository → **Settings** → **Pages**
2. Source: **Deploy from a branch** → Branch: `main` / `/ (root)`
3. Click **Save** → Wait ~60 seconds
4. Visit: `https://YOUR_USERNAME.github.io/bestartek-website/`

---

## 🌐 Connect Custom Domain

### In GitHub Pages settings:
- Custom domain: `www.bestartek.com`
- Check ✓ **Enforce HTTPS**

### DNS Records (add at your registrar):
| Type  | Name | Value                   |
|-------|------|-------------------------|
| A     | @    | 185.199.108.153         |
| A     | @    | 185.199.109.153         |
| A     | @    | 185.199.110.153         |
| A     | @    | 185.199.111.153         |
| CNAME | www  | YOUR_USERNAME.github.io |

> DNS propagation: 15 minutes – 48 hours.

---

## 📧 Activate the Contact Form (Formspree)

1. Sign up free at [formspree.io](https://formspree.io)
2. Create a new form → copy your **Form ID** (e.g. `xpzgkwvn`)
3. In `index.html` find line ~290:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
4. Replace `YOUR_FORM_ID` with your actual ID
5. Set reply-to email in Formspree dashboard: `Jocelyn@bestartek.com`

---

## 🖼️ Add Required Images

Place these in `assets/images/`:

| File | Size | Purpose |
|------|------|---------|
| `favicon.png` | 32×32 px | Browser tab icon |
| `og-image.jpg` | 1200×630 px | Social share preview (LinkedIn, WhatsApp) |
| `logo.png` | 200×60 px | Schema.org logo |

**OG Image tip:** Use a clean product photo with BESTAR TEK brand green (#4CBB17) background + white text. This shows when someone shares your URL on LinkedIn or WhatsApp.

---

## 🔍 SEO Checklist Before Launch

- [ ] Replace all `www.bestartek.com` references in `sitemap.xml` with actual domain
- [ ] Add `og-image.jpg` (1200×630 px)
- [ ] Add `favicon.png`
- [ ] Replace `YOUR_FORM_ID` in `index.html`
- [ ] Verify domain in [Google Search Console](https://search.google.com/search-console)
- [ ] Submit `sitemap.xml` to Google Search Console
- [ ] Submit to [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [ ] Add Google Analytics 4 tag (see below)

**Add GA4 Analytics** — paste before `</head>` in all HTML files:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## ✏️ Common Content Edits

| What to change | Where |
|---|---|
| Contact email | `index.html` — contact section |
| Phone number | `index.html` — contact section |
| Company address | `index.html` — Schema.org + contact section |
| Brand color | `assets/css/style.css` → `--green: #4CBB17` |
| Hero headline | `index.html` → `#hero-h1` |
| FAQ questions | `assets/js/main.js` → `const faqs = [...]` |
| Stats (30K+, 15+…) | `index.html` → `.hero__stats` section |
| Product specs | `products/android-tablets.html` or `products/digital-signage.html` |
| Formspree ID | `index.html` → form `action` attribute |

---

## 🌍 Languages (EN / ES / AR)

Translation strings are in `assets/js/main.js`:
```js
const i18n = {
  en: { h1: 'Hardware Built for...', ... },
  es: { h1: 'Hardware Diseñado para...', ... },
  ar: { h1: '...', dir: 'rtl' },
};
```
Arabic automatically switches the whole page to RTL layout.

To add French: copy the `en` block, rename to `fr`, translate, add a button in the nav HTML:
```html
<button class="lang-btn" data-lang="fr" onclick="setLang('fr',event)">FR</button>
```

---

## 🌱 Blog (Phase 2 — Recommended for SEO)

A blog targeting long-tail keywords can significantly improve organic traffic. Suggested first posts:
1. "RK3566 vs RK3588 — Choosing the Right Chipset for Your Android Project"
2. "How to Source a Custom Android Tablet from China: A B2B Buyer's Guide"
3. "Top 5 Use Cases for POE Meeting Room Tablets in 2025"
4. "Android Kiosk Mode Setup Guide for OEM Developers"
5. "What Is the Difference Between OEM and ODM Tablet Manufacturing?"

Implementation: Create `blog/` folder, add posts as HTML files, link from footer.

---

## 🛠️ Local Preview

```bash
# Option A — Python
cd bestartek-website
python3 -m http.server 8000
# Open: http://localhost:8000

# Option B — VS Code Live Server extension
# Right-click index.html → Open with Live Server
```

---

## 📞 Contact

**BESTAR TEK**
- Email: Jocelyn@bestartek.com
- WhatsApp: +86-134-76144359
- Website: www.bestartek.com
- Address: Futian District, Shenzhen, Guangdong, China

---
*BESTAR TEK Website v2.0 — Built 2025*
