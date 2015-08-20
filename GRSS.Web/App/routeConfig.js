(function() {
    "use strict";

    var app = angular.module('app');

    app.config(['$stateProvider', '$urlRouterProvider', 'appStates', 'appSettings', AppRouter]);
    function AppRouter($stateProvider, $urlRouterProvider, appStates, appSettings) {
        var viewsFolder = appSettings.viewsFolderPath;
        $stateProvider
            .state(appStates.HOME, {
                url: '/',
                templateUrl: viewsFolder + 'home.cshtml'
            })
            .state(appStates.LOGIN, {
                url: '/login',
                templateUrl: viewsFolder + 'login.cshtml',
                controller: 'LoginCtrl'
            })
            .state(appStates.REGISTER, {
                url: '/register',
                templateUrl: viewsFolder + 'register.cshtml',
                controller: 'RegisterCtrl'
            })
            .state(appStates.COMPANY, {
                url: '/company',
                templateUrl: viewsFolder + 'company.cshtml',
                controller: 'CompanyCtrl'
            })
            .state(appStates.COMPANY_DASHBOARD, {
                url: '/dashboard',
                templateUrl: viewsFolder + 'company.dashboard.cshtml',
                controller: 'DashboardCtrl',
                data: {
                    authenticate: true
                }
            })
            .state(appStates.COMPANY_SURVEYS, {
                url: '/surveys',
                templateUrl: viewsFolder + 'company.surveys.cshtml',
                controller: 'SurveysCtrl',
                data: {
                    authenticate: true
                }
            })
            .state(appStates.NOT_FOUND, {
                templateUrl: viewsFolder + '404.cshtml'
            });

        // start route
        $urlRouterProvider.when('', '/');

        // For any unmatched url, send to 404
        $urlRouterProvider.otherwise(function($injector, $location) {
            var state = $injector.get('$state');
            state.go(appStates.NOT_FOUND);
            return $location.path();
        });
    }

    app.run(['$rootScope', 'User', '$state', 'appStates', AppInitializer]);
    function AppInitializer($rootScope, User, $state, appStates) {
        $rootScope.STATES = appStates;

        $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
            // redirect to login page if not authenticated
            if (toState.data && toState.data.authenticate && !User.isAuthenticated()) {
                e.preventDefault();
                $state.go(appStates.LOGIN); 
            }
        });
    }
})();