jQuery(document).ready(function($) {

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

// Change color text dynamically depending on background

const getYiq = (imgData) => {

  // Calculate average color of canvas
  // Here to calculate average color of image
  let rgb = {
    r: 0,
    g: 0,
    b: 0
  };
  let count = 0;

  length = imgData.data.length;

  for (var i = 0; i < length; i += 4) {

    // Sum all values of red colour
    rgb.r += imgData.data[i];

    // Sum all values of green colour
    rgb.g += imgData.data[i + 1];

    // Sum all values of blue colour
    rgb.b += imgData.data[i + 2];

    // Increment the total number of
    // values of rgb colours
    count++;
  }

  // Calculating average
  rgb.r = Math.floor(rgb.r / count);
  rgb.g = Math.floor(rgb.g / count);
  rgb.b = Math.floor(rgb.b / count);

  // Getting the contrast 
  // Depending on rgb colors
  return yiq = ((rgb.r * 299) + (rgb.g * 587) + (rgb.b * 114)) / 1000;
}

const paintCanvas = (img, bckg, bckg_measures, text, text_measures) => {

  // Creating the canvas element
  // To draw the image invisible
  let canvas = document.createElement('canvas');
  let ctx = canvas.getContext('2d');

  // Setting size of the canvas
  // canvas.height = text_measures.height;
  // canvas.width  = text_measures.width;
  canvas.height = bckg_measures.height;
  canvas.width = bckg_measures.width;

  // Drawing the final image
  ctx.drawImage(img, text.offsetLeft, text.offsetTop, text_measures.width, text_measures.height, 0, 0, text_measures.width, text_measures.height);
  //ctx.drawImage(img, 0, 0);

  // Getting image data
  let imgData = ctx.getImageData(0, 0, text_measures.width, text_measures.height);

  // Getting Yiq
  let yiq = getYiq(imgData);

  // Check contrast
  text.style.color = yiq >= 128 ? 'black' : 'white';
}

const changeTextColor = () => {

  // We need to cut the background behind the text
  // and get the average color of the pixels
  let text = document.getElementsByClassName('event_details-desc')[0];
  let bckg = document.getElementsByClassName('event_swiper-container')[0];

  // Getting measures of text and background
  let text_measures = text.getBoundingClientRect();
  let bckg_measures = bckg.getBoundingClientRect();

  // Getting the image source
  // From the background
  let img = new Image();

  // Defining image properties
  img.crossOrigin = 'anonymous';
  img.src = window.getComputedStyle(bckg, false).backgroundImage.slice(5, -2);
  img.height = bckg_measures.height;
  img.width = bckg_measures.width;

  img.onload = () => paintCanvas(img, bckg, bckg_measures, text, text_measures);
}

window.onload = () => changeTextColor();
window.onresize = () => changeTextColor();


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
var swiper = new Swiper(".video_swiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    980: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    1366: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    2000: {
      slidesPerView: 3,
      spaceBetween: 10
    }
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