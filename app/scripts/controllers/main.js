'use strict';

/**
 * @name controller:MainCtrl
 * @module topshotsApp
 * @description
 * # Controller página principal
 */
angular.module('topshotsApp')
  .controller('MainCtrl', function (shots, dribbble) {
    var vm = this;
    vm.links = dribbble.links;
    vm.shots = shots;

    // Inicia currentShot com obj vázio
    vm.currentShot = {};

    // Função ativa vizualização modal com informações do currentShot
    vm.openModal = function(id){
      var currentShot = shots.filter(function(shot){
        return shot.id === parseInt(id) ? shot : false;
      });

      vm.currentShot = currentShot[0] || {};

      $('#infoModal').modal('show');
    };


  });
