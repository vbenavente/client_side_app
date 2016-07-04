module.exports = function(IceCreameryApp) {
  require('./controllers/icecream-controller')(IceCreameryApp);
  require('./directives/icecream-addorder-directive')(IceCreameryApp);
  require('./directives/icecream-orderhistory-directive')(IceCreameryApp);
  require('./directives/icecream-list-directive')(IceCreameryApp);
};
