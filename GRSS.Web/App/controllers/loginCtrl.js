(function() {
    "use strict";

    angular
        .module('app')
        .controller('LoginCtrl', ['$scope', 'appStates', '$state', 'User', LoginCtrl]);

    function LoginCtrl($scope, appStates, $state, User) {
        $scope.loginData = {};

        if (User.isAuthenticated()) {
            $state.go(appStates.COMPANY_DASHBOARD);
        }

        $scope.login = function () {
            User.login($scope.loginData).then(function(data) {
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