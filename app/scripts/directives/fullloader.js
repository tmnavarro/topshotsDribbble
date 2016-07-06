'use strict';

/**
 * @name directive:fullLoader
 * @module topshotsApp
 * @description
 * # Efeito de carregamento quando alterada a rota atual
 */
angular.module('topshotsApp')
  .directive('fullLoader', function ($rootScope) {
    return {
      templateUrl: 'views/loaderdirective.html',
      restrict: 'E',
      link: function postLink(scope) {
        scope.isRouteLoading = false;

        // Ativa visualização loader view na alteração da routa
        $rootScope.$on('$routeChangeStart', function(){
          scope.isRouteLoading = true;
        });

        // Desativa loader no fim do carregamento da rota
        $rootScope.$on('$routeChangeSuccess', function(){
          scope.isRouteLoading = false;
        });
      },
    };
  });
