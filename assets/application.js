$(document).ready(function(){

  // MOBILE MENU ==================
  $('.menu-trigger').on('click', function(){
    $('.mobile-nav').addClass('show');
  })

  $('.nav-close').on('click', function(){
    $('.mobile-nav').removeClass('show');
  })



  // SEARCH BOX ================
  $('#search-trigger').on('click', function(){
    $('.search-box').addClass('show');
  })

  $('#search-box-close').on('click', function(){
    $('.search-box').removeClass('show');
  })

  // CART DRAWER ================

  $('#cartDrawer-trigger').on('click', function(){
    $('.cartDrawer').addClass('show');
  })

  $('#cartDrawer-close').on('click', function(){
    $('.cartDrawer').removeClass('show');
  })



  // ON SCROLL STICKY NAV
  var header = $("#header");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 100 && $(this).width() > 767) {
            header.addClass("sticky-nav");
        } else {
            header.removeClass('sticky-nav');
        }
    });   


  // BESTSELLERS CAROUSEL
  $('.bestsellers__row').slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 2,
    infinite: false,
    mobileFirst: true,
    nextArrow: '<i class="bestsellers-slide-arrow left">2</i>',
    prevArrow: '<i class="bestsellers-slide-arrow right"t>1</i>',
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]

  });
})


