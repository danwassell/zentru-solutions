/* =============================================
   ZENTRU SOLUTIONS — script.js
   ============================================= */

(function () {
  'use strict';

  // 1. Hero staggered fade-in on load
  document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('loaded');
  });

  // 2. Nav: transparent → solid on scroll
  var nav = document.getElementById('main-nav');
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load in case page is pre-scrolled
  }

  // 3. Scroll reveal via IntersectionObserver
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all sections immediately for old browsers
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
  }

})();
