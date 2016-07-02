'use strict';

/**
 * @ngdoc service
 * @name topshotsApp.dribbbleConf
 * @description
 * # dribbbleConf
 * Factory in the topshotsApp.
 */
angular.module('topshotsApp.dribble', [])
  .factory('dribbbleConf', function ($http, $q) {
    var deferred = $q.defer();

    // Obj Confing infos api
    var api = {
      url: 'https://api.dribbble.com/v1/',
      token: '8b7af39f45812f79d484eb8ef49464e5029a25594e082adf037c717b2be87cf0'
    };

    // Get shots return
    $http.get(api.url+'shots/?access_token='+api.token)
      .success(function(shots){
        return deferred.resolve(shots);
      })
      .error(function(err){
        return deferred.reject(err);
      });

    return deferred.promise;

  });
