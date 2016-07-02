'use strict';

/**
 * @ngdoc function
 * @name topshotsappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the topshotsappApp
 */
angular.module('topshotsApp')
  .controller('MainCtrl', function ($q, $rootScope, shots, dribbble) {
    var vm = this;

    vm.links = dribbble.links;
    console.log(vm.links);
    vm.shots = shots;

  });
