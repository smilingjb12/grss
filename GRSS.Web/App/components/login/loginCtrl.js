(function() {
    "use strict";

    angular
        .module('app')
        .controller('LoginCtrl', ['appStates', '$state', 'user', LoginCtrl]);

    function LoginCtrl(appStates, $state, user) {
        var vm = this;
        vm.loginData = {};

        if (user.isAuthenticated()) {
            $state.go(appStates.COMPANY_DASHBOARD);
        }

        vm.login = function () {
            user.login(vm.loginData).then(function(data) {
                $state.go(appStates.COMPANY_DASHBOARD);
            }, function(error) {
                var message = generateErrorMessage(error);
                alert('could not log in: ' + message);
            });
        }

        function generateErrorMessage(response) {
            var message = response.statusText + '\n';
            if (response.data.exceptionMessage) {
                message += response.data.exceptionMessage;
            }
            if (response.data.error) {
                message += response.data.error_description;
            }
            return message;
        }
    }
})();