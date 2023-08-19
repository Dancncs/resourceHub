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

// Swiper for video
var swiper = new Swiper(".resources_swiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    980: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    2000: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  }
});