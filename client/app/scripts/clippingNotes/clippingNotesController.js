define([
    'angular',
    './module',
], function(angular, module){
    'use strict';


    module.controller('ClippingNotesCtrl', ClippingNotesCtrl);

    // @ngInject
    function ClippingNotesCtrl($routeParams, dataService){
      var vm = this;

      init();

      ////////////

      function init(){
        dataService.getClippings()
          .then(function(data){
            for(var i=0; i<data.length; i++){
              if(data[i].title === $routeParams.title){
                vm.notes = data[i].notes;
                break;
              }
            }
          });
      }

      return vm;
    }


});