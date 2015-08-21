(function() {
    "use strict";

    angular
        .module('app')
        .controller('CompanyCtrl', ['$state', 'appStates', CompanyCtrl]);

    function CompanyCtrl($state, appStates) {
        var vm = this;
        $state.go(appStates.COMPANY_DASHBOARD);
    }
})();