'use strict';

/**
 * @ngdoc function
 * @name angularTrainingMvpApp.controller:DashboardCtrl
 * @description
 * # DashboardctrlCtrl
 * Controller of the angularTrainingMvpApp
 */
angular.module('angularTrainingMvpApp')
  .controller('DashboardCtrl',['$scope', 'dataService', function ($scope, dataService) {
   	
   	$scope.users = dataService.getUserData();
   	console.debug($scope.users)


   	$scope.fn_profileSearch = function(){
   		if(!$scope.searchContent){
   			return false;
   		}else{
   			
   			var xebiaId, xebeeName = $scope.searchContent;				
   			angular.forEach($scope.users,function(val, index){
   				if(xebeeName == val.NAME){
   					xebiaId = val.ID;
   					dataService.setSearchedData(val);
   					return false
   				}
   			});		
   			if(!dataService.getSearchedData()){
   				alert("No Data Matched")
   				return false;
   			}
   			$location.path( "/profile/"+xebiaId );
   		}

   		
   	};
  }]);
