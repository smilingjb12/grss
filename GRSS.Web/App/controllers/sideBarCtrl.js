(function() {
    "use strict";

    angular
        .module('app')
        .controller('SideBarCtrl', ['$scope', '$location', SideBarCtrl]);

    function SideBarCtrl($scope, $location) {
        $scope.items = [
            { name: 'DASHBOARD', url: '.dashboard' },
            { name: 'SURVEYS', url: '.surveys' }
        ];

        $scope.itemIsActive = function (url) {
            var location = $location.url();
            var urlSegment = location.substr(location.lastIndexOf('/') + 1);
            if (url.substr(1) == urlSegment) return 'active';
            return '';
        };
    }
})();