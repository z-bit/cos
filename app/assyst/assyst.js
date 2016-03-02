angular.module('cos.assyst', [
        'ngMaterial'
    ])
    .component('assyst', {
        templateUrl: 'app/assyst/assyst.html',
        controller: function AssystController() {
            this.test = 'ASSYST component';
        }
    })
    /*
    .controller('AssystController', function(){
        var epc = this;
        epc.test = "Assyst Wartungsblatt";
    })
    .directive('assyst', function(){
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/assyst/assyst.html'
        }

    })
    */
;