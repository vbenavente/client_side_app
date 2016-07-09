module.exports = function(IceCreameryApp) {
  require('./controllers/icecream-controller')(IceCreameryApp);
  require('./directives')(IceCreameryApp);
  require('./services')(IceCreameryApp);
};
