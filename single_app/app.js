var app = angular.module('app',['ui.router'])
				.config(['$urlRouterProvider','$stateProvider',function(){
					$urlRouterProvider.otherwise('/');
					$stateProvider
						.state('home',{
							url:'/home',
							templateUrl: 'templates/home.html'
						}) 
				}])