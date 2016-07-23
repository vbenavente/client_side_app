'use strict';

module.exports = function(app) {
  app.controller('IceCreamController', IceCreamController);
};

function IceCreamController($http, AuthService, ErrorService) {
  this.error = ErrorService;
  this.icecream = [];
  const url = 'http://localhost:3000/icecream/';

  this.getIceCream = function() {
    $http.get(url)
    .then((res) => {
      this.icecream = res.data;
    }, (err) => {
      console.log(err);
    });
  }.bind(this);

  this.addIceCream = function(newIceCream) {
    $http.post(url, newIceCream)
    .then((res) => {
      this.icecream.push(res.data);
      this.newIceCream = null;
    }, (err) => {
      console.log(err);
    });
  }.bind(this);

  this.updateIceCream = function(icecream, updatedIceCream) {
    icecream.flavor = updatedIceCream.flavor;
    icecream.scoops = updatedIceCream.scoops;
    icecream.vessel = updatedIceCream.vessel;
    $http.put(url + icecream._id, icecream)
    .then(() => {
      this.icecream = this.icecream.map(n => {
        return n._id === icecream._id ? icecream : n;
      });
    }, (err) => {
      console.log(err);
    });
  }.bind(this);

  this.deleteIceCream = function(icecream) {
    $http.delete(url + icecream._id)
    .then(() => {
      let index = this.icecream.indexOf(icecream);
      this.icecream.splice(index, 1);
    }, (err) => {
      console.log(err);
    });
  }.bind(this);
}
