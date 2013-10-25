'use strict';

angular.module('pandiApp', ['ngRoute','ngAnimate'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'testCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
