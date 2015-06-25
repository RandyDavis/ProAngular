angular.module("sportsStore")
  // Using Real Product Data from Parse
  .constant('dataUrl', "https://api.parse.com/1/classes/Products")
  .constant("orderUrl", "https://api.parse.com/1/classes/Orders")
  .run(function($http) {
    $http.defaults.headers.common["X-Parse-Application-Id"]
      = "Ha2eXBEXMvjW06am7mYHP1hf3yLWCDfT6ZaHp00E";
    $http.defaults.headers.common["X-Parse-REST-API-Key"]
      = "9mZ4uPmBt5gyItlqthpBPafD5bHaMzHIGZpDne3p";
  })

  .controller("sportsStoreCtrl", ["$scope", "$http", "$location", "dataUrl", "orderUrl", "cart" , function($scope, $http, $location, dataUrl, orderUrl, cart) {
    $scope.data = {};

    $http.get(dataUrl)
      .success(function(data) {
        $scope.data.products = data.results;
      })
      .error(function(response) {
        $scope.data.error = response.error || response;
      });

    $scope.sendOrder = function(shippingDetails) {
      var order = angular.copy(shippingDetails);
      order.products = cart.getProducts();
      $http.post(orderUrl, order)
        .success(function(data) {
          $scope.data.orderId = data.objectId;
          cart.getProducts().length = 0;
        })
        .error(function(error) {
          $scope.data.orderError = error;
        }).finally(function() {
          $location.path("/complete");
        });
    };
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

