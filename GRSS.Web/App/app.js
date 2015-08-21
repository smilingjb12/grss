(function() {
    "use strict";

    var app = angular.module('app', [
        'ui.router',
        'ui.bootstrap',
        'ngResource',
        'ngCookies',
        'angular-loading-bar',
        'ngAnimate',
        'toastr'
    ]);

    app.config(function($provide) {
        $provide.decorator('$exceptionHandler', ['$delegate', '$injector', ExceptionHandler]);
        function ExceptionHandler($delegate, $injector) {
            return function (exception, cause) {
                var toastr = $injector.get('toastr');
                toastr.error('Application error occured: ' + exception);
                $delegate(exception, cause);
            }
        }
    });

})();