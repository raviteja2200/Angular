/**
 * Created by Ravi Teja on 9/16/2015.
 */
var app = angular
    .module('app', [
        'ui.router'])
    .config(['$urlRouterProvider','$stateProvider',function ($urlRouterProvider,$stateProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: 'templates/home.html',
                controller: 'homeCtrl'
            })
            .state('about',{
                url:'/about',
                templateUrl: 'templates/about.html',
                controller:'aboutCtrl'
            })
            .state('contact',{
                url:'/contact',
                templateUrl: 'templates/contact.html',
                controller:'contactCtrl'
            })
            .state('idk',{
                url:"/idk",
                templateUrl: 'templates/idk.html',
                controller:'idkCtrl'
            })
            .state('register',{
                url:"/register",
                templateUrl: 'templates/register.html',
                controller:'registerCtrl'
            })

    }])