module.exports = function(IceCreameryApp) {
  require('./controllers/milkshake-controller')(IceCreameryApp);
  require('./directives')(IceCreameryApp);
  require('./services')(IceCreameryApp);
};
