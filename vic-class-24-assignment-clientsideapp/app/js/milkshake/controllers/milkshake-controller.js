module.exports = function(app) {
  app.controller('MilkShakeController', MilkShakeController);
};

function MilkShakeController($http) {
  this.$http = $http;
  this.milkshake = [];
}

MilkShakeController.prototype.getMilkShake = function() {
  this.$http.get('http:/localhost:3000/milkshake')
  .then((res) => {
    this.milkshake = res.data;
  }, (err) => {
    console.log(err);
  });
};

MilkShakeController.prototype.addMilkShake = function() {
  this.$http.post('http//localhost:3000/', this.newMilkShake)
  .then((res) => {
    this.milkshake.push(res.data);
    this.newMilkShake = null;
  }, (err) => {
    console.log(err);
  });
};

MilkShakeController.prototype.updateMilkShake = function(milkshake, updatedMilkShake) {
  let arrayMilkShake = this.milkshake[this.milkshake.indexOf(milkshake)];
  arrayMilkShake.body = updatedMilkShake;
};

MilkShakeController.prototype.deleteMilkShake = function(milkshake) {
  this.$http.delete('http//localhost:3000/' + milkshake._id)
  .then(() => {
    let index = this.milkshake.indexOf(milkshake);
    this.milkshake.splice(index, 1);
  }, (err) => {
    console.log(err);
  });
};
