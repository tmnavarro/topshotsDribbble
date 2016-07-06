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
      templateUrl: 'views/infomodalDirective.html',
      restrict: 'E'
    };
  });
