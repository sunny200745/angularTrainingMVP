'use strict';

/**
 * @ngdoc directive
 * @name angularTrainingMvpApp.directive:backButton
 * @description
 * # backButton
 */
angular.module('angularTrainingMvpApp')
  .directive('backButton',['$window', function ($window) {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            elem.bind('click', function () {
                $window.history.back();
            });
        }
    };
  }]);
