define([
    'angular',
    './module',
], function(angular, module){
    'use strict';


    module.controller('ClippingsListCtrl', ClippingsListCtrl);

    // @ngInject
    function ClippingsListCtrl($http){
      var vm = this;

      init();

      ////////////

      function init(){
        $http.get('/api/data')
          .then(function(response){
            vm.clippings = response.data;
          }, function(error){
            alert('error occured');
          });
      }

      return vm;
    }


});