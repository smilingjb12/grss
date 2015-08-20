(function(window) {
    "use strict";

    var STATES = {
        HOME: 'home',
        LOGIN: 'login',
        REGISTER: 'register',
        COMPANY: 'company',
        COMPANY_DASHBOARD: 'company.dashboard',
        COMPANY_SURVEYS: 'company.surveys',
        NOT_FOUND: '404'
    };

    angular
        .module('app')
        .constant('appStates', STATES)
        .constant('appSettings', {
            serverPath: window.serverConstants.ServerPath,
            registerPath: 'api/Account/Register',
            viewsFolderPath: '/App/views/'
        });
})(window);