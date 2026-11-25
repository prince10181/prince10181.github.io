(function () {
  'use strict';

  // Planned projects. Statuses are deliberately "Planned": nothing here is built.
  var plannedProjects = [
    {
      title: 'AI Decision Engine Testing & Governance Platform',
      summary: 'Test and govern decision-engine changes: regression checks, impact analysis and an audit trail around rule updates.',
      tags: ['Decision engines', 'Testing', 'Governance']
    },
    {
      title: 'AI-Powered Lending Underwriting Copilot',
      summary: 'Assist underwriters with policy-grounded guidance and summaries, with the final decision staying with a person.',
      tags: ['Underwriting', 'RAG', 'Human-in-the-loop']
    }
  ];

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }

  var grid = document.getElementById('projectsGrid');
  if (grid) {
    plannedProjects.forEach(function (p) {
      var card = el('article', 'project-card card');
      var head = el('div', 'project-card-header');
      head.appendChild(el('span', 'badge badge-wip', 'Planned'));
      card.appendChild(head);
      card.appendChild(el('h4', null, p.title));
      card.appendChild(el('p', null, p.summary));
      var tags = el('div', 'tech-stack-row');
      p.tags.forEach(function (t) { tags.appendChild(el('span', 'tech-tag', t)); });
      card.appendChild(tags);
      grid.appendChild(card);
    });
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

  // Copy email
  var copyBtn = document.getElementById('copyEmailBtn');
  var status = document.getElementById('copyStatus');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      var email = copyBtn.getAttribute('data-email');
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
