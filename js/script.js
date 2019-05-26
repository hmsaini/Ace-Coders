(function ($) {
    "use strict";

    var review = $('.review_part_text');
    if (review.length) {
        review.owlCarousel({
            items: 2,
            loop: true,
            dots: true,
            autoplay: true,
            margin: 40,
            autoplayHoverPause: true,
            autoplayTimeout: 5000,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                769: {
                    items: 2
                }
            }
        });
    }
    // menu fixed js code
    $(window).scroll(function () {
        var window_top = $(window).scrollTop() + 1;
        if (window_top > 50) {
            $('.main_menu').addClass('menu_fixed animated fadeInDown');
        } else {
            $('.main_menu').removeClass('menu_fixed animated fadeInDown');
        }
    });
    if (document.getElementById('default-select')) {
        $('select').niceSelect();
    }

    // page-scroll
    $('.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        var headerH = '80';
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $(function () {
        $("#team-members").owlCarousel({
            items: 2,
            autoplay: true,
            smartSpeed: 700,
            loop: true,
            autoplayhoverpause: true,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1
                },
                // breakpoint from 480 up
                480: {
                    items: 2
                }
            }
        });
    });
    /* =============================================
         progress bar
    ===================================================
    */
    $(function () {
        $("#progress-elements").waypoint(function () {
            $(".progress-bar").each(function () {
                $(this).animate({
                    width: $(this).attr("aria-valuenow") + "%"
                }, 1000);
            });

            // alert('hello');
            this.destroy();
        }, {
            offset: 'bottom-in-view'
        });
    });
    /* =============================================
         Responsive Tabs
    ===================================================
    */
    $(function () {
        $("#services-tabs").responsiveTabs({
            animation: 'slide'
            // animation: 'fade'
        });
    });

    /* =============================================
     stats
===================================================
*/
    $(function () {
        $(".counter").counterUp({
            delay: 10,
            time: 2000
        });
    });

    /* =============================================
     Animation
===================================================
*/
    // animate on scroll
    $(function () {
        new WOW().init();
    });
    // home animation on page load
    $(window).on('load', function () {
        $("#animate").addClass("animated fadeInDown");
    });
    /*==========================================
    Screen
    ==========================================
    */
    $(function () {
        $("#screen-list").owlCarousel({
            items: 5,
            autoplay: true,
            smartSpeed: 500,
            loop: true,
            autoplayTimeout: 4000,
            autoplayhoverpause: true,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1
                },
                // breakpoint from 480 up
                600: {
                    items: 3
                },
                1200: {
                    items: 5
                }
            }
        });
    });

  $('.feature-area a').on('mouseenter', function () {
      $(this).tab('show');
  });

    $(".feature-area a").on('mouseover', function () {
         $('.screen_image div').siblings().removeClass('in active');
         $('.screen_image div').toggleClass('in active');

    });










      var client_photo2 = $('.client_details');
      client_photo2.owlCarousel({
          loop: true,
          margin: 30,
          autoplay: false,
          dots: true,
          autoplayTimeout: 4000,
          smartSpeed: 600,
          responsive: {
              0: {
                  items: 1
              },
              600: {
                  items: 1
              },
              992: {
                  items: 1
              }
          }
      });
      // Book List Slider
      var client_photo = $('.client_photo');
      client_photo.owlCarousel({
          loop: true,
          margin: 30,
          dots: true,
          autoplayTimeout: 4000,
          smartSpeed: 600,
          mouseDrag: true,
          touchDrag: false,
          center: true,
          responsive: {
              0: {
                  items: 1
              },
              600: {
                  items: 3
              },
              992: {
                  items: 3
              }
          }
      });
      $('.client_nav .testi_next').on('click', function () {
          client_photo.trigger('next.owl.carousel');
      });
      $('.client_nav .testi_prev').on('click', function () {
          client_photo.trigger('prev.owl.carousel');
      });

      client_photo.on('translate.owl.carousel', function (property) {
          $('.client-details-content .owl-dot:eq(' + property.page.index + ')').click();
      });
      client_photo2.on('translate.owl.carousel', function (property) {
          $('.client-photo-list .owl-dot:eq(' + property.page.index + ')').click();
      });

}(jQuery));