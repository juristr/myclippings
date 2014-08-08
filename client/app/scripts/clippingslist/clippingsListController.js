define([
    'angular',
    './module',
], function(angular, module){
    'use strict';


    module.controller('ClippingsListCtrl', ClippingsListCtrl);

    // @ngInject
    function ClippingsListCtrl($http, $location){
      var vm = this;

      vm.showDetail = showDetail;

      init();

      ////////////

      function init(){
        $http.get('/api/clippings')
          .then(function(response){
            vm.clippings = response.data;
          }, function(error){
            alert('error occured');
          });
      }

      function showDetail(clipping){
        $location.path('/clipping/' + clipping.title);
      }

      return vm;
    }


});