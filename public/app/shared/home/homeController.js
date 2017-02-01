angular.module('sapne')
.controller('homeController',function($scope,$cookies,Auth,$state){
	$scope.signedIn = false;
	console.log($cookies.get('userId'));	
	var firebaseUser = Auth.$getAuth();
	if(firebaseUser){
		console.log('Signed in as '+ firebaseUser.uid);
		$scope.signedIn = true;
	}
	else{
		console.log('signed out');
		$scope.signedIn = false;
	}
	$scope.signout = function(){
		Auth.$signOut();
		$cookies.remove('userId');
		$state.go('logout');
		console.log('signedOut');
	}
})