(function ($) {

    "use strict";

        // PRE LOADER
        $(window).load(function(){
          $('.preloader').fadeOut(1000); // set duration in brackets    
        });


        // navigation Section
        $('.navbar-collapse a').on('click',function(){
          $(".navbar-collapse").collapse('hide');
        });


        // jquery backstretch slideshow
        $("#home").backstretch([
          "https://s3-us-west-2.amazonaws.com/alexgreaney.com/media/bubble1.jpg",
          "https://s3-us-west-2.amazonaws.com/alexgreaney.com/media/bubble3.jpg",
          "https://s3-us-west-2.amazonaws.com/alexgreaney.com/media/bath-pouf.png"
          ], {duration: 2000, fade: 750});
        

        // smoothscroll js
        $(function() {
          $('.navbar-default a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
          });
        });  


        // WOW Animation js
        new WOW({ mobile: false }).init();

})(jQuery);