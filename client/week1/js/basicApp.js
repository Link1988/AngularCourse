myApp = angular.module('MyApp', []);

myApp.controller('FirstController', ['$scope', function($scope) {
	$scope.nameList = ["Alex", "Sebas"];
	$scope.personList = [
		{'name': 'Alejandro', 'age': 30},
		{'name': 'Sebastian', 'age': 20}
	];	
}]);