(function() {
    "use strict";

    angular
        .module('app')
        .controller('RegisterCtrl', ['$scope', 'User', '$state', 'appStates', RegisterCtrl]);

    function RegisterCtrl($scope, User, $state, appStates) {
        $scope.newUser = {};

        if (User.isAuthenticated()) {
            $state.go(appStates.COMPANY_DASHBOARD);
        }

        $scope.register = function () {
            User.register($scope.newUser).then(function (data) {
                alert('successfully registered!');
                $state.go(appStates.LOGIN);
            }, function (error) {
                var message = generateErrorMessage(error);
                alert('could not register: ' + message);
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