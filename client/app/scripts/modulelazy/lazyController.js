define([
    './module',
    './namespace'
], function(module) {
    'use strict';

    module.controller('LazyCtrl', [
        '$scope',
        function($scope) {
            $scope.sayHi = function() {
                alert("I know...I'm lazy..");
            };
        }
    ]);
});