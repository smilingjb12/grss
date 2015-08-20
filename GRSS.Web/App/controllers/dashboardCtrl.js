(function() {
    "use strict";

    angular
        .module('app')
        .controller('DashboardCtrl', ['$scope', 'User', DashboardCtrl]);

    function DashboardCtrl($scope, User) {
        $scope.username = User.getUserInfo().username;
        $scope.items = [
            { name: 'Main Survey Tesco 2015', date: '20 Nov 2015', status: 'New' },
            { name: 'Main Survey Tesco 2015', date: '20 Nov 2015', status: 'New' },
            { name: 'Main Survey Tesco 2015', date: '20 Nov 2015', status: 'New' },
            { name: 'Main Survey Tesco 2015', date: '20 Nov 2015', status: 'New' },
            { name: 'Main Survey Tesco 2015', date: '20 Nov 2015', status: 'New' }
        ];
    }
})();