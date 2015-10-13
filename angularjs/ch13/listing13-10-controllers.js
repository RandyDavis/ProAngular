/**
 * Created by randy on 10/12/15.
 */
// Contents of listing13-10

var app = angular.module("exampleApp", []);

app.controller("topLevelCtrl", ["$scope", function($scope) {
    $scope.dataValue = "Hello, Randy";

    $scope.reverseText = function() {
        $scope.dataValue = $scope.dataValue.split("").reverse().join("");
    }

    $scope.changeCase = function() {
        var result = [];
        angular.forEach($scope.dataValue.split(""), function(char, index) {
            result.push(index % 2 == 1 ? char.toString().toUpperCase() : char.toString().toLowerCase());
        });
        $scope.dataValue = result.join("");
    };
}]);

app.controller("firstChildCtrl", ["$scope", function($scope) {
    $scope.changeCase = function () {
        $scope.dataValue = $scope.dataValue.toUpperCase();
    };
}]);

app.controller("secondChildCtrl", ["$scope", function($scope) {
    $scope.changeCase = function() {
        $scope.dataValue = $scope.dataValue.toLowerCase();
    };

    $scope.shiftFour = function() {
        var result = [];
        angular.forEach($scope.dataValue.split(""), function(char, index) {
            result.push(index < 4 ? char.toUpperCase() : char);
        });
        $scope.dataValue = result.join("");
    }
}]);
