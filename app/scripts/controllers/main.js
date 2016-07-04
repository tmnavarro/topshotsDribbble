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
    console.log(shots);
    vm.shots = shots;

    vm.currentShot = {};

    vm.openModal = function(id){
      var currentShot = shots.filter(function(shot){
        return shot.id == id ? shot : false;
      });

      vm.currentShot = currentShot[0] || {};

      $('#infoModal').modal('show');
    }


      // Evento show info shots
      $(document).on('click', 'article', function(){
        $('.shot-description').removeClass('show-animate');

        $(this).find('.shot-description').addClass('show-animate');


      });



  });
