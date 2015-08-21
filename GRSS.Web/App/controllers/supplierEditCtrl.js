(function () {
    "use strict";

    angular.module('app')
        .controller('SupplierEditCtrl', ['$scope', SupplierEditCtrl]);

    function SupplierEditCtrl($scope) {
        $scope.companyLegalStatuses = ['Ltd', 'Inc', "SSH"];
        $scope.numberOfEmployeesSet = ['1-10', '10-50', '50-100', '100-250', '250-1000', '1000-5000', '>5000'];
        $scope.supplierCompany = { categories: [] };

        $scope.addCategory = function () {
            $scope.supplierCompany.categories.push({});
        };

        $scope.removeCategory = function(index) {
            $scope.supplierCompany.categories.splice(index, 1);
        };
    }
})();