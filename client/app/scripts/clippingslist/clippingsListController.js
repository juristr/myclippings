define([
    'angular',
    './module',
], function(angular, module){
    'use strict';


    module.controller('ClippingsListCtrl', ClippingsListCtrl);

    // @ngInject
    function ClippingsListCtrl($location, dataService){
      var vm = this;

      vm.showDetail = showDetail;

      init();

      ////////////

      function init(){
        dataService.getClippings()
          .then(function(data){
            vm.clippings = data;
          });

        // $http.get('/api/clippings')
        //   .then(function(response){
        //     vm.clippings = response.data;
        //   }, function(error){
        //     alert('error occured');
        //   });
      }

      function showDetail(clipping){
        $location.path('/clipping/' + clipping.title);
      }

      return vm;
    }


});