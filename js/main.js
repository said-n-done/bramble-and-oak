// Nothing fancy -- just a smooth-scroll nudge for the reserve link so it
// doesn't feel like a dead jump on mobile Safari.
document.addEventListener('DOMContentLoaded', function () {
  var reserveLinks = document.querySelectorAll('a[href="contact.html"]');
  reserveLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      window.sessionStorage.setItem('came_from_reserve', '1');
    });
  });
});
