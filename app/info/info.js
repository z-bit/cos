angular.module('cos.info', [
        'ngMaterial'
    ])
    .component('info', {
        templateUrl: 'app/info/info.html',
        controller: function InfoController() {
            this.test = 'INFO component';
        }
    })
;