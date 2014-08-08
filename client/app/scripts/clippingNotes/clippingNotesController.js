define([
    'angular',
    './module',
], function(angular, module){
    'use strict';


    module.controller('ClippingNotesCtrl', ClippingNotesCtrl);

    // @ngInject
    function ClippingNotesCtrl($http, $routeParams){
      var vm = this;

      init();

      ////////////

      function init(){
        $http.get('/api/clippings')
          .then(function(response){

            for(var i=0; i<response.data.length; i++){
              if(response.data[i].title === $routeParams.title){
                vm.notes = response.data[i].notes;
                break;
              }
            }

          }, function(error){
            alert('error occured');
          });
      }

      return vm;
    }


});