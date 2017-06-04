(function (window) {


    /**
     *
     * @param template - a pug template compiled into js function
     * @param data
     * @constructor
     */
    function ResearchController(template, data) {
        console.log('ResearchController', data);
        this.template = template;
        this.data = data;
    }

    ResearchController.prototype.initView = function() {
        this._initResearchPopup();

    };

    ResearchController.prototype._initResearchPopup = function () {

        var self = this;
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
                    console.log('rawData', self.data)
                    item.src = self.template(self.data[3]);
                }
            }
        });
    };



    // Export to window
    window.app = window.app || {};
    window.app.ResearchController = ResearchController;

})(window);




(function (window) {

    function ResearchModel() {

    }


    // Export to window
    window.app = window.app || {};
    window.app.ResearchModel = ResearchModel;

})(window);




