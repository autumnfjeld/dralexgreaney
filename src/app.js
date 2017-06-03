
(function(){
    'use strict';

    // Expose jQuery to the global object
    window.jQuery = window.$ = jQuery;

    var App = {

        // Come back to this
        researchPagePugFunc: app.pugCompile.researchPagePugFunc,
        researchData: app.rawData,

        init: function() {
            this.setView();
            this.bindEvents();
            // TODO Handle image lazy loading
        },

        /**
         * Configure main page view
         **/
        setView: function() {
            // On page load fade out spinner
            $(window).on('load', function() {
                $('.spinner-box').fadeOut(1000); // set duration in brackets
            });

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

            // WOW Animation js
            new WOW({mobile: true}).init();

            $(document).ready(function() {
                this.initResearchPopup();
            }.bind(this));
        },

        /**
         * Bind events
         */
        bindEvents: function() {
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

            // Handle research section clicks - this will go away
            $('#research').on('click', '.research-click', function(ev) {
                console.log('ev', ev);
                console.log('ev', ev.target['data-project']);
                var path = $(this).attr('data-project');
                console.log('path', path);
                var html = window.app.pugCompile.researchPagePugFunc(window.app.rawData);
                // $('#main-page').hide();
                // $('#research-page').append(html);
                $('#expanded-research').append(html);
                $('#expanded-research').slideDown('slow');
                // $('#expanded-research').animate({
                // opacity: 0.25,
                // height: toggl
            });
        },

        /**
         * Move elsewhere?  Maybe have a research controller
         * Popup slide show to display reasearch extended content
         */
        initResearchPopup: function() {
            var stuff = this;
            $('.research-popup').magnificPopup({
                type: 'inline',
                mainClass: 'mfp-fade',
                closeOnBgClick: true,
                gallery: {
                    enabled: true
                },
                callbacks: {
                    elementParse: function(item) {
                        console.log('elementParse', item);
                        var project = $(item.el).attr('data-project');
                        console.log($(item.el).attr('data-project'));
                        // item.src = '<div class='"white-popup">' +
                        //     '<h1> Hi Aut </h1>' +
                        //     '<h1>' + project + ' </h1>' +
                        //     '</div>';
                        console.log('rawData', stuff.rawData)
                        item.src = stuff.researchPagePugFunc(window.app.rawData);
                    }
                }
            });
        }
    };

    App.init();

})(window);
