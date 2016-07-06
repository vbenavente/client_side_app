'use strict';

const angular = require('angular');
require('angular-mocks');
require('../app/js/client');

const icecreamAddOrder = require('../app/templates/icecream/icecream-addorder-directive.html');
// const icecreamOrderHistory = require('../app/templates/icecream/icecream-orderhistory-directive.html');


describe('directive tests', () => {
  let $httpBackend;
  let $scope;
  let $compile;

  beforeEach(() => {
    angular.mock.module('IceCreameryApp');
    angular.mock.inject(function(_$httpBackend_, $rootScope, _$compile_) {
      $scope = $rootScope.$new();
      $compile = _$compile_;
      $httpBackend = _$httpBackend_;
    });
  });

  it('should add an icecream order', () => {
    $httpBackend.expectGET('./templates/icecream/icecream-addorder-directive.html')
    .respond(200, icecreamAddOrder);

    let element = angular.element('<section ng-controller="IceCreamController as icctrl"><icecream-add-order></icecream-add-order></section>');
    let link = $compile(element);
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let input = directive.find('input');
    let inputattr = input.attr('ng-model');
    let input2 = angular.element(input[1]);
    let inputattr2 = input2.attr('ng-model');

    expect(inputattr).toBe('newIceCream.flavor');
    expect(inputattr2).toBe('newIceCream.scoops');
    // expect(input[1]).toBe('newIceCream.scoops');
    // expect(inputattr).toBe('newIceCream.vessel');
    // expect(inputattr).toBe('newIceCream');
  });
});
