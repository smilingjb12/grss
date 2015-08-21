(function() {
    "use strict";

    angular.module('app')
        .controller('SupplierEditCtrl', [SupplierEditCtrl]);

    function SupplierEditCtrl() {
        var vm = this;
        vm.companyLegalStatuses = [ 'Ltd', 'Inc', "SSH" ];
    }
})();