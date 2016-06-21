'use strict';

const angular = require('angular');
const treatApp = angular.module('IceCreameryApp', []);

require('./icecream/icecream')(treatApp);
require('./milkshake/milkshake')(treatApp);
