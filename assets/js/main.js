
(function ($) {
    "use strict";
  
  
  // Ticker..........................................start
  
    $(document).ready(function () {
          $(".menu-trigger").click(function(){
            $(".menu-overlay").addClass("active");
            $(".mobile-menu").addClass("active");
          });
          $(".menu-close-trigger").click(function(){
            $(".menu-overlay").removeClass("active");
            $(".mobile-menu").removeClass("active");
          });
          $(".menu-overlay").click(function(){
            $(".menu-overlay").removeClass("active");
            $(".mobile-menu").removeClass("active");
          });

        $('.hero-slider').owlCarousel({
            items: 1,
            margin: 20,
            loop: true,
            autoplay: false,
            animateOut: 'fadeOut',
            autoplayTimeout: 10000,
            dots: false,
            nav: true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        }) 
        $('.partner-carousal').owlCarousel({
            loop:true,
            margin:15,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        }) 
        $('.our-work-slide').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        }) 
        $('.testimonial-slider').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:2
                }
            }
        }) 
    });
   
  
  }(jQuery));
  
  