(function (window) {


    /**
     *
     * @param templatePage - a pug template compiled into js function
     * @param data
     * @constructor
     */
    function ResearchController(data, templatePage) {
        this.templatePage = templatePage;
        this.data = data;
    }

    /**
     * Initialize view for reseach section
     */
    ResearchController.prototype.initView = function () {
        this._initBindings();
        // this._initResearchPopup();

    };

    /**
     * Set up event bindings for Research UI
     * @private
     */
    ResearchController.prototype._initBindings = function () {
        var isOverLayHidden;

        $('#research .more-teaser').on('click', function(){
            if (isOverLayHidden) {
                // todo must grab closest one
                $(this).next().find('.work-box-overlay').css({opacity: 0});
                // $('.work-box-overlay').css({opacity: 0});
                isOverLayHidden = false;
            } else {
                // $('.work-box-overlay').css({opacity: .8});
                $(this).next().find('.work-box-overlay').css({opacity: .8});
                isOverLayHidden = true;
            }
        });
    };


    ResearchController.prototype._initResearchPopup = function () {

        var self = this;
        $('.research-popup').magnificPopup({
            type: 'inline',
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true,
                closeOnBgClick: true,
                showCloseBtn: true
            },
            callbacks: {
                elementParse: function (item) {
                    var projectIndex = item.index;
                    // console.log('ProjectIndex', projectIndex);
                    var project = $(item.el).attr('data-project');
                    // console.log('data-project', $(item.el).attr('data-project'));
                    // console.log('rawData', self.data, '\nthis data', self.data[projectIndex]);
                    item.src = self.templatePage(self.data[projectIndex]);
                }
            }
        });
    };

    // ResearchController.prototype._initBindings = function () {
    //     console.log('init bindings', this.templatePage);
    //     var self = this;
    //
    //     var $mainPage = $('#main-page'),
    //         $researchProjectPage = $('#research-project-page');
    //
    //     $('.research-projects').on('click', '.research-page-link', function (ev) {
    //         var projectIndex = $(this).attr('data-project-index');
    //         console.log(' clicked .research-page-link', projectIndex);
    //         var projectTemplate = self.templatePage(self.data[projectIndex]);
    //
    //         var windowWidth = $(window).width(),
    //             marginOffset = '-=' + 2*$(window).width();
    //
    //         $('#main-page').animate({
    //             'margin-left': marginOffset
    //         });
    //         $('#main-page').hide();
    //         // debugger;
    //
    //         var $researchProjectPage = $('#research-project-page');
    //         var $researchProject = $('#research-project');
    //         $('#research-project-page').append(projectTemplate);
    //         // $researchProjectPage.css('margin-right', marginOffset);
    //         $researchProject.show();
    //         // $researchProjectPage.animate({
    //         //     'margin-right': 0
    //         // });
    //
    //         ev.preventDefault();
    //
    //     });
    //
    //     $('a.back').on('click', function(event) {
    //         var windowWidth = $(window).width(),
    //             marginOffset = '+=' + 2*$(window).width();
    //
    //         $researchProjectPage.animate({
    //             'margin-right': marginOffset
    //         });
    //         $researchProject.remove();
    //         $mainPage.animate({
    //            'margin-left': 0
    //         });
    //
    //         window.location.hash =  '#research';
    //
    //     });
    //
    // };

    // Export to window
    window.app = window.app || {};
    window.app.ResearchController = ResearchController;

})(window);


// Use or cleanup  !!!

// (function (window) {
//
//     function ResearchModel() {
//
//     }
//
//
//     // Export to window
//     window.app = window.app || {};
//     window.app.ResearchModel = ResearchModel;
//
// })(window);
//
//


