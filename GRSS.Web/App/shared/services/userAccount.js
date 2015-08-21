(function() {
    "use strict";

    angular
        .module('app')
        .factory('userAccount', ['$resource', 'appSettings', userAccount]);

    function userAccount($resource, appSettings) {
        return {
            registration: registrationResource(),
            login: loginResource()
        };

        function registrationResource() {
            return $resource(appSettings.serverPath + appSettings.registerPath, null, {
                registerUser: { method: 'POST' }
            });
        }

        function loginResource() {
            return $resource(appSettings.serverPath + 'Token', null, {
                loginUser: {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    transformRequest: function(data, headersGetter) {
                        var str = [];
                        for (var d in data) {
                            var key = encodeURIComponent(d);
                            var value = encodeURIComponent(data[d]);
                            str.push(key + '=' + value);
                        }
                        return str.join('&');
                    }
                }
            });
        }
    }
})();