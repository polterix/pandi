'use strict';

angular.module('pandiApp', ['ngRoute','ngAnimate','firebase'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/fathers', {
        templateUrl: 'views/fathers.html',
        controller: 'fathersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
