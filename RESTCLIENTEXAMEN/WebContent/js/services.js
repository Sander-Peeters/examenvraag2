'use strict';

angular.module('ProductApp.services', []).

    factory('ProductService', ['$http',
        function($http) {
            var restUrl = 'http://localhost:8080/REST/products';

            return {
            	getProductsJSON : function() {
            		$http.defaults.headers.common.Accept = 'application/json';
            		
            		return $http.get(restUrl).
            			success(function(data) {
            				return data;
            			});
            			error(function(data){
            				return data;
            			});
            	},
            	
            	getProductJSON : function(name) {
            		$http.defaults.headers.common.Accept = 'application/json';
            		
            		return $http.get(restUrl + '/' + name).
            			success(function(data) {
            				return data;
            			});
            			error(function(data){
            				return data;
            			});
            	},
            	addProduct: function(productJSON) {
            	$http({
            		method: 'POST',
            		url: restUrl,
            		data: productJSON,
            		headers: {
            			'Content-Type': 'application/json'
            		}}).then(function(result) {
            		
            	}, function(error) {
            		alert('error');
            		
            	});
            }

        }
    }
    ]);