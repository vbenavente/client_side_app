'use strict';

const angular = require('angular');
const ngRoute = require('angular-route');
const IceCreameryApp = angular.module('IceCreameryApp', [ngRoute]);

require('./icecream/icecream')(IceCreameryApp);
require('./milkshake/milkshake')(IceCreameryApp);
require('./tworesource/tworesource')(IceCreameryApp);

IceCreameryApp.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: './templates/partials/icecream.html',
    controller: 'IceCreamController',
    controllerAs: 'icctrl'
  })
  .when('/milkshake', {
    templateUrl: './templates/partials/milkshake.html',
    controller: 'MilkShakeController',
    controllerAs: 'msctrl'
  })
  .when('/signin', {
    templateUrl: './templates/partials/signin.html',
    controller: 'SigninController',
    controllerAs: 'signinctrl'
  })
  .when('/signup', {
    templateUrl: './templates/partials/signup.html',
    controller: 'SigninController',
    controllerAs: 'signinctrl'
  });
});
