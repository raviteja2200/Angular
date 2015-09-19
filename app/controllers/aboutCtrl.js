/**
 * Created by Ravi Teja on 9/16/2015.
 */
angular
    .module('app')
    .controller('aboutCtrl', ['$scope','friends', function($scope,friends) {
        $scope.title = "About";
        $scope.items = ["ravi","Teja","IDK"];
        $scope.selectedValue ="ravi";
        $scope.friends = friends;

        $scope.save = function() {
        	$hhtp.post('api/friends', friends);
        	alert(JSON.stringify($scope.friends));
        }
    }]);