(function() {
    "use strict";

    angular
        .module('app')
        .service('User', ['userAccount', 'appStates', '$q', '$cookies', '$http', User]);

    function User(userAccount, appStates, $q, $cookies, $http) {
        var AUTH_STORAGE_KEY = 'user.auth_data';
        var self = this;

        var user = {
            isAuthenticated: false,
            username: '',
            bearerToken: '',
            tokenExpirationDate: null
        };

        var authenticationExpired = function(expirationDate) {
            var now = new Date();
            expirationDate = new Date(expirationDate);
            if (expirationDate - now > 0) {
                return false;
            }
            return true;
        };

        var removeAuthData = function() {
            $cookies.remove(AUTH_STORAGE_KEY);
        };

        var setHttpAuthHeader = function() {
            $http.defaults.headers.common.Authorization = 'Bearer ' + user.bearerToken;
        };

        var saveAuthData = function () {
            removeAuthData();
            var json = angular.toJson(user);
            $cookies.put(AUTH_STORAGE_KEY, json);
        };

        this.isAuthenticated = function () {
            return self.getUserInfo().isAuthenticated;
        };

        this.getUserInfo = function() {
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

        this.login = function (loginData) {
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

        this.logout = function() {
            user.isAuthenticated = false;
            user.username = '';
            user.bearerToken = '';
            removeAuthData();
            return user;
        }

        this.register = function (registerData) {
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