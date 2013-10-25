'use strict';

angular.module('pandiApp')
  .controller('MainCtrl', function ($scope, $route) {
    $scope.$route = $route['routes']['/test'];
    console.log('yeah!');
  });
