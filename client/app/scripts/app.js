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
          .state('login',{
            url: '/login',
            templateUrl: 'user_modules/shared/login.html'
          })
          .state('register', {
            url:'/register',
            templateUrl: 'user_modules/shared/first-entry.html'
          })
          .state('changepass',{
            url:'/changepass',
            templateUrl: 'user_modules/shared/password-entry.html'
          })
          ;
      } ])

  .controller('HomeCtrl', function($scope){
    $scope.loggedIn = 'false';
  })

  ;