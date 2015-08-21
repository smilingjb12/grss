(function () {
    "use strict";

    angular.module('app')
        .directive('categorySelect', ['appSettings', CategorySelect]);

    function CategorySelect(appSettings) {
        return {
            restrict: 'E',
            scope: {
                selectedCategory: '=',
                'remove': '&onRemove'
            },
            controller: function ($scope) {
                $scope.verticalMarkets = [{ Id: 1, Name: "vm1" }, { Id: 2, Name: "vm2" }, { Id: 3, Name: "vm3" }];
                $scope.businessUnits = [{ Id: 1, Name: "bu1" }, { Id: 2, Name: "bu2" }, { Id: 3, Name: "bu3" }];
                $scope.categories = [{ Id: 1, Name: "c1" }, { Id: 2, Name: "c2" }, { Id: 3, Name: "c3" }];
            },
            templateUrl: appSettings.templatesFolderPath + 'category-select.cshtml'
        };
    }
})();