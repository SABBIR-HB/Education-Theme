/*------------------------------------------------
Wisedu Html5 Template
All Main Js Here  

Index All JS 
-----------------------
        01. Counter Up
--------------------------------------------------*/


(function ($) {
    'use strict';

    /*-----------------------
    	01. Back to top btn
    -------------------------*/

    var imJs = {
      m: function (e) {
        imJs.d();
        imJs.methods();
      },
      d: function (e) {
          this._window = $(window),
          this._document = $(document),
          this._body = $('body'),
          this._html = $('html')
      },
      methods: function (e) {
          imJs.featherAtcivation();
          imJs.backToTopInit();
          imJs.stickyHeader();
          imJs.smothScroll();
          imJs.stickyAdjust();
          imJs.slickActivation();
          imJs.contactForm();
          imJs.wowActive();
          imJs.selectJs();
          imJs.popupMobileMenu();
          imJs.masonryActivation();
          imJs.cursorAnimate();
          imJs.rncounterUp();
          imJs.salActive();
          imJs.searchClick();
          imJs.filterClickButton();
      },

      backToTopInit: function () {
        // declare variable
        var scrollTop = $('.backto-top');
        $(window).scroll(function () {
            // declare variable
            var topPos = $(this).scrollTop();
            // if user scrolls down - show scroll to top button
            if (topPos > 100) {
                $(scrollTop).css('opacity', '1');

            } else {
                $(scrollTop).css('opacity', '0');
            }
        });
        
        //Click event to scroll to top
        $(scrollTop).on('click', function () {
            $('html, body').animate({
                scrollTop: 0,
                easingType: 'linear',
            }, 500);
            return false;
        });
      },

      /*-----------------------
    	04. rbt-fiter JS
    -------------------------*/

    filterClickButton: function () {
      $('.discover-filter-activation').on('click', function () {
          $(this).toggleClass('open');
          $('.default-exp-expand').slideToggle('400');
      })

      $('#slider-range').slider({
          range: true,
          min: 10,
          max: 500,
          values: [100, 300],
          slide: function (event, ui) {
              $('#amount').val('$' + ui.values[0] + ' - $' + ui.values[1]);
          }
      });
      $('#amount').val('$' + $('#slider-range').slider('values', 0) +
          " - $" + $('#slider-range').slider('values', 1));
      },
    }


    /*-----------------------
    	01. Header Search Area
    -------------------------*/

    $(".feather-search").click(function(){
      $(".search-btn").toggleClass("active");
       $("input[type=text]").toggleClass("active");
    });

    /*-----------------------
    	02. Counter Up
    -------------------------*/

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    sal();


    /*-----------------------
    	03. Slider
    -------------------------*/

    $('.card-slider-1').slick({
        dots: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });

    $('.card-slider-2').slick({
      dots: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 1000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    $('.card-slider-3').slick({
      dots: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 1000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    $('.events-slider-1').slick({
      dots: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 1000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    $('.list-card-slider-1').slick({
      dots: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    $('.events-slider-2').slick({
      dots: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 1000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    $('.testimonial-slider-1').slick({
      dots: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 1000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    $('.testimonial-slider-2').slick({
      dots: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    $('.brands-slider-1').slick({
      dots: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 3,
      // autoplay: true,
      autoplaySpeed: 1000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    $('.brands-slider-2').slick({
      dots: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 3,
      // autoplay: true,
      autoplaySpeed: 1000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    /*-----------------------
    	04. Parallax JS
    -------------------------*/

    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);


})(jQuery)

/*-----------------------
02. Odometer
-------------------------*/
function aboutEvent(){
  setTimeout(function(){
    odometer.innerHTML = 23;
  }, 1000);

  setTimeout(function(){
    odometer2.innerHTML = 27;
  }, 1000);

  setTimeout(function(){
    odometer3.innerHTML = 46;
  }, 1000);

  setTimeout(function(){
    odometer4.innerHTML = 99;
  }, 1000);
}








