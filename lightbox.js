(function () {
  'use strict';

  var SELECTORS = [
    '.cinema-tile img',
    '.gallery-feature img',
    '.gallery-tile img'
  ];

  var images = [];
  var current = 0;
  var overlay, imgEl, captionEl, counterEl, prevBtn, nextBtn, closeBtn;
  var swipeStartX = 0;
  var lastFocused = null;

  function getCardTargetLink(card) {
    if (card.matches('.event-row li')) return card.querySelector('.event-link[href]');
    return card.querySelector('.card-cta[href]');
  }

  function initHotCards() {
    var hotCards = Array.from(document.querySelectorAll('.release-card, .mix-card, .event-row li'));

    hotCards.forEach(function (card) {
      var targetLink = getCardTargetLink(card);
      if (!targetLink) return;

      card.classList.add('is-hot-card');

      if (!card.hasAttribute('tabindex')) {
        card.setAttribute('tabindex', '0');
      }

      if (!card.hasAttribute('role')) {
        card.setAttribute('role', 'link');
      }

      card.addEventListener('click', function (e) {
        if (e.defaultPrevented) return;
        if (e.target.closest('a, button, input, select, textarea, summary, [role="button"], [data-no-card-nav]')) return;
        targetLink.click();
      });

      card.addEventListener('keydown', function (e) {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        if (document.activeElement && document.activeElement.closest('a, button, input, select, textarea, summary, [role="button"]')) return;
        e.preventDefault();
        targetLink.click();
      });
    });
  }

  function buildLightbox() {
    overlay = document.createElement('div');
    overlay.className = 'lb-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Image viewer');
    overlay.innerHTML =
      '<button class="lb-close" aria-label="Close">' +
        '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
      '</button>' +
      '<button class="lb-prev" aria-label="Previous">' +
        '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>' +
      '</button>' +
      '<button class="lb-next" aria-label="Next">' +
        '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>' +
      '</button>' +
      '<figure class="lb-figure">' +
        '<div class="lb-img-wrap"><img class="lb-img" alt="" /></div>' +
        '<figcaption class="lb-caption"></figcaption>' +
      '</figure>' +
      '<span class="lb-counter" aria-live="polite"></span>';

    document.body.appendChild(overlay);

    imgEl      = overlay.querySelector('.lb-img');
    captionEl  = overlay.querySelector('.lb-caption');
    counterEl  = overlay.querySelector('.lb-counter');
    prevBtn    = overlay.querySelector('.lb-prev');
    nextBtn    = overlay.querySelector('.lb-next');
    closeBtn   = overlay.querySelector('.lb-close');

    closeBtn.addEventListener('click', close);
    prevBtn.addEventListener('click', prev);
    nextBtn.addEventListener('click', next);

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) close();
    });

    document.addEventListener('keydown', function (e) {
      if (!overlay.classList.contains('lb-open')) return;
      if (e.key === 'Escape')      { e.preventDefault(); close(); }
      if (e.key === 'ArrowLeft')   { e.preventDefault(); prev(); }
      if (e.key === 'ArrowRight')  { e.preventDefault(); next(); }
    });

    overlay.addEventListener('touchstart', function (e) {
      swipeStartX = e.touches[0].clientX;
    }, { passive: true });

    overlay.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - swipeStartX;
      if (Math.abs(dx) > 50) {
        if (dx < 0) next(); else prev();
      }
    }, { passive: true });
  }

  function open(index) {
    lastFocused = document.activeElement;
    current = index;
    update();
    overlay.classList.add('lb-open');
    document.body.classList.add('lb-body-lock');
    closeBtn.focus();
  }

  function close() {
    overlay.classList.remove('lb-open');
    document.body.classList.remove('lb-body-lock');
    if (lastFocused) lastFocused.focus();
  }

  function prev() {
    current = (current - 1 + images.length) % images.length;
    update();
  }

  function next() {
    current = (current + 1) % images.length;
    update();
  }

  function update() {
    var img = images[current];
    imgEl.src = img.src;
    imgEl.alt = img.alt;

    var fig = img.closest('figure');
    var cap = fig ? fig.querySelector('figcaption') : null;
    captionEl.textContent = cap ? cap.textContent.trim() : '';
    captionEl.style.display = captionEl.textContent ? '' : 'none';

    var show = images.length > 1;
    prevBtn.style.display = show ? '' : 'none';
    nextBtn.style.display = show ? '' : 'none';
    counterEl.textContent = show ? (current + 1) + ' / ' + images.length : '';
  }

  function init() {
    initHotCards();

    images = Array.from(document.querySelectorAll(SELECTORS.join(', ')));
    if (!images.length) return;

    buildLightbox();

    images.forEach(function (img, i) {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', function () { open(i); });

      var fig = img.closest('figure');
      if (fig && !fig.hasAttribute('tabindex')) {
        fig.setAttribute('tabindex', '0');
        fig.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            open(i);
          }
        });
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
