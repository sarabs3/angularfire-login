angular.module('sapne')
.controller('signupController',function($scope,firebase,Auth,$firebaseArray,$state){
	$scope.user = {};

	var firebaseUser = Auth.$getAuth();
	if(firebaseUser){
		console.log('Signed in as '+ firebaseUser.uid);
		$scope.signedIn = true;
	}
	else{
		console.log('signed out');
		$scope.signedIn = false;
	}

	var ref = firebase.database().ref().child('users');
	var list = $firebaseArray(ref);
	$scope.signup = function(){
		Auth.$createUserWithEmailAndPassword($scope.user.email, $scope.user.password)
		.then(function(firebaseUser) {
			createUser(firebaseUser.uid);
			console.log("User " + firebaseUser.uid + " created successfully!");
		})
		.catch(function(error) {
			console.error("Error: ", error);
		});
		var firebaseUser = Auth.$getAuth();
		if(firebaseUser){
			console.log('Signed in as '+ firebaseUser.uid);
			$scope.signedIn = true;
		}
		else{
			console.log('signed out');
			$scope.signedIn = false;
		}
	}
	function createUser(id){
		list.$add({
			id:id,
			firstname:$scope.user.firstname,
			lastname:$scope.user.lastname,
			email:$scope.user.email,
			refer:id
		})
		.then(function(ref){
			var id = ref.key;
			console.log("added record with id: "+ id);
			$scope.signedIn = true;
			var expireDate = new Date();
			expireDate.setDate(expireDate.getDate() + 1);
			$cookies.put('userId',user.uid,{'expires':expireDate});	
			$state.go('base.account.home');
			//list.$indexOf(id);
		})
	}
})