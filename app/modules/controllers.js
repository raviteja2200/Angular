
function registerCtrl($scope){
	$scope.registrationDetails = {
		lastName:"mamidipaka"
	};
	$scope.registerUser = function(){
		console.log($scope.registrationDetails);
	};
	$scope.locations=[{
		state:"California",
		stateCode:"CA",
		city:"San Francisco"
	},
	{
		state:"California",
		stateCode:"CA",
		city:"San Jose"
	},
	{
		state:"California",
		stateCode:"CA",
		city:"Santa Clara"
	},
	{
		state:"California",
		stateCode:"CA",
		city:"Fremont"
	},
	{
		state:"Nevada",
		stateCode:"NV",
		city:"Las Vegas"
	},

	{
		state:"Washington",
		stateCode:"WA",
		city:"Seatle"
	}

	]
	$scope.dropdownChange = function(){

	}
}

angular.module('twitterApp').controller('registerCtrl',['$scope',registerCtrl]);
