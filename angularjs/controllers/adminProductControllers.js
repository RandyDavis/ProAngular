angular.module("sportsStoreAdmin")
  .constant("productsUrl", "https://api.parse.com/1/classes/Products/")
  .run(function($http) {
    $http.defaults.headers.common["X-Parse-Application-Id"]
      = "Ha2eXBEXMvjW06am7mYHP1hf3yLWCDfT6ZaHp00E";
    $http.defaults.headers.common["X-Parse-REST-API-Key"]
      = "9mZ4uPmBt5gyItlqthpBPafD5bHaMzHIGZpDne3p";
  })

  .controller("productCtrl", ["$scope", "$http", "$resource", "productUrl", function($scope, $http, $resource, productUrl) {

    $scope.$on("sessionToken", function(sessionToken) {
      $http.defaults.headers.common["X-Parse-Session-Token"] = sessionToken;
    });

    function getData(data, headers) {
      return JSON.parse(data).results;
    }

    $scope.productsResource = $resource(productUrl + ":id", { id: "@objectId" }, {
      query: { method: "GET", isArray: true, transformResponse: getData },
      update: { method: "PUT" }
    });

    $scope.listProducts = function() {
      $scope.products = $scope.productsResoure.query();
    }

    $scope.deleteProduct = function(product) {
      product.$delete().then(function() {
        $scope.products.splice($scope.products.indexOf(product), 1);
      });
    }

    $scope.updateProduct = function(product) {
      var pCopy = {};
      angular.copy(product, pCopy)
      pCopy.$update().then(function() {
        $scope.editedProduct = null;
      })
    }

    $scope.startEdit = function(product) {
      $scope.editedProduct = product;
    }

    $scope.cancelEdit = function() {
      $scope.editedProduct = null;
    }

    $scope.listProducts();
  }]);














