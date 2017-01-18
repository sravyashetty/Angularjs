( function(){
	'use strict;'

	var myApp = angular.module ('LunchCheck',[])

	.controller ('LunchCheckController', lunchCheck);

	lunchCheck.$inject = ['$scope']
	function lunchCheck($scope){
    	
		$scope.name = "anything";

		$scope.itemsCheck = function(){
			var comma = ','
			var lunchString = $scope.name;
			var arrayOfStrings = lunchString.split(comma);
			var numberOfItems = arrayOfStrings.length;

			if (numberOfItems <= 3){
				alert("Enjoy!");
			

			} else if(numberOfItems > 3) { 
				alert('Too much!');

			} else ( numberOfItems = 0 ){
				alert("enter atleast one item");
			
			} 
		}
	}


})();
