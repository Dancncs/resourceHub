jQuery(document).ready(function($) {
  // Toggle menu on mobile
  const toggle = $('.toggleWrap');
  const menu = $('.header_nav, .toggle');
  const menuClick = $('.menu a');
  toggle.click(function() {

    if (menu.hasClass('active')) {
      menu.removeClass('active');
    } else {
      menu.addClass('active');
    }

  });

  // menuClick.click(function() {
  //   menu.removeClass('active');
  // });

  // To replace IMG inside carousel with background image
  var slideIMG = $('.event_swiper-container img');
  slideIMG.each(function() {
    var imgSrc = $(this).attr('src');
    $(this).parent().css({
      'background-image': 'url(' + imgSrc + ')'
    });
    $(this).remove();
  });

});

// Swiper for Event
var swiper = new Swiper(".event_swiper", {
  loop: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: !1
  },
  pagination: {
    el: ".swiper-pagination"
  }
});

// Magnific Popup
jQuery(document).ready(function($) {
  $('.open-popup-link').magnificPopup({
    type: 'inline',
    midClick: true,
    closeBtnInside: true
  });
});