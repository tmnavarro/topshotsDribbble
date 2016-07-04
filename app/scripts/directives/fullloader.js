'use strict';

/**
 * @ngdoc directive
 * @name topshotsApp.directive:fullLoader
 * @description
 * # fullLoader
 */
angular.module('topshotsApp')
  .directive('fullLoader', function ($rootScope) {
    return {
      templateUrl: 'views/loaderdirective.html',
      restrict: 'E',
      link: function postLink(scope, element) {
        scope.isRouteLoading = false;

        $rootScope.$on('$routeChangeStart', function(){
          scope.isRouteLoading = true;
        });

        $rootScope.$on('$routeChangeSuccess', function(){
          scope.isRouteLoading = false;
        });
      },
    };
  });
