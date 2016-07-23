'use strict';

module.exports = function(app) {
  app.controller('SigninController', function($location, AuthService) {
    this.goIceCream = function() {
      $location.url('/');
    };
    this.goMilkShake = function() {
      $location.url('/milkshake');
    };
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
      .then(null, (err) => {
        console.log(err);
        $location.path('/signup');
      });
    };

    this.signOut = function() {
      AuthService.signOut()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    };
  });
};
