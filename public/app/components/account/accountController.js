 angular.module('sapne')
 .controller('accountController',function($scope,userTree,firebase,$firebaseArray){
	//var ref = firebase.database().ref().child('users');
	//var list = $firebaseArray(ref);

	//$scope.users = list;
 })
  .controller('accountHomeController',function($scope,userTree,firebase,$firebaseArray,$stateParams){
	//var ref = firebase.database().ref().child('users');
	//var list = $firebaseArray(ref);
	var uId = $stateParams.id;
	$scope.tree = [];
	userTree.buildTree(uId)
	.then(function(tree){
		console.log(tree);
		$scope.tree = tree;
		if(tree.length === 0){
			$scope.noReferal = true;
		}
	});
	
	//$scope.users = list;
 })
.controller('accountReferController',function($scope,$cookies){
	$scope.referCode = $cookies.get('userId');
 })
  