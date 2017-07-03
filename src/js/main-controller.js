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
     * Initialize 3rd party libraries, javascript components, and any functionality needed on page load
     */
    MainController.prototype.initView = function () {

        $('.spinner-box').fadeOut(1000); // set duration in brackets
        this._initBackstretch();
        this._initNavbar();
        this._initBootstrapComponents();
        this._initBindings();

        // Instantiate scoll animation module
        new WOW({mobile: true}).init();

    };

    /**
     * Initialize the backstrech library with rotating images for above-the-fold view
     * @private
     */
    MainController.prototype._initBackstretch = function () {

        $('.home-backstretch').backstretch([
                [
                    {'width': 1920, 'url': 'media/Si_Al2O3_Ar_rotated_zoomed_in_1920x1280.jpg'},
                    {'width': 960, 'url': 'media/Si_Al2O3_Ar_rotated_zoomed_in_960x640.jpg'}
                ],
                [
                    {'width': 1920, 'url': 'media/HardCarbon_Sized_1920x1280.png'},
                    {'width': 960, 'url': 'media/HardCarbon_Sized_960x640.png'}
                ],
                [
                    {'width': 1920, 'url': 'media/hard-carbon-stormtroopers_1920x1080.png'},
                    {'width': 960, 'url': 'media/hard-carbon-stormtroopers_960x540.png'}
                ]
            ]
            , {duration: 2000, fade: 750});

    };

    /**
     * Bind smoothscroll event for navbar links
     * @private
     */
    MainController.prototype._initNavbar = function () {

        var hash = window.location.hash;

        if (hash) {
            $('ul.navbar-nav a[href="' + hash + '"]').tab('show');
            $('html, body').stop().animate({
                scrollTop: $(hash).offset().top - 49,
            }, 1000);
        }

        // Bind smoothscroll js
        $('.navbar a').bind('click', function (event) {
            var $anchor = $(this);
            window.location.hash = $anchor.attr('href');
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49,
            }, 1000);
        });

        //TODO: (maybe) change url hash during scroll

        // navigation Section
        $('.navbar-collapse a').on('click', function () {
            $('.navbar-collapse').collapse('hide');
        });

    };

    /**
     * Init bootstrap components that require initialization
     * @private
     */
    MainController.prototype._initBootstrapComponents = function () {

        // Bootstrap4 requires initializing tooltips, due to "performance reasons"
        $('[data-toggle="tooltip"]').tooltip();

        // Init popover for publication section on tablet & desktop screens
        var phoneBreakpoint = 576;
        if ($(window).width() > phoneBreakpoint) {
            $('.abstract-popover-hover').popover({
                trigger: 'hover',
                template: '<div class="popover abstract" role="tooltip">' +
                '<div class="popover-arrow"></div> ' +
                '<h3 class="popover-title font-weight-normal"></h3>' +
                '<div class="popover-content"></div>' +
                '</div>',
                placement: 'top',
                constraints: [
                    {to: 'window', pin: true}
                ],
                offset: '0 -60%'
            });
        }

    };

    /**
     * Initialize general event bindings
     * @private
     */
    MainController.prototype._initBindings = function () {
        $('#publications .show-more-btn').on('click', function () {

            var initialHeight = 630;

            if ($(this).text() === 'Show more') {
                console.log($(this).text(),  initialHeight);
                $('.publication-list').animate({
                    height: $('.publication-list').get(0).scrollHeight
                }, 'easeOutSine', function () {
                    $('.show-more-btn').text('Show less');
                });
            } else {
                $('.publication-list').animate({
                    height: initialHeight
                }, 'easeOutSine', function () {
                    $('.show-more-btn').text('Show more');
                });
            }
        });

    };

    // Export to window
    window.app = window.app || {};
    window.app.MainController = MainController;

})(window);