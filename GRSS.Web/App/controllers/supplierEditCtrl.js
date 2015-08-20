(function() {
    "use strict";

    angular.module('app')
        .controller('SupplierEditCtrl', ['$scope', SupplierEditCtrl]);

    function SupplierEditCtrl($scope) {
        $scope.companyLegalStatuses = [ 'Ltd', 'Inc', "SSH" ];
    }
})();