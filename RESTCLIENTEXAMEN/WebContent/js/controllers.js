'use strict';

angular.module('ProductApp.controllers', []).

    controller('ProductsController', ['$scope', 'ProductService', 
          function($scope, ProductService) {
    		
    		ProductService.getProductsJSON().success(function(response) {
    			$scope.products = response.products;
   		});
   	}                         
        
    ]).
    
    controller('ProductController', ['$scope', '$routeParams', 'ProductService',
          function($scope, $routeParams, ProductService) {
    		$scope.product = null;
    		var name = $routeParams.name;

    		ProductService.getProductJSON(name).success(function(response) {
    			$scope.product = response;
   		});
    }
        
    ]).
    
    //Nieuw product wordt in JSONString gestoken
    controller('NewProductController', ['$scope', 'ProductService',
          function($scope, ProductService) {
    		$scope.addProduct = function() {
    			String jsonString = "";
    			jsonString += "{\"name\" : \"" + $scope.newProduct.name + "\",";
				jsonString += "\"id\" : " + $scope.newProduct.id + ",";
				jsonString += "\"brand\" : \"" + $scope.newProduct.brand + "\",";
				jsonString += "\"description\" : \"" + $scope.newProduct.description + "\",";
				jsonString += "\"price\" : " + $scope.newProduct.price + "}";
    			
    			ProductService.addProduct(jsonString);

    		};
    }
        
    ]);
