(function () {
    "use strict";

    angular
        .module('app')
        .controller('HomeCtrl', ['$state', 'appStates', HomeCtrl]);

    function HomeCtrl($state, appStates) {
        var vm = this;
        vm.promoText = 'If you would like to work with us in your sector, please ' +
                       'complete our contact form and we will be delighted to explain' +
                       'more about our services and our Partnerships';
    }
})();