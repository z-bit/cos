angular.module('cos', [
        'cos.abgemeldet',
        'cos.epc',
        'cos.assyst',
        'cos.asra',
        'cos.pakete',
        'cos.info',
        'cos.tobro',
        'ngMaterial',
        'ui.router'
    ])
    .controller('CosController', function () {
        this.test = "Angular works!";
        this.pic = "assets/pictures/AngularJsByGoogle.png";


    })

;