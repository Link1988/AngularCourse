var myApp = angular.module('MyApp', []);

myApp.controller('FirstController', ['$scope'], function ($scope) {
	$scope.newPerson = {
		name: '',
		age: 0,
		email: ''		
	};
	
	$scope.groupList = [];
	
	$scope.onAddPerson = function() {
		$scope.groupList.push({
			name: $scope.newPerson.name, 
			age: $scope.newPerson.age, 
			email: $scope.newPerson.email
		});
		$scope.newPerson = {
			name: '',
			age: 0,
			email: ''
        };		
	};
});