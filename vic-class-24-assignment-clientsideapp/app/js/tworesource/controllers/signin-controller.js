'use strict';

module.exports = function(app) {
  app.controller('SigninController', function($location, AuthService) {
    this.goIceCream = function() {
      $location.url('/');
    };
    this.goMilkShake = function() {
      $location.url('/milkshake');
    };
    this.getToken = AuthService.getToken;

    this.signUp = function(user) {
      AuthService.signUp(user)
      .then((res) => {
        console.log(res);
        $location.path('/');
      });
    };
    this.signIn = function(user) {
      AuthService.signIn(user)
      .then((res) => {
        console.log(res);
        $location.path('/signin');
      })
      .then((err) => {
        console.log(err);
        $location.path('/signup');
      });
    };

    this.signOut = AuthService.signOut;
  });
};
