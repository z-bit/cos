angular.module('cos', ['ngMaterial', 'ui.router'])

    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: "/",
                template: "<div><h1>Hi App!</h1></div>" //'./app_gulp.html',"
            })
    })

    .directive('app_gulp', function () {
        return {
            restrict: 'E',
            replace: true,
            template: "<div><h1>Hi App!</h1></div>" //'./app_gulp.html',

        }
    })
    .controller('AppController', function () {
        var app = this;
        app.test = 'Hallo';
    })
;