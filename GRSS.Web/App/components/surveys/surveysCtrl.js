(function() {
    "use strict";

    angular
        .module('app')
        .controller('SurveysCtrl', ['user', SurveysCtrl]);

    function SurveysCtrl(user) {
        var vm = this;
        vm.username = user.getUserInfo().username;
    }
})();