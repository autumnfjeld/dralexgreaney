(function (window) {
    console.log('mainController is running');
    'use strict';

    /**
     * Handles events on the main page and sets up view bindings
     *
     * @constructor
     */
    function MainController() {
    }

    MainController.prototype.initView = function(){

        $('.spinner-box').fadeOut(1000); // set duration in brackets
        this._initBackstretch();
        this._initNavbar();

        // Instantiate scoll animation module
        new WOW({mobile: true}).init();

    };

    MainController.prototype._initBackstretch = function(){

        $('.home-backstretch').backstretch([
                [
                    {'width': 1920, 'url': 'media/Si_Al2O3_Ar_rotated_zoomed_in_1920x1280.jpg'},
                    {'width': 960, 'url': 'media/Si_Al2O3_Ar_rotated_zoomed_in_960x640.jpg'}
                ],
                [
                    {'width': 1920, 'url': 'media/HardCarbon_Sized_1920x1280.png'},
                    {'width': 960, 'url':  'media/HardCarbon_Sized_960x640.png'}
                ],
                [
                    {'width': 1920, 'url': 'media/hard-carbon-stormtroopers_1920x1080.png'},
                    {'width': 960,  'url':  'media/hard-carbon-stormtroopers_960x540.png'}
                ]
            ]
            , {duration: 2000, fade: 750});

    };

    MainController.prototype._initNavbar = function(){

        // smoothscroll js
        $(function() {
            $('.navbar-default a').bind('click', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top - 49,
                }, 1000);
                event.preventDefault();
            });
        });

        // navigation Section
        $('.navbar-collapse a').on('click', function() {
            $('.navbar-collapse').collapse('hide');
        });

    };

        // Export to window
        window.app = window.app || {};
        window.app.MainController = MainController;

})(window);