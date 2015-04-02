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
    'ui.router',
    'wallet'
  ])
  // .config(function ($routeProvider) {
  //   $routeProvider
  //     .when('/', {
  //       templateUrl: 'views/main.html',
  //       controller: 'MainCtrl'
  //     })
  //     .when('/about', {
  //       templateUrl: 'views/about.html',
  //       controller: 'AboutCtrl'
  //     })
  //     .otherwise({
  //       redirectTo: '/'
  //     });
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('home',{
      url : '/',
      templateUrl: 'user_modules/shared/main.html',
      controller: 'HomeCtrl'
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