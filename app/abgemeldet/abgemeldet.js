angular.module('cos.abgemeldet', [
        'ngMaterial',
        'ui.router'
    ])
    .component('abgemeldet', {
        templateUrl:'app/abgemeldet/abgemeldet.html',
        controllerAs: 'abgem',
        controller: function AbgemeldetController() {
            this.test = 'Bitte anmelden! (from component)';
        }
    })

    /*
    .config(function ($stateProvider) {
        $stateProvider.state('abgemeldet', {
            url:'/abgemeldet',
            templateUrl:'app/abgemeldet/abgemeldet.html'
        });
    })
    .controller('AbgemeldetController', function(){
        var abgem = this;
        abgem.test = "Bitte anmelden!";
    })
    .directive('abgemeldet', function(){
        return {
            restrict: 'E',
            replace: true,
            //template: '<h1>Das ist ein Test</h1>'
            templateUrl: 'app/abgemeldet/abgemeldet.html'
        }

    })
    */
;