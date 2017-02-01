angular.module('sapne')
.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/home');

	$stateProvider
	.state('base',{
		templateUrl:'app/shared/master/masterView.html',
		controller:'masterController',
		resolve:{
			"currentAuth":["Auth",function(Auth){
				return Auth.$waitForSignIn();
			}]
		}
	})
	.state('base.home',{
		url:'/home',
		templateUrl:'app/shared/home/homeView.html',
		controller:'homeController',
		resolve:{
			"currentAuth":["Auth",function(Auth){
				return Auth.$waitForSignIn();
			}]
		}
	})
	.state('signup',{
		url:'/signup',
		templateUrl:'app/components/signup/signupView.html',
		controller:'signupController'
	})
	.state('login',{
		url:'/login',
		templateUrl:'app/components/login/loginView.html',
		controller:'loginController'
	})
	.state('logout',{
		url:'/logout',
		templateUrl:'app/components/login/loginView.html',
		controller:'loginController'
	})
	/* classifieds */
	.state('base.classified',{
		url:'/classified',
		templateUrl:'app/components/classified/classifiedView.html',
		controller:'classifiedController',
		resolve:{
			"currentAuth":[function(){
				$('.button-collapse').sideNav('hide');
			}]
		}
	})
	.state('base.classified.list',{
		url:'/all',
		templateUrl:'app/components/classified/classifiedList.html',
		controller:'classifiedController'
	})
	.state('base.classified.details',{
		url:'/details',
		templateUrl:'app/components/classified/classifiedView.html',
		controller:'classifiedController'
	})
	.state('base.classified.add',{
		url:'/add',
		templateUrl:'app/components/classified/classifiedAdd.html',
		controller:'classifiedController',
		resolve:{
			"currentAuth":["Auth",function(Auth){
				return Auth.$requireSignIn();
			}]
		}
	})
	/* products */
	.state('base.products',{
		url:'/products',
		templateUrl:'app/components/products/productsView.html',
		controller:'productsController',
		resolve:{
			"currentAuth":[function(){
				$('.button-collapse').sideNav('hide');
			}]
		}
	})
	.state('base.products.list',{
		url:'/all',
		templateUrl:'app/components/products/productsList.html',
		controller:'productsController'
	})
	.state('base.products.details',{
		url:'/details',
		templateUrl:'app/components/products/productsDetails.html',
		controller:'productsController'
	})
	.state('base.products.add',{
		url:'/add',
		templateUrl:'app/components/products/productsAdd.html',
		controller:'productsController',
		resolve:{
			"currentAuth":["Auth",function(Auth){
				return Auth.$requireSignIn();
			}]
		}
	})
	/* admin users */
	.state('base.users',{
		url:'/users',
		templateUrl:'app/components/users/usersView.html',
		controller:'usersController',
		resolve:{
			"currentAuth":["Auth",function(Auth){
				$('.button-collapse').sideNav('hide');
				return Auth.$requireSignIn();
			}]
		}
	})
	/* my account users */
	.state('base.account',{
		url:'/account',
		templateUrl:'app/components/account/accountView.html',
		controller:'accountController',
		resolve:{
			"currentAuth":["Auth",function(Auth){
				$('.button-collapse').sideNav('hide');
				return Auth.$requireSignIn();
			}]
		}
	})
	.state('base.account.home',{
		url:'/home/:id',
		templateUrl:'app/components/account/accountHome.html',
		controller:'accountHomeController',
		resolve:{
			"currentAuth":["Auth",function(Auth){
				return Auth.$requireSignIn();
			}]
		}
	})
	.state('base.account.refer',{
		url:'/refer/:id',
		templateUrl:'app/components/account/accountRefer.html',
		controller:'accountReferController',
		resolve:{
			"currentAuth":["Auth",function(Auth){
				return Auth.$requireSignIn();
			}]
		}
	})


})