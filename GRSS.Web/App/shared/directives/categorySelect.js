(function () {
    "use strict";

    angular.module('app')
        .directive('categorySelect', ['appSettings', CategorySelect]);

    function CategorySelect(appSettings) {
        return {
            restrict: 'E',
            require: '^ngModel',
            scope: {
                ngModel: '=',
                remove: '&onRemove'
            },
            controller: function ($scope) {
                $scope.verticalMarkets = [{ id: 1, name: "vm1" }, { id: 2, name: "vm2" }, { id: 3, name: "vm3" }];
                $scope.businessUnits = [{ id: 1, name: "bu1" }, { id: 2, name: "bu2" }, { id: 3, name: "bu3" }];
                $scope.categories = [{ id: 1, name: "c1" }, { id: 2, name: "c2" }, { id: 3, name: "c3" }];
            },
            templateUrl: appSettings.templatesFolderPath + 'category-select.cshtml'
        };
    }
})();