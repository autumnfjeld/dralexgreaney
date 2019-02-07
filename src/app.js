(function() {
    'use strict';
    /**
     * TODO: update this comment for correct build script
     * window.app.dataStore created in data-store.js, generated from a build script
     * window.app.researchProjectTemplateFun generated from a compile-pug build script
     */
    function Website() {
        this.researchData = window.app.dataStore;
        this.researchProjectTemplate = window.app.researchProjectTemplateFunc;
        this.mainController = new window.app.MainController();
        this.researchController = new window.app.ResearchController(this.researchData, this.researchProjectTemplate, this.researchPopupTemplate);
        this.contactController = new window.app.ContactController();
    }

    var matSci = new Website();

    function initMatSci() {
        matSci.mainController.initView();
        matSci.researchController.initView();
        matSci.contactController.initView();
    }

    window.$(window).on('load', initMatSci());

})(window);
