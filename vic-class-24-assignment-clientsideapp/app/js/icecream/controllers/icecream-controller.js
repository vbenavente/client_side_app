module.exports = function(app) {
  app.controller('IceCreamController', IceCreamController);
};

function IceCreamController($http) {
  this.$http = $http;
  this.icecream = [];
}

IceCreamController.prototype.getIceCream = function() {
  this.$http.get('http:/localhost:3000/icecream')
  .then((res) => {
    this.icecream = res.data;
  }, (err) => {
    console.log(err);
  });
};

IceCreamController.prototype.addIceCream = function() {
  this.$http.post('http//localhost:3000/', this.newIceCream)
  .then((res) => {
    this.icecream.push(res.data);
    this.newIceCream = null;
  }, (err) => {
    console.log(err);
  });
};

IceCreamController.prototype.updateIceCream = function(icecream, updatedIceCream) {
  let arrayIceCream = this.icecream[this.icecream.indexOf(icecream)];
  arrayIceCream.body = updatedIceCream;
};

IceCreamController.prototype.deleteIceCream = function(icecream) {
  this.$http.delete('http//localhost:3000/' + icecream._id)
  .then(() => {
    let index = this.icecream.indexOf(icecream);
    this.icecream.splice(index, 1);
  }, (err) => {
    console.log(err);
  });
};
