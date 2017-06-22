(function (window) {
    'use strict';

    /**
     * Handles events on the main page and sets up view bindings
     *
     * @constructor
     */
    function MainController() {
    }

    /**
     * Initalize 3rd party libraries, javascript components, and any functionality needed on page load
     */
    MainController.prototype.initView = function(){

        $('.spinner-box').fadeOut(1000); // set duration in brackets
        this._initBackstretch();
        this._initNavbar();
        this._initBootstrapComponents();

        // Instantiate scoll animation module
        new WOW({mobile: true}).init();

    };

    /**
     * Initialize the backstrech library with rotating images for above-the-fold view
     * @private
     */
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

    /**
     * Bind smoothscroll event for navbar links
     * @private
     */
    MainController.prototype._initNavbar = function(){
        console.log('_initNavbar should go to url hash');
        var hash = window.location.hash;
        if (hash) {
            $('ul.navbar-nav a[href="' + hash + '"]').tab('show');
        }

        // smoothscroll js
        $(function() {
            $('.navbar a').bind('click', function(event) {
                var $anchor = $(this);
                console.log('$anchor', $anchor);
                // console.log('$anchor hash', $anchor[0].attr('href'));
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top - 49,
                }, 1000);
                // event.preventDefault();
            });
        });

        //TODO: (maybe) change url hash during scroll ?

        // navigation Section
        $('.navbar-collapse a').on('click', function() {
            $('.navbar-collapse').collapse('hide');
        });

    };

    /**
     * Init bootstrap components that require initialization
     * @private
     */
    MainController.prototype._initBootstrapComponents = function(){

        // Bootstrap4 requires initializing tooltips, due to "performance reasons"
        $(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });
    };


    // Export to window
    window.app = window.app || {};
    window.app.MainController = MainController;

})(window);