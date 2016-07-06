'use strict';

describe('Directive: infoModalDirective', function () {

  // load the directive's module
  beforeEach(module('topshotsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  /*it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<info-modal></info-modal>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the infoModalDirective directive');
  }));*/
});
