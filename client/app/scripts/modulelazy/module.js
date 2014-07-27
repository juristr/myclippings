define([
    'angular',
    './namespace',
], function(angular, namespace){
    'use strict';

    // module definition
    var app = angular.module(namespace, []);

    app.config([

        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',

        function($controllerProvider, $compileProvider, $filterProvider, $provide) {
            app.controller = $controllerProvider.register;
            app.directive  = $compileProvider.directive;
            app.filter     = $filterProvider.register;
            app.factory    = $provide.factory;
            app.service    = $provide.service;
        }

    ]);

    return app;
});