/* ============================================================
   BESTAR TEK — main.js  v2.0
   ============================================================ */
'use strict';

/* ── i18n ── */
const i18n = {
  en:{dir:'ltr',tag:'Trusted Global OEM / ODM Partner',h1:'Hardware Built for <span>Your Software</span> to Scale Globally',desc:'Custom Android tablets & commercial displays — white-labeled, firmware-ready, globally certified. MOQ 500 units. Trusted by software companies across education, healthcare, hospitality and IoT.',btn1:'Request a Quote',btn2:'Explore Products',s1:'Units / Month',s2:'Years R&D',s3:'Countries',s4:'Min. MOQ',cta:'Get Quote'},
  es:{dir:'ltr',tag:'Socio OEM/ODM de Confianza Global',h1:'Hardware Diseñado para que <span>Tu Software</span> Escale Globalmente',desc:'Tabletas Android y pantallas comerciales personalizadas — marca blanca, firmware propio, certificación internacional. MOQ 500 unidades.',btn1:'Solicitar Cotización',btn2:'Ver Productos',s1:'Unidades/Mes',s2:'Años I+D',s3:'Países',s4:'MOQ Mínimo',cta:'Cotizar'},
  ar:{dir:'rtl',tag:'شريك OEM/ODM موثوق عالمياً',h1:'أجهزة مصممة لـ <span>برنامجك</span> للتوسع العالمي',desc:'أجهزة لوحية وشاشات تجارية مخصصة بالكامل — علامة بيضاء، نظام مخصص، معتمد دولياً. الحد الأدنى للطلب 500 وحدة.',btn1:'طلب عرض سعر',btn2:'استعراض المنتجات',s1:'وحدة/شهر',s2:'سنوات R&D',s3:'دولة',s4:'الحد الأدنى',cta:'عرض سعر'},
};

/* ── FAQ ── */
const faqs=[
  {q:'What is your minimum order quantity (MOQ)?',a:'Our standard MOQ is <strong>500 units</strong> for custom OEM/ODM projects. For pilot runs or market testing we can discuss smaller quantities. Volume orders (1,000+ units) receive tiered pricing discounts and priority production scheduling.'},
  {q:'Can you fully customize the Android firmware?',a:'Yes — full AOSP-level access. Services include: pre-installed APKs, kiosk/lock-down mode, custom boot animation & logo, system language/timezone defaults, hardware permission management, and OTA update integration.'},
  {q:'How long does production take from approval?',a:'<strong>Prototype sample:</strong> 5–15 days. <strong>Mass production:</strong> 21–45 days after sample sign-off. We send production status updates every 3–5 days and full shipment tracking until delivery.'},
  {q:'What certifications do your products carry?',a:'CE, FCC, and RoHS certifications are standard. Our factory is <strong>ISO 9001</strong> certified. We assist with regional certifications on request: UKCA, KC (Korea), PSE (Japan), EAC, etc.'},
  {q:'Can I receive a sample before mass production?',a:'Absolutely — and we strongly recommend it. A working prototype validates firmware, hardware integration, and your software stack before committing to mass production. Sample stage: 5–15 days depending on complexity.'},
  {q:'Do you support full white-label OEM branding?',a:'Yes. We customize: device chassis marking, retail packaging design, boot logo, Android system identity, firmware name, and all documentation. The product ships as <strong>your brand</strong>, not ours.'},
  {q:'Which chipsets and Android versions are available?',a:'Chipsets: <strong>MediaTek (Helio G99, MT6750, MT8183), Rockchip (RK3566, RK3568, RK3588), Unisoc (T616)</strong>. Android versions: 8.1 through 14. For new projects, we recommend RK3566/Unisoc T616 (Android 13) for cost efficiency, or RK3588 / MediaTek Helio G99 for high-performance needs.'},
  {q:'What after-sales support is included?',a:'Standard <strong>12-month warranty</strong> on all products. 100% IPQC & OQC inspection before shipment. Key spare parts shipped with bulk orders. Engineering team provides ongoing firmware updates and field support.'},
  {q:'Can you pre-install our software application?',a:'Yes. We pre-install your APK(s), configure auto-launch on boot, set kiosk mode, apply required system permissions, and can implement MDM enrollment for remote device management.'},
  {q:'Do you ship internationally?',a:'Yes — worldwide via <strong>sea freight, air freight, and express courier</strong> (DHL / FedEx / UPS). We handle all export documentation: commercial invoices, packing lists, certificates of origin. Common destinations: USA, UK, EU, Australia, Japan, Middle East.'},
];

/* ── DOM utils ── */
const $=(s,c=document)=>c.querySelector(s);
const $$=(s,c=document)=>[...c.querySelectorAll(s)];

/* ── Scroll helper ── */
function scrollTo(id){const el=document.getElementById(id);if(el)el.scrollIntoView({behavior:'smooth',block:'start'});}

/* ── Language ── */
function setLang(code,e){
  const t=i18n[code];if(!t)return;
  try{localStorage.setItem('bt_lang',code);}catch(_){}
  document.documentElement.setAttribute('dir',t.dir);
  document.documentElement.setAttribute('lang',code);
  const s=(id,v,html=false)=>{const el=document.getElementById(id);if(el){if(html)el.innerHTML=v;else el.textContent=v;}};
  s('hero-tag',t.tag);s('hero-h1',t.h1,true);s('hero-desc',t.desc);
  s('hero-btn1',t.btn1);s('hero-btn2',t.btn2);
  s('stat-1',t.s1);s('stat-2',t.s2);s('stat-3',t.s3);s('stat-4',t.s4);
  const nc=$('#nav-cta');if(nc)nc.textContent=t.cta;
  $$('.lang-btn').forEach(b=>b.classList.remove('active'));
  if(e)e.target.classList.add('active');
  else{const ab=$(`.lang-btn[data-lang="${code}"]`);if(ab)ab.classList.add('active');}
}

/* ── Hero card switcher ── */
const cardData={
  tablet:{title:'Custom Android Tablet',badge:'Android 11–14',sz:'7" – 15.6"',specs:[{k:'Chipset',v:'Helio G99 / T616'},{k:'RAM',v:'6 – 8 GB'},{k:'Storage',v:'128 – 256 GB'},{k:'OS',v:'Android 11–14'}]},
  signage:{title:'Commercial Display',badge:'POE Supported',sz:'8" – 32"',specs:[{k:'Form Factor',v:'Wall / Desktop'},{k:'Power',v:'POE + DC Jack'},{k:'Resolution',v:'1080p / 4K'},{k:'OS',v:'Android 11–13'}]},
};
function switchCard(type,btn){
  $$('.hc-sw').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const d=cardData[type];if(!d)return;
  const s=(id,v)=>{const el=document.getElementById(id);if(el)el.textContent=v;};
  s('hc-title',d.title);s('hc-badge',d.badge);s('hc-sz',d.sz);
  const sp=document.getElementById('hc-specs');
  if(sp)sp.innerHTML=d.specs.map(s=>`<div class="hc-spec"><div class="hc-spec-k">${s.k}</div><div class="hc-spec-v">${s.v}</div></div>`).join('');
}

/* ── FAQ ── */
function buildFAQ(){
  const a=document.getElementById('faq-col-a');
  const b=document.getElementById('faq-col-b');
  if(!a&&!b)return;
  const half=Math.ceil(faqs.length/2);
  [[a,0],[b,1]].forEach(([col,ci])=>{
    if(!col)return;
    col.innerHTML=faqs.slice(ci*half,ci*half+half).map((f,i)=>{
      const id=`faq-${ci}-${i}`;
      return `<div class="faq-item" id="${id}"><div class="faq-q" onclick="toggleFAQ('${id}')" role="button" aria-expanded="false"><span class="faq-q__text">${f.q}</span><span class="faq-icon" aria-hidden="true"><svg viewBox="0 0 14 14"><line x1="7" y1="2" x2="7" y2="12"/><line x1="2" y1="7" x2="12" y2="7"/></svg></span></div><div class="faq-a" role="region"><p>${f.a}</p></div></div>`;
    }).join('');
  });
}
function toggleFAQ(id){
  const item=document.getElementById(id);if(!item)return;
  const isOpen=item.classList.contains('open');
  $$('.faq-item.open').forEach(el=>{el.classList.remove('open');const b=el.querySelector('.faq-q');if(b)b.setAttribute('aria-expanded','false');});
  if(!isOpen){item.classList.add('open');const b=item.querySelector('.faq-q');if(b)b.setAttribute('aria-expanded','true');}
}

/* ── Sticky nav ── */
function initNavScroll(){
  const nav=document.getElementById('main-nav');if(!nav)return;
  const fn=()=>nav.classList.toggle('scrolled',window.scrollY>40);
  window.addEventListener('scroll',fn,{passive:true});fn();
}

/* ── Mobile nav ── */
function initHamburger(){
  const btn=document.getElementById('hamburger');
  const menu=document.getElementById('mobile-nav');
  if(!btn||!menu)return;
  btn.addEventListener('click',()=>{
    const open=menu.classList.toggle('open');
    btn.setAttribute('aria-expanded',open);
  });
  $$('a',menu).forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');btn.setAttribute('aria-expanded','false');}));
}

/* ── Contact form ── */
function initContactForm(){
  const form=document.getElementById('contact-form');if(!form)return;
  form.addEventListener('submit',async(e)=>{
    e.preventDefault();
    const btn=form.querySelector('.form-submit');
    const orig=btn.textContent;
    btn.textContent='Sending…';btn.disabled=true;
    try{
      const res=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}});
      if(res.ok){
        btn.textContent='✓ Sent! We\'ll reply within 24 hours';
        btn.style.background='var(--green-d)';form.reset();
      }else throw new Error();
    }catch{
      btn.textContent='Error — please email us directly';
      btn.style.background='#c0392b';btn.disabled=false;
    }
    setTimeout(()=>{btn.textContent=orig;btn.style.background='';btn.disabled=false;},6000);
  });
}

/* ── Product filter tabs ── */
function initFilterTabs(){
  $$('.filter-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const group=btn.getAttribute('data-group')||'all';
      const container=btn.closest('section')||document;
      $$('.filter-btn',container).forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      $$('.model-card',container).forEach(card=>{
        const cat=card.getAttribute('data-cat')||'';
        card.style.display=(group==='all'||cat===group)?'flex':'none';
      });
    });
  });
}

/* ── Intersection Observer (fade-in) ── */
function initAnimations(){
  if(!('IntersectionObserver' in window))return;
  const els=$$('.model-card, .sol-card, .why-item, .metric-card, .cat-card');
  const obs=new IntersectionObserver((entries)=>{
    entries.forEach(en=>{if(en.isIntersecting){en.target.style.opacity='1';en.target.style.transform='translateY(0)';}});
  },{threshold:0.1,rootMargin:'0px 0px -40px 0px'});
  els.forEach(el=>{el.style.opacity='0';el.style.transform='translateY(20px)';el.style.transition='opacity .45s ease, transform .45s ease';obs.observe(el);});
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded',()=>{
  initNavScroll();
  initHamburger();
  buildFAQ();
  initContactForm();
  initFilterTabs();
  initAnimations();
  try{const s=localStorage.getItem('bt_lang');if(s&&i18n[s])setLang(s);}catch(_){}
});
