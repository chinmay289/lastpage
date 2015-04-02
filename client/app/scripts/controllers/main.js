'use strict';

/**
 * @ngdoc function
 * @name lastpageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lastpageApp
 */
angular.module('lastpageApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
