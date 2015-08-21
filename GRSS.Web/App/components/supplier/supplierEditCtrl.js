(function () {
    "use strict";

    angular.module('app')
        .controller('SupplierEditCtrl',  SupplierEditCtrl);

    function SupplierEditCtrl() {
		var vm = this;
        vm.companyLegalStatuses = ['Ltd', 'Inc', "SSH"];
        vm.numberOfEmployeesSet = ['1-10', '10-50', '50-100', '100-250', '250-1000', '1000-5000', '>5000'];
        vm.supplierCompany = { categories: [] };

        vm.addCategory = function () {
            vm.supplierCompany.categories.push({});
        };

        vm.removeCategory = function(index) {
            vm.supplierCompany.categories.splice(index, 1);
        };
    }
})();