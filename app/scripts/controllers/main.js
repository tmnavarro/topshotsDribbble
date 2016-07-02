'use strict';

/**
 * @ngdoc function
 * @name topshotsappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the topshotsappApp
 */
angular.module('topshotsApp')
  .controller('MainCtrl', function ($http, shots) {
    console.log(shots);
  });
