angular.module('sapne')
.factory('products',function($http,$q,$firebaseArray,fb){
	var cl;
	function all(){
		var ref = firebase.database().ref().child('products');
		//var d = $q.defer();
		/*$http.get('/data/classifieds.json')
		.success(function(data){
			console.log(data);
			d.resolve(data);
		})*/
		return $firebaseArray(ref);
	}
	return {
		all:all
	}
})