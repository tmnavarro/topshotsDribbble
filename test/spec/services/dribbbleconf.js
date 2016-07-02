'use strict';

describe('Service: dribbbleConf', function () {

  // load the service's module
  beforeEach(module('topshotsApp'));

  // instantiate service
  var dribbbleConf;
  beforeEach(inject(function (_dribbbleConf_) {
    dribbbleConf = _dribbbleConf_;
  }));

  it('should do something', function () {
    expect(!!dribbbleConf).toBe(true);
  });

});
