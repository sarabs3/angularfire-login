angular.module('sapne')
.controller('loginController',function($scope,Auth,$cookies,$state){
	$scope.user = {};
	$scope.login = function(){
		Auth.$signInWithEmailAndPassword($scope.user.email,$scope.user.password)
		.then(function(user){
			console.log('successfully login and user id is : '+ user.uid);
			var expireDate = new Date();
			expireDate.setDate(expireDate.getDate() + 1);
			$cookies.put('userId',user.uid,{'expires':expireDate});	
			console.log($cookies.get('userId'));	
			$state.go('base.home');	
		})
		.catch(function(error){
			console.log('login '+error);
		});
	}
	var firebaseUser = Auth.$getAuth();
	if(firebaseUser){
		console.log('Signed in as '+ firebaseUser.uid);
		$scope.signedIn = true;
	}
	else{
		console.log('signed out');
		$scope.signedIn = false;
	}

})