
/*

  headerFixed
  showsearch
  btnmenu
  dropdown
  swiper1
  swiper2
  swiper3
  swiper31
  swiper4
  swiper41
  swiper5
  swiper6
  partners
  accordion
  goTop
  counter
  tabs
  ranger
  preload

*/

;(function($) {

  'use strict'

  var headerFixed = function() {        
        $(window).on('load scroll', function(){                
          if ($(window).scrollTop() >= 100) {
            $('.sub-header').addClass('hide');
            $('.header-home-03').addClass('background-black');
        }
        else {
            $('.sub-header').removeClass('hide');
            $('.header-home-03').removeClass('background-black');
        }
        })            
  }

  var showsearch = function() {
      $(".icon-show-search").click(function(){
        $(".top-search").slideToggle("show");
      });
  }

  var btnmenu = function() {
    $('.btn-menu').on('click', function () {
      $(this).closest('#header-mobile').find('.canvas-nav-wrap').toggleClass('active');
    });
    
    $('.canvas-nav-wrap .overlay-canvas-nav').on('click', function (e) {
      $(this).closest('#header-mobile').find('.canvas-nav-wrap').toggleClass('active');
    });


    $('.canvas').on('click', function () {
      $(this).closest('#header').find('.canvas-nav-wrap').toggleClass('active');
    });
    
    $('.canvas-nav-wrap .overlay-canvas-nav').on('click', function (e) {
      $(this).closest('#header').find('.canvas-nav-wrap').toggleClass('active');
    });

    
    $(document).on('click', '#mainnav_canvas li.menu-item-has-children', function (e) {
      $(this).toggleClass('active').next('ul').slideToggle(1000);
      e.stopImmediatePropagation();
    });
  }

  var dropdown =function() {
    $('.dropdown-toggle').on('click', function () {
      $(".dropdown-menu").slideToggle("show")
    });
  }

  var swiper1 = function(){
  if ( $('div').hasClass('swiper') ){
  var swiper1 = new Swiper('.slide-type-1', {
    
    direction: 'horizontal',
    loop: true,
    
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });}}

  var swiper2 = function(){
    if ( $('div').hasClass('swiper') ){
    const swiper2 = new Swiper('.slide-type-2', {
      direction: 'horizontal',
      effect: 'slide',
      slidesPerView: 1,
      spaceBetween:30,
    
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    
      breakpoints: {
        600: {
          slidesPerView: 2,
        }
      } 
    }
    );
  }}
  
  var swiper3 = function(){
    if ( $('div').hasClass('swiper') ){
    const swiper3 = new Swiper('.slide-type-3', {
      direction: 'horizontal',
      effect: 'slide',
      slidesPerView: 1,
      spaceBetween:0,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    
      breakpoints: {
        740:{
          slidesPerView:2
        },
        1200: {
          slidesPerView: 3,
        }
      }
    
    }
    );}}

    var swiper31 = function(){
      if ( $('div').hasClass('swiper') ){
      const swiper3 = new Swiper('.slide-type-31', {
        direction: 'horizontal',
        effect: 'slide',
        slidesPerView: 1,
        spaceBetween:40,
  
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      
        breakpoints: {
          740:{
            slidesPerView:2
          },
          1200: {
            slidesPerView: 3,
          }
        }
      
      }
      );}}
  
  var swiper4 = function(){
    if ( $('div').hasClass('swiper') ){
  const swiper4 = new Swiper('.slide-type-4', {
    direction: 'horizontal',
    effect: 'slide',
    slidesPerView: 1,
    spaceBetween:40,
    loop: true, 

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints: {
      780:{
        slidesPerView:2
      },
      1220: {
        slidesPerView:3
      },
      1650:{
        slidesPerView: 4,
      }
    }
  
  });}}

  var swiper41 = function(){
    if ( $('div').hasClass('swiper') ){
  const swiper41 = new Swiper('.slide-type-41', {
    direction: 'horizontal',
    effect: 'slide',
    slidesPerView: 1,
    spaceBetween:0,
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    breakpoints: {
      780:{
        slidesPerView:2
      },
      1220: {
        slidesPerView:3
      },
      1650:{
        slidesPerView: 4,
      }
    }
  
  });}}

  var swiper5 = function(){
    if ( $('div').hasClass('swiper') ){
  const swiper5 = new Swiper('.slide-type-5', {
    direction: 'horizontal',
    effect: 'slide',
    loop: true,
    slidesPerView: 1,
    spaceBetween:40,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints: {
      780:{
        slidesPerView:2
      },
      1220: {
        slidesPerView:4
      },
      1650:{
        slidesPerView: 5,
      }
    }
  
  });}}
  
  var partners = function(){
    if ( $('div').hasClass('swiper') ){
  const partners = new Swiper('.slide-partners', {
    direction: 'horizontal',
    effect: 'slide',
    slidesPerView: 1,
    spaceBetween:40,
    loop:true,
    breakpoints: {
      800: {
        slidesPerView:5,
      },
      1170:{
        slidesPerView: 8,
      }
    }
  
  });}}

  var swiper6 = function(){
    if ( $('div').hasClass('swiper') ){
  const swiper6 = new Swiper('.slide-type-6', {
    direction: 'horizontal',
    effect: 'slide',
    slidesPerView: 1,
    spaceBetween:40,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    breakpoints: {
      780:{
        slidesPerView:2
      },
      1220: {
        slidesPerView:4
      },
      1650:{
        slidesPerView: 6,
      }
    }
  
  });}}

  var accordion = function() {
    if ( $('div').hasClass('widget-accordion') ) {
      $(".accordion-items").on("click", ".accordion-heading", function () {
        $(this).toggleClass("active").next().slideToggle();
    
        $(".accordion-content").not($(this).next()).slideUp(300);
    
        $(this).siblings().removeClass("active");
      });
    }
    if ( $('div').hasClass('widget-accordion-1') ) {
      $(".accordion-items-1").on("click", ".accordion-heading-1", function () {
        $(this).toggleClass("active").next().slideToggle();
    
        $(".accordion-content-1").not($(this).next()).slideUp(300);
    
        $(this).siblings().removeClass("active");
      });
    }
  }

  var goTop = function() {
    $(window).scroll(function() {
      if ( $(window).scrollTop() > 500 ) {
          $('.go-top').addClass('show');
      } else {
          $('.go-top').removeClass('show');
      }
    }); 

    $('.go-top').on('click', function(e) {            
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, 1000);
    });
  }

  var counter = function () {
    if ($('div').hasClass("widget-counter")) {
      var a = 0;
      $(window).scroll(function () {
        var oTop = $(".widget-counter-item").offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          if ($().countTo) {
            $(".widget-counter-item")
              .find(".counter-number")
              .each(function () {
                var to = $(this).data("to"),
                  speed = $(this).data("speed"),
                  formatter = $(this).data('formatter');
                $(this).countTo({
                  to: to,
                  speed: speed,
                  formatter: formatter,
                });
              });
          }
          a = 1;
        }
      });
    }
  };

  var tabs = function() {
    var tabLinks = document.querySelectorAll(".tablinks");
    var tabContent =document.querySelectorAll(".tabcontent");

    tabLinks.forEach(function(el) {
    el.addEventListener("click", openTabs);
    });

    function openTabs(el) {
        var btn = el.currentTarget; 
        var electronic = btn.dataset.electronic; 
        
        tabContent.forEach(function(el) {
            el.classList.remove("active");
        });

        tabLinks.forEach(function(el) {
            el.classList.remove("active");
        });

        document.querySelector("#" + electronic).classList.add("active");
        
        btn.classList.add("active");
    }
  }

  var ranger = function () {
    if ($('div').hasClass("range-container")) {
    const range = document.getElementById('range')

    range.addEventListener('input', (e) => {
      const value = +e.target.value
      const label = e.target.nextElementSibling

      const range_width = getComputedStyle(e.target).getPropertyValue('width')
      const label_width = getComputedStyle(label).getPropertyValue('width')

      const num_width = +range_width.substring(0, range_width.length - 2)
      const num_label_width = +label_width.substring(0, label_width.length - 2)

      const max = +e.target.max
      const min = +e.target.min

      const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10)
      label.style.left = `${left}px`

      
      label.innerHTML = value
    })

    const scale = (num, in_min, in_max, out_min, out_max) => {
      return  (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
  }
  }

  var preload = function() {
    $(window).on('load', function() {
      $('#preload').delay(1500).fadeOut('fast', function() {
              $('#preload').remove();
          })
      })
  }

  // Dom Ready
    $(function() { 
    headerFixed();
    showsearch();
    btnmenu();
    dropdown();
    swiper1();
    swiper2();
    swiper3();
    swiper31();
    swiper4();
    swiper41();
    swiper5();
    swiper6();
    partners();
    accordion();
    goTop();
    counter();
    tabs();
    ranger();
    preload();
  });

})(jQuery);


