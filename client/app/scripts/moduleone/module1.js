define([
    './module'
], function(module) {
    'use strict';

    module.controller('ModuleCtrl', [
        '$scope',
        '$injector',
        'lazyDependency',
        function($scope, $injector, lazyDependencyResolver) {
            $scope.isDisabled = true;

            $scope.sayHi = function(){
                // messageService.showAlert('Hi there!');
                alert('Hi');
            };

            $scope.loadService = function(){
                lazyDependencyResolver
                    .load(['modulelazy/module.require'])
                    .then(function(){
                        $scope.isDisabled = false;
                    });
            };

            $scope.sayHiLazy = function(){
                var lazyService = $injector.get('lazyService');
                lazyService.showAlert('Yep...lazy woke up and greets you!');
            };
        }
    ]);
});