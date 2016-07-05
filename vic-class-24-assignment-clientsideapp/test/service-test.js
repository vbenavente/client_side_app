'use strict';

const angular = require('angular');
require('angular-mocks');
require('../app/js/client.js');

describe('service unit test', () => {
  let errHandServ;
  beforeEach(() => {
    angular.mock.module('IceCreameryApp');
    angular.mock.inject(function(ErrorService) {
      errHandServ = ErrorService;
    });
  });

  it('should have getErrors as function', () => {
    expect(typeof errHandServ.getErrors).toBe('function');
  });
});
