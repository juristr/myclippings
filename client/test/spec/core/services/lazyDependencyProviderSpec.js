/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Provider: lazyDependency', function () {

    // load the controller's module
    beforeEach(module('app.core'));

    var LazyDependency,
      scope;

    // Initialize the controller and a mock scope
    // beforeEach(inject(function ($controller, $rootScope) {
    //   scope = $rootScope.$new();
    //   LazyDependency = $controller('MainCtrl', {
    //     $scope: scope
    //   });
    // }));

    it('should succeed', function () {
      // this is a dummy test, needs to be setup properly
      expect(true).toBe(true);
    });

  });
});
