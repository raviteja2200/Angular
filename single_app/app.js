var app = angular
		.module('app',
			['ui.router'])
		.config(['$urlRouterProvider','$stateProvider',funciton($urlRouterProvider,$stateProvider){
			$urlRouterProvider.otherwise('/')
			$stateProvider
				.state('home',
					url:'/',
					templateUrl:'templates/home.html')
		}])