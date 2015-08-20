(function() {
    "use strict";

    angular
        .module('app')
        .controller('CompanyCtrl', ['$scope', '$state', 'appStates', CompanyCtrl]);

    function CompanyCtrl($scope, $state, appStates) {
        $state.go(appStates.COMPANY_DASHBOARD);
    }
})();