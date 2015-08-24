(function() {
    "use strict";

    angular
        .module('app')
        .controller('DashboardCtrl', ['user', 'entityManager', 'toastr', DashboardCtrl]);

    function DashboardCtrl(user, entityManager, toastr) {
        var vm = this;
        var manager = entityManager.create();
        var query = breeze.EntityQuery.from('Users').take(10);
        vm.username = user.getUserInfo().username;
        vm.items = [
            { name: 'Main Survey Tesco 2015', date: '20 Nov 2015', status: 'New' },
            { name: 'Main Survey Tesco 2015', date: '20 Nov 2015', status: 'New' },
            { name: 'Main Survey Tesco 2015', date: '20 Nov 2015', status: 'New' },
            { name: 'Main Survey Tesco 2015', date: '20 Nov 2015', status: 'New' },
            { name: 'Main Survey Tesco 2015', date: '20 Nov 2015', status: 'New' }
        ];
        vm.users = [];

        manager.executeQuery(query)
            .then(function(data) {
                vm.users = data.results;
            })
            .catch(function(error) {
                toastr.error(Error);
            });
    }
})();