angular.module('sapne')
.factory('userTree',function($http,$q,$firebaseArray,fb){
	var tree = [{"name":"sarab","refId":"","id":"G62NSZKMk6RggyBCiqMgqxpxo5M2"},
				{"name":"aman","refId":"G62NSZKMk6RggyBCiqMgqxpxo5M2","id":"2"},
				{"name":"pitu","refId":"G62NSZKMk6RggyBCiqMgqxpxo5M2","id":"3"},
				{"name":"shekhar","refId":"2","id":"4"},
				{"name":"subhash","refId":"2","id":"5"},
				{"name":"gippy","refId":"3","id":"6"},
				{"name":"veer","refId":"3","id":"7"},
				{"name":"rajan","refId":"4","id":"8"}
				];
	function buildTree(id){
		var tr = [];
		var d = $q.defer();
		for(var i=1;i<tree.length;i++){
			if(tree[i].refId === id){
				console.log(tree[i].name);
				tr.push(tree[i]);
			}
		}
		d.resolve(tr)
		return d.promise;
	}
	function all(){
		var ref = firebase.database().ref().child('classifieds');
		//var d = $q.defer();
		/*$http.get('/data/classifieds.json')
		.success(function(data){
			console.log(data);
			d.resolve(data);
		})*/
		return $firebaseArray(ref);
	}
	return {
		all:all,
		buildTree:buildTree
	}
})