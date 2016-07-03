'use strict';

/**
 * @name topshotsApp.dribble
 * @description
 * # Configurações para requisição na API Dribbble
 *
 */
angular.module('topshotsApp.dribbble', [])
  .factory('dribbbleConf', function ($http, $q, $route) {
    var dribbble = {};
    var currentPage;

    // API Dribbble infos
    var api = {
      url: 'https://api.dribbble.com/v1/',
      token: '8b7af39f45812f79d484eb8ef49464e5029a25594e082adf037c717b2be87cf0',
    };
    dribbble.links = {};


    var setCurrentPage = function(){
      currentPage = $route.current.params.id > 0 ? parseInt($route.current.params.id) : 1;

      dribbble.links = {
        back: currentPage > 1 ? currentPage-1 : false,
        next: currentPage > 1 ? currentPage+1 : 2,
      }
    }

    // Get Shots with pages
    dribbble.getShots = function(currentPage){
      var deferred = $q.defer();
      // Get shots return
      $http.get(api.url+'shots/?page='+currentPage+'&per_page=20&access_token='+api.token)
        .success(function(shots){
          setCurrentPage();
          return deferred.resolve(shots);
        })
        .error(function(err){
          return deferred.reject(err);
      });
      // return promise
      return deferred.promise;
    };



    return dribbble;

  });
