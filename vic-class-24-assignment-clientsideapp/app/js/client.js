'use strict';

const angular = require('angular');
const treatApp = angular.module('TreatApp', []);

require('./icecream/icecream')(treatApp);
require('./milkshake/milkshake')(treatApp);
