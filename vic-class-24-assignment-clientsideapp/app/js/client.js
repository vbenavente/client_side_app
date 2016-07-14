'use strict';

const angular = require('angular');
const ngRoute = require('angular-route');
const IceCreameryApp = angular.module('IceCreameryApp', [ngRoute]);

require('./icecream/icecream')(IceCreameryApp);
require('./milkshake/milkshake')(IceCreameryApp);
require('./tworesource/tworesource')(IceCreameryApp);
