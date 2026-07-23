# BESTAR TEK Website v3.0

**White + Green · Multi-page B2B · Blog · Social Media · No multi-language**

> Static site — zero build tools, zero dependencies. GitHub Pages deploy in under 5 minutes.

---

## 📁 Complete File Structure

```
bestartek-website/
├── index.html                          ← Homepage (hero, products, solutions, FAQ, contact, blog preview)
├── 404.html                            ← Custom branded 404 page
├── sitemap.xml                         ← SEO sitemap (12 URLs + blog posts)
├── robots.txt                          ← Crawler rules
├── _config.yml                         ← GitHub Pages config
├── .gitignore
├── README.md                           ← This file
│
├── products/
│   ├── android-tablets.html            ← 7 tablet models with full spec tables + quick nav
│   └── digital-signage.html            ← 5 signage categories, 20+ models, full spec tables
│
├── blog/
│   ├── index.html                      ← Blog listing page (4 articles)
│   ├── rk3566-vs-rk3588-android-chipset-guide.html
│   ├── custom-android-tablet-education-oem.html
│   ├── poe-meeting-room-tablet-guide.html
│   └── oem-vs-odm-android-tablet.html
│
└── assets/
    ├── css/
    │   └── style.css                   ← Full stylesheet (495 lines, white+green theme)
    ├── js/
    │   └── main.js                     ← FAQ, hero card, nav, form, animations
    └── images/
        ├── favicon.png                 ← REPLACE: 32×32px browser tab icon
        ├── og-image.jpg                ← REPLACE: 1200×630px social share image
        └── logo.png                    ← REPLACE: 200×60px for Schema.org
```

---

## 🚀 Deploy to GitHub Pages (5 minutes)

### Step 1 — Create repository
1. Go to [github.com/new](https://github.com/new)
2. Name: `bestartek-website` · Visibility: **Public**
3. Click **Create repository**

### Step 2 — Upload all files
**Via browser (easiest):**
1. On your new repo page, click **"uploading an existing file"**
2. Drag the entire extracted folder contents (NOT the folder itself — the files and subfolders inside)
3. Make sure `products/`, `blog/`, `assets/` folders and all files are visible
4. Click **"Commit changes"**

**Via Git (recommended for future updates):**
```bash
git clone https://github.com/YOUR_USERNAME/bestartek-website.git
# Copy all files into the cloned folder, then:
cd bestartek-website
git add .
git commit -m "Launch BESTAR TEK website v3"
git push origin main
```

### Step 3 — Enable GitHub Pages
1. Repository → **Settings** → **Pages** (left sidebar)
2. Source: **Deploy from a branch** → Branch: **main** / Folder: **/ (root)**
3. Click **Save** → Wait ~60 seconds
4. Your site is live at: `https://YOUR_USERNAME.github.io/bestartek-website/`

---

## 🌐 Connect Custom Domain (bestartek.com)

### In GitHub Settings → Pages:
- Custom domain: `www.bestartek.com`
- ✅ Check **Enforce HTTPS**

### DNS Records (add at GoDaddy / Cloudflare / Namecheap):

| Type  | Host | Value                   | TTL  |
|-------|------|-------------------------|------|
| A     | @    | 185.199.108.153         | Auto |
| A     | @    | 185.199.109.153         | Auto |
| A     | @    | 185.199.110.153         | Auto |
| A     | @    | 185.199.111.153         | Auto |
| CNAME | www  | YOUR_USERNAME.github.io | Auto |

> DNS propagation: 15 minutes to 48 hours. After that, `www.bestartek.com` serves your site.

---

## 📧 Activate the Contact Form (Formspree — Free)

1. Sign up at [formspree.io](https://formspree.io) (free plan: 50 submissions/month)
2. Create a new form → copy your **Form ID** (e.g. `xpzgkwvn`)
3. Open `index.html`, find this line (search for `YOUR_FORM_ID`):
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
4. Replace `YOUR_FORM_ID` with your actual ID:
   ```html
   action="https://formspree.io/f/xpzgkwvn"
   ```
5. In Formspree dashboard → Settings → set email to: **sirius@bestartek.com**
6. Test with a submission — you'll receive it at sirius@bestartek.com

**Paid plan ($10/mo):** Unlimited submissions + spam filtering + file attachments.

---

## 🖼️ Required Image Files

Place these in `assets/images/`:

| Filename | Size | Purpose | Notes |
|----------|------|---------|-------|
| `favicon.png` | 32×32 px | Browser tab icon | Use BESTAR TEK logo mark |
| `og-image.jpg` | 1200×630 px | LinkedIn/WhatsApp share preview | Green BG + white text + logo |
| `logo.png` | 200×60 px | Schema.org structured data | Full logo with text |

**OG image tip:** Make a clean JPG with `#4CBB17` brand green background, BESTAR TEK logo in white, and the tagline. This is what appears when anyone shares your URL on LinkedIn, WhatsApp, or Twitter.

---

## ✅ Pre-Launch Checklist

### Required before going live:
- [ ] Replace `YOUR_FORM_ID` in `index.html` with actual Formspree ID
- [ ] Add `assets/images/favicon.png` (32×32 px)
- [ ] Add `assets/images/og-image.jpg` (1200×630 px)
- [ ] Update all `www.bestartek.com` URLs in `sitemap.xml` if domain differs
- [ ] Verify domain in [Google Search Console](https://search.google.com/search-console)
- [ ] Submit `sitemap.xml` to Google Search Console

### Recommended after launch:
- [ ] Submit `sitemap.xml` to [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [ ] Add Google Analytics 4 (see below)
- [ ] Post the 4 blog articles on your LinkedIn company page
- [ ] Set up Google Business Profile listing

---

## 📊 Add Google Analytics 4

Paste before `</head>` in **all HTML files** (index.html, products/*.html, blog/*.html, 404.html):

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
Replace `G-XXXXXXXXXX` with your GA4 Measurement ID from [analytics.google.com](https://analytics.google.com).

---

## ✏️ Common Content Edits

| What to change | File | What to find |
|---|---|---|
| Contact email | All pages | `sirius@bestartek.com` |
| Phone number | `index.html` | `+86-134-76144359` |
| Company address | `index.html` | Schema.org + contact section |
| Formspree ID | `index.html` | `YOUR_FORM_ID` |
| Brand green | `assets/css/style.css` | `--green: #4CBB17` |
| Hero headline | `index.html` | `.hero__title` |
| Hero stats | `index.html` | `.hero__stat` blocks |
| FAQ questions | `assets/js/main.js` | `const faqs = [...]` |
| Blog post content | `blog/*.html` | Article body directly in HTML |
| Tablet spec tables | `products/android-tablets.html` | Each `spec-table` section |
| Signage spec tables | `products/digital-signage.html` | Each category section |

---

## 📝 Blog — How to Add New Articles

1. Copy an existing article file (e.g. `blog/oem-vs-odm-android-tablet.html`)
2. Rename it (e.g. `blog/android-tablet-hospitality-oem.html`)
3. Edit: `<title>`, `<meta name="description">`, `<meta name="keywords">`, `<link rel="canonical">`
4. Replace article body content in `.article-body`
5. Add the new article card to `blog/index.html` (copy an existing `.blog-card` block)
6. Add the article to `sitemap.xml`
7. Add a link in the footer under "Blog & Insights"

**Suggested next blog posts (high SEO value):**
- "Custom Android Tablets for Hotel Room Management: A Hospitality Tech Guide" → targets hospitality software buyers
- "How to Specify AOSP Custom Firmware for Your OEM Android Project" → targets software developers
- "Android Digital Signage for Retail: From Menu Boards to Self-Service Kiosks" → targets retail software
- "CE vs FCC vs PSE Certification for Android Tablets: What OEM Buyers Need to Know" → high-intent, low competition

---

## 🔗 Social Media Links (already in all pages)

- **LinkedIn:** https://www.linkedin.com/company/bestar-tek/
- **Facebook:** https://www.facebook.com/BESTARTEK/

Both appear in the footer (with SVG icons) and in the contact section of the homepage.

---

## 🛠️ Local Preview (No Install Required)

**Python (fastest):**
```bash
cd bestartek-website
python3 -m http.server 8000
# Open: http://localhost:8000
```

**VS Code Live Server:**
1. Install [VS Code](https://code.visualstudio.com) + "Live Server" extension
2. Right-click `index.html` → "Open with Live Server"

> ⚠️ Always preview via a local server (not by opening the file directly) — the navigation links use relative paths that require HTTP to resolve correctly.

---

## 📞 Contact

**BESTAR TEK**
- Email: sirius@bestartek.com
- WhatsApp/WeChat: +86-134-76144359
- LinkedIn: https://www.linkedin.com/company/bestar-tek/
- Facebook: https://www.facebook.com/BESTARTEK/
- Website: www.bestartek.com
- Address: Futian District, Shenzhen, Guangdong, China

---

*BESTAR TEK Website v3.0 — Built 2025*
*Changes from v2: removed multi-language switcher · email updated to sirius@bestartek.com · LinkedIn + Facebook social media added · RoHS → PSE in certifications · Blog section added with 4 full articles · White+green professional theme*
