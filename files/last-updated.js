(function(){
  // Edit the date below to change the banner across the site
  var lastUpdated = 'December, 2025.';
  var text = 'Last updated on ' + lastUpdated;
  function insert() {
    var footer = document.querySelector('footer.sticky-bottom') || document.querySelector('footer');
    if(!footer) return;
    if (footer.querySelector('.last-updated-js')) return;
    var p = document.createElement('p');
    p.className = 'text-muted last-updated-js';
    p.style.marginTop = '0';
    p.style.marginBottom = '10px';
    p.innerHTML = '<em>' + text + '</em>';
    footer.appendChild(p);
  }
  function updateFooterFloating() {
    var footer = document.querySelector('footer.sticky-bottom') || document.querySelector('footer');
    if (!footer) return;
    var docHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    var viewHeight = window.innerHeight || document.documentElement.clientHeight;
    var scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
    var atBottom = (scrollY + viewHeight) >= (docHeight - 2);

    // If page is short (content fits) or user reached the bottom, float the footer.
    if (docHeight <= viewHeight || atBottom) {
      footer.classList.add('footer-fixed');
      document.body.classList.add('footer-fixed-body');
    } else {
      footer.classList.remove('footer-fixed');
      document.body.classList.remove('footer-fixed-body');
    }
  }

  function ready() {
    insert();
    updateFooterFloating();
    window.addEventListener('resize', updateFooterFloating);
    window.addEventListener('scroll', updateFooterFloating, { passive: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready);
  else ready();
})();
