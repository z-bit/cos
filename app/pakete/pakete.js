angular.module('cos.pakete', [
        'ngMaterial'
    ])
    .component('pakete', {
        templateUrl: 'app/pakete/pakete.html',
        controllerAs: 'pak',
        controller: function PaketeController() {
            this.test= 'Pakete component';
        }
    })
    /*
    .controller('PaketeController', function(){
        var pak = this;
        pak.test = "Pakete";
    })
    .directive('pakete', function(){
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/pakete/pakete.html'
        }

    })
    */
;