angular.module("sportsStore")
  // Using Real Product Data from Parse
  .constant('dataUrl', "https://api.parse.com/1/classes/Products")
  .run(function($http) {
    $http.defaults.headers.common["X-Parse-Application-Id"]
      = "";
    $http.defaults.headers.common["X-Parse-REST-API-Key"]
      = "";
  })

  .controller("sportsStoreCtrl", ["$scope", "$http", "dataUrl", function($scope, $http, dataUrl) {
    $scope.data = {};

    $http.get(dataUrl)
      .success(function(data) {
        $scope.data.products = data.results;
      })
      .error(function(response) {
        $scope.data.error = response.error || response;
      });
  }]);




  
  // Original static dummy data used to start app

  // .controller('sportsStoreCtrl', ['$scope', function ($scope) {
  //   $scope.data = {
  //     products: [
  //       { name: "Product #1", description: "A product", category: "Category #1", price: 100 },
  //       { name: "Product #2", description: "A product", category: "Category #1", price: 110 },
  //       { name: "Product #3", description: "A product", category: "Category #2", price: 210 },
  //       { name: "Product #4", description: "A product", category: "Category #3", price: 202 }
  //     ]
  //   };
  // }]);

