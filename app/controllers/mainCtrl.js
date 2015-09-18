/**
 * Created by Ravi Teja on 9/16/2015.
 */
app.controller('mainCtrl',['$scope','navigationFactory','$state', function($scope,navigationFactory,$state){
        $scope.title="bitch";
        $scope.navItems=navigationFactory.getNavigationItems();

        $scope.loadPage = function(route){
            $state.go(route.routeName);
        }
    }])