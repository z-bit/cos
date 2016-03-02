angular.module('cos.asra', [
        'ngMaterial'
    ])
    .component('asra', {
        templateUrl: 'app/asra/asra.html',
        controller: function AsraController() {
            this.test = 'ASRA component';
        }
    })
    /*
    .controller('AsraController', function(){
        var asra = this;
        asra.test = "ASRA-Net";
    })
    .directive('asra', function(){
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/asra/asra.html'
        }

    })
    */
;