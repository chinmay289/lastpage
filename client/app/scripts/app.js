'use strict';

/**
 * @ngdoc overview
 * @name lastpageApp
 * @description
 * # lastpageApp
 *
 * Main module of the application.
 */
angular
  .module('lastpageApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
    ,'wallet'
  ])

  .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('home',{
      url : '/',
      templateUrl: 'user_modules/shared/main.html'
    })
    .state('about',{
      url : '/about',
      templateUrl: 'user_modules/shared/about.html'
    })
    ;
  } ])

  .controller('HomeCtrl', function($scope){
    $scope.loggedIn = 'false';
  })

  ;