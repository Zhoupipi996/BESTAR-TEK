'use strict';
/* ── FAQ data ── */
const faqs=[
  {q:'What is your minimum order quantity (MOQ)?',a:'Our standard MOQ is <strong>500 units</strong> for custom OEM/ODM projects. For pilot runs or market testing we can discuss smaller quantities. Volume orders of 1,000+ units receive tiered pricing discounts and priority production scheduling.'},
  {q:'Can you fully customize the Android firmware?',a:'Yes — full AOSP-level access. We pre-install your APKs, configure kiosk/lock-down mode, create custom boot animation &amp; logo, set system language and timezone defaults, manage hardware permissions, and integrate OTA update mechanisms.'},
  {q:'How long does production take from approval?',a:'<strong>Prototype sample:</strong> 5–15 days depending on complexity. <strong>Mass production:</strong> 21–45 days after sample sign-off. We send production status updates every 3–5 days and provide full shipment tracking until delivery.'},
  {q:'What certifications do your products carry?',a:'CE, FCC, RoHS, and PSE certifications are available. Our factory is <strong>ISO 9001</strong> certified. We assist with additional regional certifications on request: UKCA (UK), KC (Korea), EAC (Russia/CIS), etc.'},
  {q:'Can I receive a sample before mass production?',a:'Absolutely — and we strongly recommend it. A working prototype validates firmware, hardware integration, and your software stack before committing to mass production. Sample production takes 5–15 days depending on customization complexity.'},
  {q:'Do you support full white-label OEM branding?',a:'Yes. We customize device chassis marking, retail packaging design, boot logo, Android system identity, firmware name, and all documentation. The finished product ships as <strong>your brand</strong> — not ours.'},
  {q:'Which chipsets and Android versions are available?',a:'Chipsets: <strong>MediaTek Helio G99, MT8183, MT6750; Rockchip RK3566, RK3568, RK3588; Unisoc T616</strong>. Android versions 8.1 through 14. For new projects we recommend Unisoc T616 / RK3566 (Android 13) for cost efficiency, or RK3588 / Helio G99 for high-performance applications.'},
  {q:'What after-sales support is included?',a:'Standard <strong>12-month warranty</strong> on all products. 100% IPQC &amp; OQC inspection before shipment. Key spare parts shipped with bulk orders for in-field replacement. Our engineering team provides ongoing firmware updates and troubleshooting support.'},
  {q:'Can you pre-install our software application?',a:'Yes. We pre-install your APK(s), configure auto-launch on boot, enable kiosk mode, apply required system permissions, and can enroll devices in your MDM platform (SOTI, VMware Workspace ONE, etc.) before shipping.'},
  {q:'Do you ship internationally, and how?',a:'Yes — worldwide via <strong>sea freight, air freight, and express courier</strong> (DHL / FedEx / UPS). We handle all export documentation including commercial invoices, packing lists, and certificates of origin. Common destinations: USA, UK, EU, Australia, Japan, Canada, Middle East.'},
];

const $=(s,c=document)=>c.querySelector(s);
const $$=(s,c=document)=>[...c.querySelectorAll(s)];

function scrollTo(id){const el=document.getElementById(id);if(el)el.scrollIntoView({behavior:'smooth',block:'start'});}

/* ── Hero card switcher ── */
const cardData={
  tablet:{title:'Custom Android Tablet',badge:'Android 11–14',sz:'7" – 15.6"',
    specs:[{k:'Chipset',v:'Helio G99 / T616'},{k:'RAM',v:'6 – 8 GB'},{k:'Storage',v:'128 – 256 GB'},{k:'OS',v:'Android 11–14'}]},
  signage:{title:'Commercial Display',badge:'POE Supported',sz:'8" – 32"',
    specs:[{k:'Form Factor',v:'Wall / Desktop'},{k:'Power',v:'POE + DC Jack'},{k:'Resolution',v:'1080p / 4K'},{k:'OS',v:'Android 11–13'}]},
};
function switchCard(type,btn){
  $$('.hc-sw').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const d=cardData[type];if(!d)return;
  ['hc-title','hc-badge','hc-sz'].forEach((id,i)=>{
    const el=document.getElementById(id);
    if(el)el.textContent=[d.title,d.badge,d.sz][i];
  });
  const sp=document.getElementById('hc-specs');
  if(sp)sp.innerHTML=d.specs.map(s=>`<div class="hc-spec"><div class="hc-spec-k">${s.k}</div><div class="hc-spec-v">${s.v}</div></div>`).join('');
}

/* ── FAQ ── */
function buildFAQ(){
  const colA=document.getElementById('faq-col-a');
  const colB=document.getElementById('faq-col-b');
  if(!colA&&!colB)return;
  const half=Math.ceil(faqs.length/2);
  [[colA,0],[colB,1]].forEach(([col,ci])=>{
    if(!col)return;
    col.innerHTML=faqs.slice(ci*half,ci*half+half).map((f,i)=>{
      const id=`faq-${ci}-${i}`;
      return `<div class="faq-item" id="${id}">
        <div class="faq-q" onclick="toggleFAQ('${id}')" role="button" aria-expanded="false">
          <span class="faq-q__text">${f.q}</span>
          <span class="faq-icon" aria-hidden="true">
            <svg viewBox="0 0 14 14"><line x1="7" y1="2" x2="7" y2="12"/><line x1="2" y1="7" x2="12" y2="7"/></svg>
          </span>
        </div>
        <div class="faq-a" role="region"><p>${f.a}</p></div>
      </div>`;
    }).join('');
  });
}
function toggleFAQ(id){
  const item=document.getElementById(id);if(!item)return;
  const isOpen=item.classList.contains('open');
  $$('.faq-item.open').forEach(el=>{
    el.classList.remove('open');
    const b=el.querySelector('.faq-q');
    if(b)b.setAttribute('aria-expanded','false');
  });
  if(!isOpen){
    item.classList.add('open');
    const b=item.querySelector('.faq-q');
    if(b)b.setAttribute('aria-expanded','true');
  }
}

/* ── Sticky nav ── */
function initNavScroll(){
  const nav=document.getElementById('main-nav');if(!nav)return;
  const fn=()=>nav.classList.toggle('scrolled',window.scrollY>40);
  window.addEventListener('scroll',fn,{passive:true});fn();
}

/* ── Hamburger ── */
function initHamburger(){
  const btn=document.getElementById('hamburger');
  const menu=document.getElementById('mobile-nav');
  if(!btn||!menu)return;
  btn.addEventListener('click',()=>{
    const open=menu.classList.toggle('open');
    btn.setAttribute('aria-expanded',String(open));
  });
  $$('a',menu).forEach(a=>a.addEventListener('click',()=>{
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded','false');
  }));
}

/* ── Contact form ── */
function initContactForm(){
  const form=document.getElementById('contact-form');if(!form)return;
  form.addEventListener('submit',async e=>{
    e.preventDefault();
    const btn=form.querySelector('.form-submit');
    const orig=btn.textContent;
    btn.textContent='Sending…';btn.disabled=true;
    try{
      const res=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}});
      if(res.ok){
        btn.textContent="✓ Sent — we'll reply within 24 hours";
        btn.style.background='var(--green-d)';form.reset();
      }else throw new Error('fail');
    }catch{
      btn.textContent='Error — please email sirius@bestartek.com';
      btn.style.background='#c0392b';btn.disabled=false;
    }
    setTimeout(()=>{btn.textContent=orig;btn.style.background='';btn.disabled=false;},6000);
  });
}

/* ── Scroll-in fade animations ── */
function initAnimations(){
  if(!('IntersectionObserver' in window))return;
  const targets=$$('.sol-card,.why-item,.metric-card,.cat-card,.blog-card,.model-showcase,.faq-item:nth-child(-n+4)');
  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.style.opacity='1';
        e.target.style.transform='translateY(0)';
        io.unobserve(e.target);
      }
    });
  },{threshold:0.07,rootMargin:'0px 0px -32px 0px'});
  targets.forEach(el=>{
    el.style.opacity='0';
    el.style.transform='translateY(16px)';
    el.style.transition='opacity .42s ease, transform .42s ease';
    io.observe(el);
  });
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded',()=>{
  initNavScroll();
  initHamburger();
  buildFAQ();
  initContactForm();
  initAnimations();
});
