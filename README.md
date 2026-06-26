# BESTAR TEK — Official Website

**Custom Android Tablet & Digital Signage OEM/ODM Manufacturer**

> Static B2B website built with pure HTML / CSS / JS — zero dependencies, deploys to GitHub Pages in under 5 minutes.

---

## 📁 Project Structure

```
bestartek-website/
├── index.html              ← Main page (all sections)
├── _config.yml             ← GitHub Pages config
├── robots.txt              ← SEO crawler rules
├── sitemap.xml             ← SEO sitemap
├── 404.html                ← Custom 404 page
├── README.md               ← This file
└── assets/
    ├── css/
    │   └── style.css       ← All styles (mobile-first, RTL support)
    ├── js/
    │   └── main.js         ← Language switcher, FAQ, form, PCB canvas
    └── images/
        ├── favicon.png     ← Replace with your favicon (32×32 px)
        ├── og-image.jpg    ← Replace with OG image (1200×630 px)
        └── logo.png        ← Replace with your logo
```

---

## 🚀 Deploy to GitHub Pages (Step by Step)

### Step 1 — Create a GitHub repository

1. Go to [github.com](https://github.com) and sign in (or create a free account)
2. Click **"New repository"** (green button, top right)
3. Name it: `bestartek-website` (or `bestartek.github.io` for a root domain)
4. Set visibility to **Public**
5. Click **"Create repository"**

### Step 2 — Upload the files

**Option A — Upload via browser (easiest):**
1. On your new repository page, click **"uploading an existing file"**
2. Drag and drop ALL project files/folders into the upload area
3. Keep folder structure intact (`assets/css/`, `assets/js/`, etc.)
4. Click **"Commit changes"**

**Option B — Upload via Git (recommended):**
```bash
# Clone your new repo locally
git clone https://github.com/YOUR_USERNAME/bestartek-website.git

# Copy all project files into the cloned folder
# Then commit and push:
cd bestartek-website
git add .
git commit -m "Initial website launch"
git push origin main
```

### Step 3 — Enable GitHub Pages

1. In your repository, go to **Settings** → **Pages** (left sidebar)
2. Under **"Source"**, select: **Deploy from a branch**
3. Branch: **main** / Folder: **/ (root)**
4. Click **Save**
5. Wait ~60 seconds, then visit: `https://YOUR_USERNAME.github.io/bestartek-website/`

---

## 🌐 Connect Your Custom Domain (bestartek.com)

### In GitHub:
1. Settings → Pages → **Custom domain**
2. Enter: `www.bestartek.com`
3. Check **"Enforce HTTPS"**
4. GitHub will create a `CNAME` file automatically

### In your DNS provider (GoDaddy / Cloudflare / Namecheap):
Add these DNS records:

| Type  | Host  | Value                    | TTL  |
|-------|-------|--------------------------|------|
| A     | @     | 185.199.108.153          | Auto |
| A     | @     | 185.199.109.153          | Auto |
| A     | @     | 185.199.110.153          | Auto |
| A     | @     | 185.199.111.153          | Auto |
| CNAME | www   | YOUR_USERNAME.github.io  | Auto |

> DNS propagation takes 10 minutes to 48 hours.

---

## 📧 Connect the Contact Form (Formspree)

The form currently points to a placeholder. To activate it:

1. Go to [formspree.io](https://formspree.io) → Sign up free
2. Click **"New Form"** → Name it "BESTAR TEK Inquiry"
3. Copy your **Form ID** (looks like: `xpzgkwvn`)
4. Open `index.html` and find this line (around line 290):
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
5. Replace `YOUR_FORM_ID` with your actual ID:
   ```html
   action="https://formspree.io/f/xpzgkwvn"
   ```
6. In Formspree dashboard, set the **"Reply-to"** email to: `Jocelyn@bestartek.com`
7. All form submissions will now arrive directly in your inbox

**Free plan:** 50 submissions/month — sufficient for initial launch.
**Paid plan ($10/mo):** Unlimited submissions + spam filtering + file upload.

---

## 🌍 Multi-Language (EN / ES / AR)

The language switcher is built into `assets/js/main.js`.

**To add or edit translations:**
1. Open `assets/js/main.js`
2. Find the `const i18n = { ... }` object at the top
3. Edit the `en`, `es`, or `ar` entries
4. To add a new language (e.g. French `fr`), copy the `en` block, rename it `fr`, translate, and add a button in `index.html`:
   ```html
   <button class="lang-btn" data-lang="fr" onclick="setLang('fr')">FR</button>
   ```

**Arabic RTL:** Handled automatically — when Arabic is selected, `dir="rtl"` is applied to `<html>`.

---

## 🔍 SEO Checklist (Before Launch)

- [ ] Replace `YOUR_USERNAME` in `_config.yml` and sitemap URLs
- [ ] Add real `og-image.jpg` (1200 × 630 px, shows on WhatsApp / LinkedIn shares)
- [ ] Add real `favicon.png` (32 × 32 px)
- [ ] Submit `sitemap.xml` to [Google Search Console](https://search.google.com/search-console)
- [ ] Submit `sitemap.xml` to [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [ ] Verify domain in Google Search Console
- [ ] Set up [Google Analytics 4](https://analytics.google.com) — add GA4 tag to `<head>` in `index.html`
- [ ] Register on [Google Business Profile](https://business.google.com) for local SEO

**Add Google Analytics (optional):**
In `index.html`, add before `</head>`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```
Replace `G-XXXXXXXXXX` with your actual GA4 Measurement ID.

---

## 📝 Blog (Phase 2 — Recommended)

Adding a blog boosts SEO significantly by targeting long-tail keywords like:
- *"custom Android tablet for education manufacturer"*
- *"OEM digital signage meeting room"*
- *"white label Android tablet healthcare"*

**Simplest approach — GitHub Pages + Jekyll:**
1. Enable Jekyll in `_config.yml` (already configured)
2. Create a `_posts/` folder
3. Add posts as Markdown files named `YYYY-MM-DD-title.md`
4. Each post starts with frontmatter:
   ```yaml
   ---
   layout: post
   title: "How to Choose the Right Android Chipset for Your Tablet Project"
   date: 2025-10-01
   category: product-guide
   ---
   ```

**Suggested first 5 blog posts:**
1. RK3566 vs RK3588 — Which chipset for your project? (SEO: chipset comparison)
2. What to Know Before Ordering Custom Android Tablets from China (SEO: buyer guide)
3. How BESTAR TEK Delivers 30-45 Day OEM Production (SEO: production process)
4. Top 5 Use Cases for POE Meeting Room Tablets in 2025 (SEO: meeting room display)
5. Android Kiosk Mode: A Complete Setup Guide for OEM Clients (SEO: kiosk Android)

---

## ✏️ Common Edits

| What to change | Where |
|---|---|
| Contact email | `index.html` — CI item + form `_subject` |
| Phone number | `index.html` — CI item |
| Company address | `index.html` — CI item + Schema.org |
| Brand color | `assets/css/style.css` → `--green: #4CBB17` |
| Stats (30K+, 15+…) | `index.html` — `.hero__stats` section |
| FAQ questions | `assets/js/main.js` → `const faqs = [...]` |
| Nav links | `index.html` — `.nav-links` + `.mobile-nav` |

---

## 🛠️ Local Preview (No Install Required)

**Option A — VS Code Live Server:**
1. Install [VS Code](https://code.visualstudio.com)
2. Install the **Live Server** extension
3. Right-click `index.html` → "Open with Live Server"
4. Opens at `http://127.0.0.1:5500`

**Option B — Python (built-in):**
```bash
cd bestartek-website
python3 -m http.server 8000
# Open: http://localhost:8000
```

---

## 📞 Support

**BESTAR TEK**
- Email: Jocelyn@bestartek.com
- WhatsApp: +86-134-76144359
- Website: www.bestartek.com

---

*Built with ♥ for BESTAR TEK — 2025*
