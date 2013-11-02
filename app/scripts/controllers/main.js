'use strict';

angular.module('pandiApp')
  .controller('MainCtrl', function ($scope, angularFire) {
    $scope.fathers = [];

    // Synchronisation des données avec Firebase
    var ref = new Firebase("https://pandi.firebaseio.com/fathers");
    angularFire(ref, $scope, "fathers");

    $scope.deleteFather = function(){
  	  $scope.fathers.pop();
  	}

  	$scope.addFather = function(){
  	 	$scope.fathers.push({name:"Roberto Robert"});
  	}

  });