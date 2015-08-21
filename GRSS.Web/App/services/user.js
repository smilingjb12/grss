(function() {
    "use strict";

    angular
        .module('app')
        .factory('user', ['userAccount', 'appStates', '$q', '$cookies', '$http', user]);

    function user(userAccount, appStates, $q, $cookies, $http) {
        var AUTH_STORAGE_KEY = 'user.auth_data';
        var user = {
            isAuthenticated: false,
            username: '',
            bearerToken: '',
            tokenExpirationDate: null
        };

        return {
            getUserInfo: getUserInfo,
            login: login,
            logout: logout,
            register: register,
            isAuthenticated: isAuthenticated
        };

        function authenticationExpired(expirationDate) {
            var now = new Date();
            expirationDate = new Date(expirationDate);
            if (expirationDate - now > 0) {
                return false;
            }
            return true;
        };

        function removeAuthData() {
            $cookies.remove(AUTH_STORAGE_KEY);
        };

        function setHttpAuthHeader() {
            $http.defaults.headers.common.Authorization = 'Bearer ' + user.bearerToken;
        };

        function saveAuthData() {
            removeAuthData();
            var json = angular.toJson(user);
            $cookies.put(AUTH_STORAGE_KEY, json);
        };

        function isAuthenticated() {
            return getUserInfo().isAuthenticated;
        };

        function getUserInfo() {
            var savedAuthData = $cookies.get(AUTH_STORAGE_KEY);
            if (savedAuthData) {
                var parsedData = angular.fromJson(savedAuthData);
                if (authenticationExpired(parsedData.tokenExpirationDate)) {
                    return user;
                }
                user = parsedData;
                setHttpAuthHeader();
            }
            return user;
        }

        function login(loginData) {
            user.username = loginData.userName;
            loginData.grant_type = 'password';
            var loginAction = $q.defer();
            userAccount.login.loginUser(loginData, function(data) {
                user.isAuthenticated = true;
                user.tokenExpirationDate = new Date(data['.expires']);
                user.bearerToken = data.access_token;
                setHttpAuthHeader();
                saveAuthData();
                loginAction.resolve(data);
            }, function(error) {
                user.isAuthenticated = false;
                loginAction.reject(error);
            });
            return loginAction.promise;
        }

        function logout() {
            user.isAuthenticated = false;
            user.username = '';
            user.bearerToken = '';
            removeAuthData();
            return user;
        }

        function register(registerData) {
            var registerAction = $q.defer();
            userAccount.registration.registerUser(registerData, function (data) {
                registerAction.resolve(data);
            }, function(error) {
                user.isAuthenticated = false;
                registerAction.reject(error);
            });
            return registerAction.promise;
        }
    }
})();