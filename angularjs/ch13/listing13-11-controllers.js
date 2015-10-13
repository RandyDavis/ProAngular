/**
 * Created by randy on 10/12/15.
 */
// Contents of listing13-10

var app = angular.module("exampleApp", []);

app.controller("topLevelCtrl", ["$scope", function($scope) {
    $scope.data = {
        dataValue: "Hello, Randy"
    }

    $scope.reverseText = function() {
        $scope.data.dataValue = $scope.data.dataValue.split("").reverse().join("");
    }

    $scope.changeCase = function() {
        var result = [];
        angular.forEach($scope.data.dataValue.split(""), function(char, index) {
            result.push(index % 2 == 1 ? char.toString().toUpperCase() : char.toString().toLowerCase());
        });
        $scope.data.dataValue = result.join("");
    };
}]);

app.controller("firstChildCtrl", ["$scope", function($scope) {
    $scope.changeCase = function () {
        $scope.data.dataValue = $scope.data.dataValue.toUpperCase();
    };
}]);

app.controller("secondChildCtrl", ["$scope", function($scope) {
    $scope.changeCase = function() {
        $scope.data.dataValue = $scope.data.dataValue.toLowerCase();
    };

    $scope.shiftFour = function() {
        var result = [];
        angular.forEach($scope.data.dataValue.split(""), function(char, index) {
            result.push(index < 4 ? char.toUpperCase() : char);
        });
        $scope.data.dataValue = result.join("");
    }
}]);
