import os

BASE = "/home/claude/bestar-v2"

LOGO_SVG = '<svg class="mark" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="24" height="24" stroke="#6FA8DC" stroke-width="1.4"/><path d="M7 13h5V7M14 13h5v6" stroke="#6FA8DC" stroke-width="1.4"/><circle cx="12" cy="13" r="1.4" fill="#6FA8DC"/></svg>'

def head(title, desc, root, canonical, extra_meta="", ld_json="", extra_style=""):
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">

<title>{title}</title>
<meta name="description" content="{desc}">
<link rel="canonical" href="https://www.bestartek.com/{canonical}">
{extra_meta}
{ld_json}
<link rel="stylesheet" href="{root}css/style.css">
{extra_style}
</head>
<body>

<header class="site-header">
  <div class="header-inner">
    <a href="{root}index.html" class="logo">
      {LOGO_SVG}
      BESTAR
    </a>
    <nav class="main-nav">
      <a href="{root}about.html">About</a>
      <a href="{root}solutions.html">Solutions</a>
      <a href="{root}smart-devices/index.html">Smart Devices</a>
      <a href="{root}eco-appliances/index.html">Eco Appliances</a>
      <a href="{root}capabilities/index.html">Capabilities</a>
      <a href="{root}resources/index.html">Resources</a>
      <a href="{root}faq.html">FAQ</a>
      <a href="{root}contact.html" class="nav-cta">Talk to Our Team</a>
    </nav>
    <button class="hamburger" id="hamburger" aria-label="Open menu"><span></span><span></span><span></span></button>
  </div>
  <div class="mobile-nav" id="mobile-nav">
    <a href="{root}about.html">About</a>
    <a href="{root}solutions.html">Solutions</a>
    <a href="{root}smart-devices/index.html">Smart Devices</a>
    <a href="{root}eco-appliances/index.html">Eco Appliances</a>
    <a href="{root}capabilities/index.html">Capabilities</a>
    <a href="{root}resources/index.html">Resources</a>
    <a href="{root}faq.html">FAQ</a>
    <a href="{root}contact.html">Talk to Our Team</a>
  </div>
</header>
"""

def foot(root):
    return f"""
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-col">
        <a href="{root}index.html" class="logo" style="margin-bottom:14px;">
          {LOGO_SVG}
          BESTAR
        </a>
        <p style="max-width:34ch;">Custom hardware OEM/ODM solution provider for Smart Devices and Eco Appliances, serving brand partners across Europe, the US, Japan, and Korea.</p>
      </div>
      <div class="footer-col">
        <h4>SMART DEVICES</h4>
        <ul class="footer-links">
          <li><a href="{root}smart-devices/tablet-pc.html">Tablet PC</a></li>
          <li><a href="{root}smart-devices/digital-signage.html">Interactive Digital Signage</a></li>
          <li><a href="{root}smart-devices/e-ink-tablet.html">E-ink Tablet</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>ECO APPLIANCES</h4>
        <ul class="footer-links">
          <li><a href="{root}eco-appliances/food-waste-disposers.html">Electric Food Waste Disposers</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>COMPANY</h4>
        <ul class="footer-links">
          <li><a href="{root}about.html">About</a></li>
          <li><a href="{root}capabilities/index.html">Capabilities</a></li>
          <li><a href="{root}resources/index.html">Resources</a></li>
          <li><a href="{root}faq.html">FAQ</a></li>
          <li><a href="{root}contact.html">Contact</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2026 BESTAR. All rights reserved.</span>
      <span>bestartek.com</span>
    </div>
  </div>
</footer>

<script src="{root}js/main.js"></script>
</body>
</html>
"""

def write(relpath, title, desc, canonical, body, root="", extra_meta="", ld_json="", extra_style=""):
    html = head(title, desc, root, canonical, extra_meta, ld_json, extra_style) + body + foot(root)
    full = os.path.join(BASE, relpath)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, "w") as f:
        f.write(html)
    print("wrote", relpath)
