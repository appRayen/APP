angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

 .state('page', {
    url: '/Login',
    templateUrl: 'templates/Login.html',
    controller: 'LoginCtrl'
  })

 .state('Agenda', {
    url: '/Agenda',
    templateUrl: 'templates/Agenda.html'
   
  })
   .state('Cancelar', {
    url: '/Cancelar',
    templateUrl: 'templates/Cancelacion.html'
   
  })
   .state('resumen', {
    url: '/resumen',
    templateUrl: 'templates/Resumen.html'
   
  })
$urlRouterProvider.otherwise('/Login')

  

});