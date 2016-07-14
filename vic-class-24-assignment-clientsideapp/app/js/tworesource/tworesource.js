module.exports = function(IceCreameryApp) {
  require('./controllers/signin-controller')(IceCreameryApp);
  require('./controllers/error-controller')(IceCreameryApp);
  require('./services/auth-service')(IceCreameryApp);
};
