(function (window) {


    /**
     *
     * @param template - a pug template compiled into js function
     * @param data
     * @constructor
     */
    function ResearchController(template, data) {
        console.log('ResearchController()   template:', template, data);
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
            gallery: {
                enabled: true
            },
            callbacks: {
                elementParse: function(item) {
                    var projectIndex = item.index;
                    console.log('ProjectIndex', projectIndex);
                    var project = $(item.el).attr('data-project');
                    console.log('data-project', $(item.el).attr('data-project'));
                    console.log('rawData', self.data, 'this data', self.data[projectIndex]);
                    item.src = self.template(self.data[projectIndex]);
                },
                close: function(){
                    console.log('fuck you');
                }
            }
        });
    };

    //Will need to add custom close if going forward with this


    // Export to window
    window.app = window.app || {};
    window.app.ResearchController = ResearchController;

})(window);


// Use or cleanup  !!!

(function (window) {

    function ResearchModel() {

    }


    // Export to window
    window.app = window.app || {};
    window.app.ResearchModel = ResearchModel;

})(window);




