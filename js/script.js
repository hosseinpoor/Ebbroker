(function ($) {
  "use strict";
  $(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
}(jQuery));

function clickSingleA(a) {
  items = document.querySelectorAll('.single.active');

  if (items.length) {
    items[0].className = 'single';
  }
  a.className = 'single active';

}


