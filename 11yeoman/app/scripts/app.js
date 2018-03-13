'use strict';

/**
 * @ngdoc overview
 * @name 11yeomanApp
 * @description
 * # 11yeomanApp
 *
 * Main module of the application.
 */
angular
  .module('11yeomanApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/feedback', {
        templateUrl: 'views/feedback.html',
        controller: 'FeedbackCtrl',
        controllerAs: 'feedback'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
