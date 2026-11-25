(function () {
  'use strict';

  // Resume: stays a "coming soon" label until assets/Prince_Garg_Resume.pdf is published,
  // then upgrades itself to a real link. No broken link either way.
  var RESUME_URL = 'assets/Prince_Garg_Resume.pdf';

  function enableResume() {
    document.querySelectorAll('[data-resume]').forEach(function (el) {
      var a = document.createElement('a');
      a.className = el.className.replace('is-disabled', '').trim();
      a.href = RESUME_URL;
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = el.getAttribute('data-resume') === 'hero' ? 'Download resume (PDF)' : 'Resume (PDF)';
      a.setAttribute('download', '');
      a.removeAttribute('target');
      el.replaceWith(a);
    });
  }

  if (window.fetch && location.protocol.indexOf('http') === 0) {
    fetch(RESUME_URL, { method: 'HEAD' }).then(function (r) {
      var type = r.headers.get('content-type') || '';
      if (r.ok && type.indexOf('pdf') !== -1) enableResume();
    }).catch(function () { /* keep "coming soon" */ });
  }

  // Mobile nav
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('siteNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Email address is assembled here so it is not printed in the page source.
  // (Light protection against scrapers only; it is not secret.)
  var addr = ['gprince', 'garg'].join('') + '@' + ['gmail', 'com'].join('.');
  var emailLink = document.getElementById('emailLink');
  if (emailLink) emailLink.setAttribute('href', 'mailto:' + addr);

  // Copy email
  var copyBtn = document.getElementById('copyEmailBtn');
  var status = document.getElementById('copyStatus');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      var email = addr;
      function done(msg) { if (status) status.textContent = msg; }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(
          function () { done('Email copied.'); },
          function () { done('Copy failed. Please copy it manually.'); }
        );
      } else {
        done('Copy not supported here. Please copy it manually.');
      }
    });
  }

  var year = document.getElementById('currentYear');
  if (year) year.textContent = new Date().getFullYear();
})();
