angular.module('cos.tobro', [
        'ngMaterial'
    ])
    .component('tobro', {
        templateUrl: 'app/tobro/tobro.html',
        controller: function TobroController() {
            this.test = 'TOBRO component';
        }
    })
;