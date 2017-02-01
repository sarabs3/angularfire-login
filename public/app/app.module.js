angular.module('sapne',['ui.router','firebase','ngCookies','angularFileUpload','ui.materialize'])
.constant('fb',{url:"https://sapnehpapne.firebaseio.com/"})
.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    return $firebaseAuth();
  }
])
// for ui-router
.run(["$rootScope", "$state", function($rootScope, $state) {
  $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
    // We can catch the error thrown when the $requireSignIn promise is rejected
    // and redirect the user back to the home page
    console.log(error);
    if (error === "AUTH_REQUIRED") {
      $state.go("login");
    }
  });
}]);;