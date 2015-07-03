var controllersModule = angular.module("exampleApp.Controllers", [])

controllersModule.controller ("dayCtrl", ["$scope", "days", function($scope, days) {
  $scope.day = days.today;
}]);

controllersModule.controller("tomorrowCtrl", ["$scope", "days", function($scope, days) {
  $scope.day = days.tomorrow;
}]);