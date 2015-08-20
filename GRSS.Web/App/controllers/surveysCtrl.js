(function() {
    "use strict";

    angular
        .module('app')
        .controller('SurveysCtrl', ['$scope', 'User', SurveysCtrl]);

    function SurveysCtrl($scope, User) {
        $scope.username = User.getUserInfo().username;
    }
})();