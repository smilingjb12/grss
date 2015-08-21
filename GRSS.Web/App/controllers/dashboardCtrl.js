(function() {
    "use strict";

    angular
        .module('app')
        .controller('DashboardCtrl', ['user', DashboardCtrl]);

    function DashboardCtrl(user) {
        var vm = this;
        vm.username = user.getUserInfo().username;
        vm.items = [
            { name: 'Main Survey Tesco 2015', date: '20 Nov 2015', status: 'New' },
            { name: 'Main Survey Tesco 2015', date: '20 Nov 2015', status: 'New' },
            { name: 'Main Survey Tesco 2015', date: '20 Nov 2015', status: 'New' },
            { name: 'Main Survey Tesco 2015', date: '20 Nov 2015', status: 'New' },
            { name: 'Main Survey Tesco 2015', date: '20 Nov 2015', status: 'New' }
        ];
    }
})();