 angular.module('sapne')
 .controller('productsController',function($scope,products,$state,firebase,$firebaseArray,fileUpload){
	$scope.product = {};
	$scope.products = products.all();
	var ref = firebase.database().ref().child('products');
	var products = $firebaseArray(ref);
	// Add Product
	$scope.addProduct = function(isValid){
		// Validate form
		if(isValid){
			var file = $scope.myFile;
			var uploadUrl = "/fileUpload";
			// Upload image using node
			fileUpload.uploadFileToUrl(file, uploadUrl)
				.then(function(fName){
				console.log('file name: '+fName);
				// Add product to firebase
				products.$add({name:$scope.product.name,type:$scope.product.type,productImg:fName})
				.then(function(product){
					var id = product.key;
					console.log('record added with id : '+ id);
					console.log(product);
					$state.go('base.products.list');
				})
				.catch(function(error){
					console.log(error);
				});
			});
		};
		//$state.go('base.products.list');
	}
 })