(function(window) {
    "use strict";

    var STATES = {
        HOME: 'home',
        LOGIN: 'login',
        REGISTER: 'register',
        COMPANY: 'company',
        COMPANY_DASHBOARD: 'company.dashboard',
        COMPANY_SURVEYS: 'company.surveys',
        COMPANY_SUPPLIER_EDIT: 'company.editsupplier',
        NOT_FOUND: '404'
    };

    var serverRoot = window.location.protocol + '//' + window.location.host + '/';

    angular
        .module('app')
        .constant('appStates', STATES)
        .constant('appSettings', {
            serverPath: serverRoot,
            breezeEntitiesUrl: serverRoot + 'breeze/entities',
            registerPath: 'api/Account/Register',
            componentsFolderPath: '/App/components/',
            sharedFolderPath: 'App/shared/',
            templatesFolderPath: 'App/shared/templates/',
            defaultCompanyImageUrl: 'http://content.screencast.com/users/Vitaly_Shakh/folders/Jing/media/9d9f46ec-4b57-42ff-9e82-d5a96eb56d32/2015-08-20_1831.png'
        });
})(window);