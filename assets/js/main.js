/* ============================================================
   BESTAR TEK — main.js
   Version: 1.0 | 2025
   ============================================================ */

'use strict';

/* ── i18n strings ── */
const i18n = {
  en: {
    dir:    'ltr',
    tag:    '✦ Trusted Global OEM / ODM Partner',
    h1:     'Hardware Built for <span>Your Software</span> to Scale',
    desc:   'Custom Android tablets & commercial displays — white-labeled, firmware-ready, globally certified. Serving software companies in education, healthcare, hospitality and IoT worldwide.',
    btn1:   'Request Custom Quote',
    btn2:   'Explore Products',
    s1:     'Units / Month Capacity',
    s2:     'Years R&D Experience',
    s3:     'Countries Served',
    s4:     'Min. Order Quantity',
    cta:    'Get Quote',
  },
  es: {
    dir:    'ltr',
    tag:    '✦ Socio OEM / ODM de Confianza Global',
    h1:     'Hardware Diseñado para <span>Tu Software</span>',
    desc:   'Tabletas Android y pantallas comerciales personalizadas — marca blanca, firmware propio, certificación internacional. Para empresas de software en educación, salud, hostelería e IoT.',
    btn1:   'Solicitar Cotización',
    btn2:   'Ver Productos',
    s1:     'Unidades / Mes',
    s2:     'Años de I+D',
    s3:     'Países Atendidos',
    s4:     'Cantidad Mínima',
    cta:    'Cotizar',
  },
  ar: {
    dir:    'rtl',
    tag:    '✦ شريك OEM / ODM موثوق عالمياً',
    h1:     'أجهزة مصممة لـ <span>برنامجك</span> للتوسع',
    desc:   'أجهزة لوحية أندرويد وشاشات تجارية مخصصة — علامة بيضاء، نظام مخصص، معتمد عالمياً. نخدم شركات البرمجيات في التعليم والرعاية الصحية والضيافة وإنترنت الأشياء حول العالم.',
    btn1:   'طلب عرض سعر',
    btn2:   'استعراض المنتجات',
    s1:     'وحدة / شهر',
    s2:     'سنوات خبرة R&D',
    s3:     'دولة مخدومة',
    s4:     'الحد الأدنى للطلب',
    cta:    'عرض سعر',
  },
};

/* ── FAQ data ── */
const faqs = [
  {
    q: 'What is your minimum order quantity (MOQ)?',
    a: 'Our standard MOQ is <strong>500 units</strong> for most custom tablet and signage projects. For prototyping and market testing, we can accommodate smaller pilot runs — contact us to discuss. Volume orders (1,000+ units) unlock additional pricing tiers and dedicated support.',
  },
  {
    q: 'Can you customize the Android firmware?',
    a: 'Yes — full AOSP-level customization. We can pre-install your application, configure kiosk/lock-down modes, set custom boot animation and boot logo, embed your brand name in system settings, enable or disable specific hardware features, and integrate OTA update support.',
  },
  {
    q: 'How long does production take from approval to delivery?',
    a: '<strong>Prototype sample:</strong> 5–15 days depending on complexity. <strong>Mass production:</strong> 21–45 days after sample sign-off. We provide production status updates every 3–5 days and track every shipment to delivery.',
  },
  {
    q: 'What certifications do your products carry?',
    a: 'Our products support <strong>CE, FCC, and RoHS</strong> certifications. Our factory holds ISO 9001 Quality Management certification. We can assist with additional regional certifications (UKCA, KC, PSE, etc.) — please specify requirements in your inquiry.',
  },
  {
    q: 'Can I receive a sample before mass production?',
    a: 'Absolutely. We strongly recommend a sample validation phase. We produce a working prototype with your specifications for internal testing, firmware validation, and software integration testing before committing to mass production. Sample timelines are 5–15 days.',
  },
  {
    q: 'Do you support white-label and OEM branding?',
    a: 'Yes, full OEM service. We customize chassis branding, packaging design, boot logo, Android system name, firmware identity, and documentation. The final product carries your brand — not ours. We also support co-branding arrangements.',
  },
  {
    q: 'What chipsets and Android versions are available?',
    a: 'We support <strong>MediaTek, Rockchip (RK3566, RK3568, RK3588), Allwinner, and Spreadtrum</strong> chipsets. Android versions range from 6.0 to 13. For new projects we recommend RK3566 (Android 11/13) for cost-efficiency, or RK3588 (Android 12) for high-performance applications.',
  },
  {
    q: 'What after-sales support do you provide?',
    a: 'All products include a <strong>12-month warranty</strong> with 100% IPQC & OQC inspection before shipping. We ship key spare parts alongside bulk orders to support field replacement. Our engineering team provides ongoing firmware update support and troubleshooting assistance.',
  },
  {
    q: 'Can you pre-install our application on the devices?',
    a: 'Yes. We can pre-install your APK(s), configure auto-launch on boot, enable kiosk mode to prevent navigation outside your app, configure required system permissions, and set default system language and timezone for your target market.',
  },
  {
    q: 'Do you ship internationally, and what are typical lead times?',
    a: 'We ship worldwide via <strong>sea freight, air freight, and express courier</strong> (DHL / FedEx / UPS). We handle all export documentation, including commercial invoices, packing lists, and certificates of origin. Typical destinations include the US, UK, EU, Australia, Japan, Canada, and the Middle East.',
  },
];

/* ── DOM helpers ── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ── Smooth scroll ── */
function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ── Language switcher ── */
function setLang(code) {
  const t = i18n[code];
  if (!t) return;

  /* Save preference */
  try { localStorage.setItem('bt_lang', code); } catch (_) {}

  /* Direction */
  document.documentElement.setAttribute('dir', t.dir);
  document.documentElement.setAttribute('lang', code);

  /* Update content */
  const set = (id, val, html = false) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (html) el.innerHTML = val;
    else el.textContent = val;
  };

  set('hero-tag',  t.tag);
  set('hero-h1',   t.h1, true);
  set('hero-desc', t.desc);
  set('hero-btn1', t.btn1);
  set('hero-btn2', t.btn2);
  set('stat-1',    t.s1);
  set('stat-2',    t.s2);
  set('stat-3',    t.s3);
  set('stat-4',    t.s4);
  set('nav-cta',   t.cta);

  /* Active button highlight */
  $$('.lang-btn').forEach(b => b.classList.remove('active'));
  const active = $(`.lang-btn[data-lang="${code}"]`);
  if (active) active.classList.add('active');
}

/* ── Hero card switcher ── */
const cardData = {
  tablet: {
    title:  'Custom Android Tablet',
    badge:  'Android 11–13',
    sz:     '8" – 21"',
    specs:  [
      { k: 'Chipset',     v: 'RK3566 / RK3588' },
      { k: 'RAM',         v: '2 – 8 GB' },
      { k: 'Storage',     v: '16 – 256 GB' },
      { k: 'Connectivity',v: 'WiFi / 4G / POE' },
    ],
  },
  signage: {
    title:  'Commercial Display',
    badge:  'POE Supported',
    sz:     '8" – 32"',
    specs:  [
      { k: 'Form Factor', v: 'Wall / Desktop' },
      { k: 'Interface',   v: 'RJ45 + POE' },
      { k: 'Resolution',  v: '1080p / 4K' },
      { k: 'OS',          v: 'Android 11–13' },
    ],
  },
};

function switchCard(type, btn) {
  $$('.card__sw-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const d = cardData[type];
  if (!d) return;

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('hc-title', d.title);
  set('hc-badge', d.badge);
  set('hc-sz',    d.sz);

  const specsEl = document.getElementById('hc-specs');
  if (specsEl) {
    specsEl.innerHTML = d.specs.map(s => `
      <div class="spec-item">
        <div class="sk">${s.k}</div>
        <div class="sv">${s.v}</div>
      </div>`).join('');
  }
}

/* ── FAQ accordion ── */
function buildFAQ() {
  const colA = document.getElementById('faq-col-a');
  const colB = document.getElementById('faq-col-b');
  if (!colA || !colB) return;

  const half = Math.ceil(faqs.length / 2);
  const cols  = [faqs.slice(0, half), faqs.slice(half)];

  [colA, colB].forEach((col, ci) => {
    col.innerHTML = cols[ci].map((f, i) => {
      const id = `faq-${ci}-${i}`;
      return `
        <div class="faq-item" id="${id}">
          <div class="faq-q" role="button" aria-expanded="false"
               aria-controls="${id}-body" onclick="toggleFAQ('${id}')">
            <span class="faq-q__text">${f.q}</span>
            <span class="faq-icon" aria-hidden="true">
              <svg viewBox="0 0 14 14">
                <line x1="7" y1="2" x2="7" y2="12"/>
                <line x1="2" y1="7" x2="12" y2="7"/>
              </svg>
            </span>
          </div>
          <div class="faq-a" id="${id}-body" role="region">
            <p>${f.a}</p>
          </div>
        </div>`;
    }).join('');
  });
}

function toggleFAQ(id) {
  const item   = document.getElementById(id);
  if (!item) return;
  const isOpen = item.classList.contains('open');

  /* Close all */
  $$('.faq-item.open').forEach(el => {
    el.classList.remove('open');
    const btn = el.querySelector('.faq-q');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  });

  /* Open clicked if it was closed */
  if (!isOpen) {
    item.classList.add('open');
    const btn = item.querySelector('.faq-q');
    if (btn) btn.setAttribute('aria-expanded', 'true');
  }
}

/* ── Sticky nav scroll effect ── */
function initNavScroll() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Mobile hamburger ── */
function initHamburger() {
  const btn   = document.getElementById('hamburger');
  const menu  = document.getElementById('mobile-nav');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    btn.querySelectorAll('span')[1].style.opacity = open ? '0' : '1';
  });

  /* Close on link click */
  $$('a', menu).forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ── PCB canvas background ── */
function drawPCB() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W   = canvas.offsetWidth;
  const H   = canvas.offsetHeight;
  canvas.width  = W;
  canvas.height = H;

  ctx.strokeStyle = 'rgba(76,187,23,0.7)';
  ctx.lineWidth   = 0.7;

  const step = 54;
  const cols = Math.floor(W / step);
  const rows = Math.floor(H / step);

  for (let r = 0; r <= rows; r++) {
    for (let c = 0; c <= cols; c++) {
      const x = c * step + step / 2;
      const y = r * step + step / 2;

      if (Math.random() > 0.42) {
        ctx.beginPath();
        ctx.arc(x, y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(76,187,23,0.5)';
        ctx.fill();
      }
      if (Math.random() > 0.5 && c < cols) {
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + step, y); ctx.stroke();
      }
      if (Math.random() > 0.5 && r < rows) {
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + step); ctx.stroke();
      }
    }
  }
}

/* ── Contact form ── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    const orig = btn.textContent;
    btn.textContent = 'Sending…';
    btn.disabled = true;

    try {
      const res = await fetch(form.action, {
        method:  'POST',
        body:    new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        btn.textContent = '✓ Inquiry Sent — We\'ll Reply Within 24h';
        btn.style.background = 'var(--green-d)';
        form.reset();
      } else {
        throw new Error('Server error');
      }
    } catch {
      btn.textContent = 'Error — Please Email Us Directly';
      btn.style.background = '#c0392b';
      btn.disabled = false;
    }

    setTimeout(() => {
      btn.textContent = orig;
      btn.style.background = '';
      btn.disabled = false;
    }, 5000);
  });
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  initNavScroll();
  initHamburger();
  buildFAQ();
  drawPCB();
  initContactForm();

  /* Restore saved language */
  try {
    const saved = localStorage.getItem('bt_lang');
    if (saved && i18n[saved]) setLang(saved);
  } catch (_) {}
});
