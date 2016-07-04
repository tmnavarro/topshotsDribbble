'use strict';

/**
 * @name directive:infoModal
 * @module topshotsApp
 * @description
 * # Modal com informações de currentShot
 */
angular.module('topshotsApp')
  .directive('infoModal', function () {
    return {
      templateUrl: 'views/infoModalDirective.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
