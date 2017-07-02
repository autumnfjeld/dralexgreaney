
(function(){
    'use strict';

    // Expose jQuery to the global object
    window.jQuery = window.$ = jQuery;

    function Website(){
        this.mainController = new app.MainController();
        this.researchData = app.dataStore;
        this.researchPopupTemplate = app.researchPopupTemplateFunc;
        this.researchProjectTemplate = app.researchProjectTemplateFunc;
        this.researchController = new app.ResearchController(this.researchData, this.researchProjectTemplate, this.researchPopupTemplate);

        console.log('Confirm app: this:', this);
    }

    var matSci = new Website();

    function initMatSci() {
        matSci.mainController.initView();
        matSci.researchController.initView();  //or should it be called only on usage?
    }

    $(window).on('load', initMatSci());


})(window);
