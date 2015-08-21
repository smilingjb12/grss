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
                controller: 'LoginCtrl',
                controllerAs: 'vm'
            })
            .state(appStates.REGISTER, {
                url: '/register',
                templateUrl: viewsFolder + 'register.cshtml',
                controller: 'RegisterCtrl',
                controllerAs: 'vm'
            })
            .state(appStates.COMPANY, {
                url: '/company',
                templateUrl: viewsFolder + 'company.cshtml',
                controller: 'CompanyCtrl',
                controllerAs: 'vm'
            })
            .state(appStates.COMPANY_DASHBOARD, {
                url: '/dashboard',
                templateUrl: viewsFolder + 'company.dashboard.cshtml',
                controller: 'DashboardCtrl',
                controllerAs: 'vm',
                data: {
                    authenticate: true
                }
            })
            .state(appStates.COMPANY_SURVEYS, {
                url: '/surveys',
                templateUrl: viewsFolder + 'company.surveys.cshtml',
                controller: 'SurveysCtrl',
                controllerAs: 'vm',
                data: {
                    authenticate: true
                }
            })
            .state(appStates.COMPANY_SUPPLIER_EDIT, {
                url: '/editsupplier',
                templateUrl: viewsFolder + 'company.supplier.edit.cshtml',
                controller: 'SupplierEditCtrl',
                controllerAs: 'vm',
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

    app.run(['$rootScope', 'user', '$state', 'appStates', AppInitializer]);
    function AppInitializer($rootScope, user, $state, appStates) {
        $rootScope.STATES = appStates;

        $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
            // redirect to login page if not authenticated
            if (toState.data && toState.data.authenticate && !user.isAuthenticated()) {
                e.preventDefault();
                $state.go(appStates.LOGIN); 
            }
        });
    }
})();