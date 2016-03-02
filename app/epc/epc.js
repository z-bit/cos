angular.module('cos.epc', [
        'ngMaterial'
    ])
    .component('epc', {
        templateUrl: 'app/epc/epc.html',
        controller: function EpcController() {
            this.test = "EPC component";
        }
    })

    /*
    .controller('EpcController', function(){
        var epc = this;
        epc.test = "EPC-Net";
    })
    .directive('epc', function(){
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/epc/epc.html'
        }

    })
    */
;