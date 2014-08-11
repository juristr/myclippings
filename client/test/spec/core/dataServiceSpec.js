/*jshint unused: vars */
define(['angular', 'angular-mocks'], function(angular, mocks) {
  'use strict';

  describe('The dataService', function () {

    // load the controller's module
    beforeEach(module('app.core'));

    var dataService,
        $http,
        $httpBackend;

    // Initialize the controller and a mock scope
    // beforeEach(inject(function ($controller, $rootScope) {
    //   scope = $rootScope.$new();
    //   LazyDependency = $controller('MainCtrl', {
    //     $scope: scope
    //   });
    // }));
    
    beforeEach(inject(function(_$http_, _$httpBackend_, _dataService_){

      dataService = _dataService_;
      $http = _$http_;
      $httpBackend = _$httpBackend_;

    })); 
    

    it('should return a list of clippings', function (done) {
      
      $httpBackend
        .whenGET('http://localhost:9000/api/clippings')
        .respond([{
          title: 'a book'
        }]);

      dataService.getClippings()
        .then(function(data){
          expect(data.length).toEquals(1);

          done();
        });

      $httpBackend.flush();

    });

  });
});
