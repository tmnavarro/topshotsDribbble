'use strict';

/**
 * @name topshotsApp
 * @description
 * # Módulo incial da aplicação, configuração de rotas para aplicação
 *
 */
angular
  .module('topshotsApp', [
    'topshotsApp.dribbble',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider

      .when('/:id?', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        resolve: {
          shots: function(dribbbleConf, $route){
            return dribbbleConf.getShots($route.current.params.id);
          },
          dribbble: function(dribbbleConf){
            return dribbbleConf;
          }
        }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
  });
