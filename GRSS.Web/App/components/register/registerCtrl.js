(function() {
    "use strict";

    angular
        .module('app')
        .controller('RegisterCtrl', ['user', '$state', 'appStates', 'toastr', RegisterCtrl]);

    function RegisterCtrl(user, $state, appStates, toastr) {
        var vm = this;
        vm.newUser = {};

        if (user.isAuthenticated()) {
            $state.go(appStates.COMPANY_DASHBOARD);
        }

        vm.register = function () {
            user.register(vm.newUser).then(function (data) {
                toastr.success('Successfully registered');
                $state.go(appStates.LOGIN);
            }, function (error) {
                var message = generateErrorMessage(error);
                toastr.error('Could not register: ' + message);
            });
        };

        function generateErrorMessage(response) {
            var message = response.statusText + '\n';
            if (response.data.exceptionMessage) {
                message += response.data.exceptionMessage;
            }
            if (response.data.modelState) {
                for (var key in response.data.modelState) {
                    message += response.data.modelState[key] + '\n';
                }
            }
            return message;
        }
    }
})();