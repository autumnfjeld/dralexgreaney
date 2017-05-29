/* global jQuery */
jQuery(function($) {
    'use strict';

    var App = {

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
            // $(document).ready(function) {
            $(window).on('load', function() {
                console.log('doc ready');
                $('.spinner-box').fadeOut(1000); // set duration in brackets
            });

            // jquery backstretch slideshow
            $('#home').backstretch([
                'https://s3-us-west-2.amazonaws.com/alexgreaney.com/media/banner-images/Si_Al2O3_Ar_rotated_zoomed_in_1920x1280.jpg',
                'https://s3-us-west-2.amazonaws.com/alexgreaney.com/media/banner-images/HardCarbon_Sized_1920x1280.png'
                // "https://s3-us-west-2.amazonaws.com/alexgreaney.com/media/bubble1.jpg",
                // "https://s3-us-west-2.amazonaws.com/alexgreaney.com/media/bubble3.jpg",
                // "https://s3-us-west-2.amazonaws.com/alexgreaney.com/media/bubble6.jpg"
            ], {duration: 2000, fade: 750});

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

            // Handle research section clicks
            $('#research').on('click', '.research-click', function(ev) {
                console.log('ev', ev);
                console.log('ev', ev.target['data-project']);
                var path = $(this).attr('data-project');
                console.log('path', path);
                var html = window.app.pugCompile.researchPagePugFunc({title: 'Fucking YES', teaser: 'Lots of text'});
                // $('#main-page').hide();
                // $('#research-page').append(html);
                $('#expanded-research').append(html);
                $('#expanded-research').slideDown('slow');
                // $('#expanded-research').animate({
                // opacity: 0.25,
                // height: toggl

                // compile pug function and display in new page
            });
        },

        /**
         * Move elsewhere?
         * Popup slide show to display reasearch extended content
         */
        initResearchPopup: function() {
            $('.research-popup').magnificPopup({
                type: 'inline',
                // gallery: true,
                inline: {
                    // Define markup. Class names should match key names.
                    markup: '<div class="white-popup">' +

                    '</div>',
                },
                gallery: {
                    enabled: true,
                },

                callbacks: {
                    open: function() {
                        console.log('open  this', this);
                    },
                    //     // markupParse: function(template, values, item) {
                    //     //     // optionally apply your own logic - modify "template" element based on data in "values"
                    //     //     // console.log('Parsing:', template, values, item);
                    //     // },
                    //     //gets the source element
                    elementParse: function(item) {
                        console.log('elementParse', item);
                        var project = $(item.el).attr('data-project');
                        console.log($(item.el).attr('data-project'));
                        item.src = '<div class="white-popup">' +
                            '<h1> Hi Aut </h1>' +
                            '<h1>' + project + ' </h1>' +
                            '</div>';
                    },
                    //     change: function() {
                    //         console.log('Content changed');
                    //         console.log(this.content); // Direct reference to your popup element
                    //     }
                },
            });
        },


    };

    App.init();
});
