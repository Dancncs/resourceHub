jQuery(document).ready((function($){const e=$(".toggleWrap"),i=$(".header_nav, .toggle");$(".menu a");e.click((function(){i.hasClass("active")?i.removeClass("active"):i.addClass("active")})),$(".event_swiper-container img").each((function(){var e=$(this).attr("src");$(this).parent().css({"background-image":"url("+e+")"}),$(this).remove()}))}));var swiper=new Swiper(".event_swiper",{loop:!0,autoplay:{delay:8e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination"}});swiper=new Swiper(".video_swiper",{slidesPerView:2,spaceBetween:10,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:2,spaceBetween:20},980:{slidesPerView:3,spaceBetween:20},1366:{slidesPerView:3,spaceBetween:20},2e3:{slidesPerView:3,spaceBetween:20}}});jQuery(document).ready((function($){$(".open-popup-link").magnificPopup({type:"inline",midClick:!0,closeBtnInside:!0})}));