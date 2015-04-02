'use strict';

/**
 * @ngdoc function
 * @name angularTrainingMvpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTrainingMvpApp
 */
angular.module('angularTrainingMvpApp')
  .controller('MainCtrl',['$scope', '$location', 'cfpLoadingBar',function($scope, $location, cfpLoadingBar){
		
		$scope.fn_login = function () {		
			cfpLoadingBar.start();
			cfpLoadingBar.inc();
			/*var userObj = {
				'email' : $scope.email,
				'password' : $scope.password
			}    
		   
	        Auth.login(userObj).then(function () {
	        	cfpLoadingBar.complete();
	        	var users = [];
    			angular.forEach(xebiaData.all,function(val, index){
    				users.push(val.NAME);				
    			});
    			dataService.setUserData(users);

	        	$location.path( "/dashboard" );	
	        }, function (error) {
		      $scope.error = error.code.split('_')[1]
		      cfpLoadingBar.complete();
		    })*/
		};
		
	}])
