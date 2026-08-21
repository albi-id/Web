// Scrollspy: resalta en el índice (TOC) la sección visible actualmente
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('.toc a'));
  var sections = links
    .map(function (link) {
      var id = link.getAttribute('href').slice(1);
      return document.getElementById(id);
    })
    .filter(Boolean);

  if (!sections.length) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        var link = document.querySelector('.toc a[href="#' + entry.target.id + '"]');
        if (!link) return;
        if (entry.isIntersecting) {
          links.forEach(function (l) { l.classList.remove('active'); });
          link.classList.add('active');
        }
      });
    },
    { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
  );

  sections.forEach(function (s) { observer.observe(s); });
})();
