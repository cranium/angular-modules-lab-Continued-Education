var myapp = angular.module('app');

var maincontroller = myapp.controller('MainController', ['$scope', function($scope) {
	$scope.name = "Carson";
}]);