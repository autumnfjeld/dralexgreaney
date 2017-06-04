
(function(){
    'use strict';

    // Expose jQuery to the global object
    window.jQuery = window.$ = jQuery;
    console.log('window.app', window.app)

    function Website(){
        this.mainController = new app.MainController();
        this.researchData = app.data;
        // this.researchVIew ???
        this.researchTemplate = app.researchTemplateFunc;
        // or new View?
        this.researchController = new app.ResearchController(this.researchTemplate, this.researchData);

    }

    var matSci = new Website();

    function initMatSci() {
        matSci.mainController.initView();
        matSci.researchController.initView();  //or should it be called only on usage?
    }

    $(window).on('load', initMatSci());


})(window);
