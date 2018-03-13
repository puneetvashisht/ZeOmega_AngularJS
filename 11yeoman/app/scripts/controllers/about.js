'use strict';

/**
 * @ngdoc function
 * @name 11yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the 11yeomanApp
 */
angular.module('11yeomanApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5',
      'AngularJS',
      'Karma'
    ];
  }).controller('PasswordController', function PasswordController() {
    this.password = '';
    this.grade = function() {
      var size = this.password.length;
      if (size > 8) {
        this.strength = 'strong';
      } else if (size > 3) {
        this.strength = 'medium';
      } else {
        this.strength = 'weak';
      }
    };
  });
