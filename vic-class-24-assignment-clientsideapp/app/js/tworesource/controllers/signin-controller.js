'use strict';

module.exports = function(app) {
  app.controller('SigninController', function($location, AuthService) {
    this.goIceCream = function() {
      $location.url('/milkshake');
    };
    this.goMilkShake = function() {
      $location.url('/icecream');
    };
    this.signUp = function(user) {
      AuthService.signUp(user);
    };
    this.signIn = function(user) {
      AuthService.signIn(user);
    };
  });
};
