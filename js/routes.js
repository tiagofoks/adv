angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('page1', {
    url: '/page1',
    templateUrl: 'templates/page1.html',
    controller: 'page1Ctrl'
  })

  .state('cadastro', {
    url: '/page2',
    templateUrl: 'templates/cadastro.html',
    controller: 'cadastroCtrl'
  })

  .state('menu', {
    url: '/page3',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('cadastroCliente', {
    url: '/page4',
    templateUrl: 'templates/cadastroCliente.html',
    controller: 'cadastroClienteCtrl'
  })

  .state('clienteNegativado', {
    url: '/page5',
    templateUrl: 'templates/clienteNegativado.html',
    controller: 'clienteNegativadoCtrl'
  })

  .state('verificar', {
    url: '/page7',
    templateUrl: 'templates/verificar.html',
    controller: 'verificarCtrl'
  })

  .state('verificar2', {
    url: '/page9',
    templateUrl: 'templates/verificar2.html',
    controller: 'verificar2Ctrl'
  })

  .state('confirmaO', {
    url: '/page8',
    templateUrl: 'templates/confirmaO.html',
    controller: 'confirmaOCtrl'
  })

  .state('concluido', {
    url: '/page11',
    templateUrl: 'templates/concluido.html',
    controller: 'concluidoCtrl'
  })

  .state('consulta', {
    url: '/page10',
    templateUrl: 'templates/consulta.html',
    controller: 'consultaCtrl'
  })

  .state('cartoriosEmSOPaulo', {
    url: '/page12',
    templateUrl: 'templates/cartoriosEmSOPaulo.html',
    controller: 'cartoriosEmSOPauloCtrl'
  })

  .state('news', {
    url: '/page13',
    templateUrl: 'templates/news.html',
    controller: 'newsCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});