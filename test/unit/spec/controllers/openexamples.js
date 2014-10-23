'use strict';

describe('Controller: OpenExamplesCtrl', function () {

  // load the controller's module
  beforeEach(window.angular.mock.module('PhonicsApp'));

  var OpenExamplesCtrl,
    $modalInstance,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    $modalInstance = {                    // Create a mock object using spies
      close: jasmine.createSpy('modalInstance.close'),
      dismiss: jasmine.createSpy('modalInstance.dismiss'),
      result: {
        then: jasmine.createSpy('modalInstance.result.then')
      }
    };
    OpenExamplesCtrl = $controller('OpenExamplesCtrl', {
      $scope: scope,
      $modalInstance: $modalInstance
    });
  }));

  it('should have a scope', function () {
    expect(!!scope).toBe(true);

  });
});