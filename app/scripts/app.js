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

      $urlRouterProvider.otherwise('/home');
      cfpLoadingBarProvider.includeSpinner = false;

    
    }]).run(function ($state,$rootScope) {
      $rootScope.$state = $state;
    });  