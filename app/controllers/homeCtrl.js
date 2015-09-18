/**
 * Created by Ravi Teja on 9/16/2015.
 */
angular
    .module('app')
    .controller('homeCtrl',['$scope', 'friends', function($scope,friends){
        $scope.title = "Home";
        
        $scope.items = ['home','about','contact'];
    	
    }]);
