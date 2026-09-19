// BESTAR — shared site behavior

document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      mobileNav.classList.toggle('open');
    });
  }

  // Hero circuit-trace draw-in — the single orchestrated page-load moment.
  // Respects prefers-reduced-motion; runs once.
  var circuitPath = document.getElementById('circuit-path');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (circuitPath && !reduceMotion) {
    var length = circuitPath.getTotalLength();
    circuitPath.style.strokeDasharray = length;
    circuitPath.style.strokeDashoffset = length;
    // force reflow then animate
    circuitPath.getBoundingClientRect();
    circuitPath.style.transition = 'stroke-dashoffset 1.4s ease-out';
    requestAnimationFrame(function () {
      circuitPath.style.strokeDashoffset = '0';
    });
  }

  // Tier ladder quick-jump: on Solutions page, clicking a ladder card scrolls to its detail section
  document.querySelectorAll('[data-tier-link]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      var target = document.querySelector(el.getAttribute('data-tier-link'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      }
    });
  });

});
