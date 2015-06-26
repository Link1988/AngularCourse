var myApp = angular.module('MyApp', []);

myApp.controller('FirstController', ['$scope', function ($scope) {

    $scope.maxNumber = 100;
    $scope.number = 0;
    $scope.invalid = false;

    /**
     * Option 1
     */

    $scope.onNumberChange = function () {
        $scope.invalid = ($scope.number >= $scope.maxNumber);
    };

    /**
     * Option 2
     */

    /*
    $scope.$watch('number', function (newVal, oldVal) {
        if (newVal && newVal !== oldVal) {
            $scope.invalid = ($scope.number >= $scope.maxNumber);
        }
    });
    */

}])