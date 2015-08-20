(function() {
    "use strict";

    angular
        .module('app')
        .controller('NavBarCtrl', ['$scope', 'User', '$state', 'appStates', NavBarCtrl]);

    function NavBarCtrl($scope, User, $state, appStates) {
        $scope.user = User.getUserInfo();

        $scope.logout = function () {
            $scope.user = User.logout();
            $state.go(appStates.HOME);
        };
    }
})();