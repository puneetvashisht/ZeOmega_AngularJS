'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('11yeomanApp'));

  var AboutCtrl,PasswordController,scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
    scope = $rootScope.$new();
    PasswordController =  $controller('PasswordController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AboutCtrl.awesomeThings.length).toBe(3);
  });

  it('sets the strength to "strong" if the password length is >8 chars', function() {
    // var $scope = {};
    // scope = $rootScope.$new();
    // var controller = $controller('PasswordController', { $scope: $scope });
    PasswordController.password = 'ssdgds';
    PasswordController.grade();
    expect(PasswordController.strength).toEqual('medium');
  });
});
