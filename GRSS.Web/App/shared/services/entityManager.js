(function() {
    "use strict";

    angular
        .module('app')
        .factory('entityManager', ['breeze', 'appSettings', entityManager]);

    function entityManager(breeze, appSettings) {
        breeze.NamingConvention.camelCase.setAsDefault();
        return {
            create: createNewManager
        };

        function createNewManager() {
            return new breeze.EntityManager(appSettings.breezeEntitiesUrl);
        }
    }
})();