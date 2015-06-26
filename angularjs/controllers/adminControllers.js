angular.module("sportsStoreAdmin")
  .constant("authUrl", "https://api.parse.com/1/login")
  .run(function($http) {
    $http.defaults.headers.common["X-Parse-Application-Id"]
      = "Ha2eXBEXMvjW06am7mYHP1hf3yLWCDfT6ZaHp00E";
    $http.defaults.headers.common["X-Parse-REST-API-Key"]
      = "9mZ4uPmBt5gyItlqthpBPafD5bHaMzHIGZpDne3p";
  })

.controller("authCtrl", ["$scope", "$http", "$location", "authUrl", function($scope, $http, $location, authUrl) {

  $scope.authenticate = function(user, pass) {
    $http.get(authUrl, {
      params: {
        username: user,
        password: pass
      },
    }).success(function(data) {
      $scope.$broadcast("sessionToken", data.sessionToken);
      $http.defaults.headers.common["X-Parse-Session-Token"]
        = data.sessionToken;
      $location.path("/main");
    }).error(function(response) {
      $scope.authenticationError = response.error || response;
    });
  };
}]);