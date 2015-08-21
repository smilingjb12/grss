(function() {
    "use strict";

    angular
        .module('app')
        .controller('NavBarCtrl', ['user', '$state', 'appStates', NavBarCtrl]);

    function NavBarCtrl(user, $state, appStates) {
        var vm = this;
        vm.user = user.getUserInfo();

        vm.logout = function () {
            vm.user = user.logout();
            $state.go(appStates.HOME);
        };
    }
})();