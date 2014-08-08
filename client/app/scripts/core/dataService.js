define([
    'angular',
    './module',
], function(angular, module){
    'use strict';


    module.factory('dataService', DataService);

    // @ngInject
    function DataService($http){
      var service = {
        getClippings: getClippings
      };
      return service;


      function getClippings(){
        return $http.get('/api/clippings')
            .then(function(response){
              return response.data;
            }, function(error){
              return error;
            });
      }


    }


});