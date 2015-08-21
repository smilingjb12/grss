(function() {
    "use strict";

    angular
        .module('app')
        .controller('SideBarCtrl', ['$location', SideBarCtrl]);

    function SideBarCtrl($location) {
        var vm = this;
        vm.items = [
            { name: 'DASHBOARD', url: '.dashboard' },
            { name: 'SURVEYS', url: '.surveys' },
            { name: 'REGISTER SUPPLIER', url: '.editsupplier' }
        ];

        vm.itemIsActive = function (url) {
            var location = $location.url();
            var urlSegment = location.substr(location.lastIndexOf('/') + 1);
            if (url.substr(1) == urlSegment) return 'active';
            return '';
        };
    }
})();