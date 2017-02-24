'use strict';

// Declare app level module which depends on views, and components

var myApp = angular.module("myApp",[]);

myApp.controller("myCtrl",function($scope){
	$scope.myfunction = function(){
		$scope.conField = document.getElementById("menu-cont-field");
		
	};
});
