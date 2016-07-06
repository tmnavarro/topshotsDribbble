'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('topshotsappApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  /*it('should attach a list of awesomeThings to the scope', function () {
    expect(MainCtrl.scope.links).toBe({
      url: 'https://api.dribbble.com/v1/',
      token: '8b7af39f45812f79d484eb8ef49464e5029a25594e082adf037c717b2be87cf0',
    });*/
  });
});
