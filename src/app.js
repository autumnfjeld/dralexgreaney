(function () {
    'use strict';

    function Website() {

        this.mainController = new window.app.MainController();
        this.researchData = window.app.dataStore;
        this.researchPopupTemplate = window.app.researchPopupTemplateFunc;
        this.researchProjectTemplate = window.app.researchProjectTemplateFunc;
        this.researchController = new window.app.ResearchController(this.researchData, this.researchProjectTemplate, this.researchPopupTemplate);

    }

    var matSci = new Website();

    function initMatSci() {
        matSci.mainController.initView();
        matSci.researchController.initView();
    }

    window.$(window).on('load', initMatSci());


})(window);
