'use strict';

/**
 * @ngdoc overview
 * @name angularTrainingMvpApp
 * @description
 * # angularTrainingMvpApp
 *
 * Main module of the application.
 */
angular
  .module('angularTrainingMvpApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'chieffancypants.loadingBar',
    'ui.router'
  ])
  .config(["$locationProvider", "$stateProvider", "$urlRouterProvider", "$httpProvider", "cfpLoadingBarProvider", function($locationProvider, $stateProvider, $urlRouterProvider, $httpProvider, cfpLoadingBarProvider) {
    $stateProvider
      .state('home', {
        url: "/home",
        data: {title: "Home"},
        views: { 
          'header': { templateUrl: 'views/common/header.html', controller: 'HeaderCtrl' },
          'main': { templateUrl: 'views/login.html', controller: 'MainCtrl' },
          'footer': { templateUrl: 'views/common/footer.html', controller: 'FooterCtrl' }
        }
      })
      .state('dashboard', {
        url: "/dashboard",
        data: {title: "Dashboard"},
        views: { 
          'header': { templateUrl: 'views/common/header.html', controller: 'HeaderCtrl' },
          'main': { templateUrl: 'views/dashboard.html', controller: 'DashboardCtrl' },
          'footer': { templateUrl: 'views/common/footer.html', controller: 'HeaderCtrl' }
        }
      })

      $urlRouterProvider.otherwise('/home');
      cfpLoadingBarProvider.includeSpinner = false;
      var login={'email':'sunny.200745@gmail.com','password':'1234'}
      localStorage.setItem('loginObject',JSON.stringify(login));
    
    }]).run(function ($state,$rootScope) {
      $rootScope.$state = $state;
    });  