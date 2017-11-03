(function (window) {
    'use strict';

    /**
     * Handles events on the main page and sets up view bindings
     *
     * @constructor
     */
    function MainController() {
        this.researchController = new app.ResearchController();
    }

    /**
     * Initialize 3rd party libraries, javascript components, and any functionality needed on page load
     */
    MainController.prototype.initView = function () {
        this._initBackstretch();
        this._initLazyLoad();
        this._initNavbar();
        this._initBootstrapComponents();
        this._initBindings();

        this.researchController.initView();

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
                {'width': 1920, 'url': '../media/home_Si_Al2O3_Ar_rotated_zoomed_in_1920x1280.jpg'},
                // {'width': 1200, 'url': 'media/home_Si_Al2O3_Ar_rotated_zoomed_in_1200x.jpg'},
                {'width': 960, 'url': '../media/home_Si_Al2O3_Ar_rotated_zoomed_in_960x640.jpg'},
                {'width': 576, 'deviceOrientation': 'portrait', 'url': '../media/home_Si_Al2O3_Ar_rotated_zoomed_in_576x_portrait.jpg'}
            ],
            [
                {'width': 1920, 'url': '../media/home_HardCarbon_Sized_1920x1280.jpg'},
                {'width': 1200, 'url': '../media/home_HardCarbon_Sized_1200x.jpg'},
                {'width': 960, 'url': '../media/home_HardCarbon_Sized_960x640.jpg'}
            ],
            [
                {'width': 1920, 'url': '../media/home_hard-carbon-stormtroopers_1920x1080.jpg'},
                {'width': 960, 'url': '../media/home_hard-carbon-stormtroopers_960x540.jpg'},
                {'width': 576, 'deviceOrientation': 'portrait',  'url': '../media/home_hard-carbon-stormtroopers_576x_portrait.jpg'}
            ]
        ], {
                duration: 2000,
                fade: 750,
                preload: 0
            }
        );

    };

    MainController.prototype._initLazyLoad = function() {
        $('img.lazy').lazyload();
    };

    /**
     * Bind smoothscroll event for navbar links
     * @private
     */
    MainController.prototype._initNavbar = function () {

        var hash = window.location.hash;

        // TODO check that hash is valid (one of the menu hashes)

        if (hash) {
            $('html, body').stop().animate({
                scrollTop: $(hash).offset().top - 40,
            }, 1000);
        }

        // Bind smoothscroll js
        $('.navbar a').bind('click', function (event) {
            var $anchor = $(this);
            window.location.hash = $anchor.attr('href');
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 40,
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
        // TODO make trigger variable dependent on screensize and add abstract button for mobile
        if ($(window).width() > phoneBreakpoint) {
            $('.abstract-popover-hover').popover({
                trigger: 'hover',
                template: '<div class="popover abstract" role="tooltip">' +
                            '<div class="arrow"></div> ' +
                            '<h3 class="popover-header font-weight-normal"></h3>' +
                            '<div class="popover-body"></div>' +
                          '</div>',
                placement: 'auto'
            });
        }

        // Init popover for teaching sections, note popover gets janky when it shows on top of the initiating hover content
        // TODO figure out mobile display
        $('.course-catalog-popover').popover({
            trigger: 'hover',
            template:   '<div class="popover course-catalog" role="tooltip">' +
                            '<div class="arrow"></div> ' +
                            '<h3 class="popover-header font-weight-normal"></h3>' +
                            '<div class="popover-body"></div>' +
                        '</div>',
            placement: 'auto'
        });
    };

    /**
     * Initialize general event bindings
     * @private
     */
    MainController.prototype._initBindings = function () {
        $('#publications .show-more-btn').on('click', function () {
            if ($(this).text() === 'Show more') {
                $('.publication-list-more').animate({
                    height: $('.publication-list-more').get(0).scrollHeight
                }, 1000, function () {
                    $('.show-more-btn').text('Show less');
                });
            } else {
                $('.publication-list-more').animate({
                    height: 0
                }, 1000, function () {
                    $('.show-more-btn').text('Show more');
                    // TODO scroll as publication list shrinks
                    $('html, body').stop().animate({
                        scrollTop: $('#publications').offset().top - 49,
                    }, 1000);
                });
            }
        });
    };

    // Export to window
    window.app = window.app || {};
    window.app.MainController = MainController;

})(window);