/*jshint unused: vars */
define([
  'angular',
  'routes',
  './core/namespace',
  './core/module.require',
  './common/services/namespace',
  './common/services/module.require',
  './clippingslist/namespace',
  './clippingslist/module.require',
  './clippingNotes/namespace',
  './clippingNotes/module.require',
  './moduleone/module.require',
  './moduleone/namespace',
  './modulelazy/module',
  './modulelazy/namespace'
] /*deps*/ , function(
  angular,
  routesConfig,
  coreNamespace,
  coreModuleRequire,
  commonNamespace,
  commonModuleRequire,
  clippingsListNamespace,
  clippingsListRequire,
  clippingNotesNamespace,
  clippingNotesRequire,
  moduleoneRequire,
  moduleoneNamespace,
  moduleLazy,
  moduleLazyNamespace) /*invoke*/ {
  'use strict';

  var app = angular.module('app', [
      'ngCookies',
      'ngResource',
      'ngSanitize',
      'ngRoute',
      coreNamespace,
      commonNamespace,
      clippingsListNamespace,
      clippingNotesNamespace,
      moduleoneNamespace,
      moduleLazyNamespace
    ]);

  app.config([
    '$routeProvider',
    '$locationProvider',
    '$controllerProvider',
    '$compileProvider',
    '$filterProvider',
    '$provide',
    'lazyDependencyProvider',
    function($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, lazyDependencyProvider) {
      app.controller = $controllerProvider.register;
      app.directive = $compileProvider.directive;
      app.filter = $filterProvider.register;
      app.factory = $provide.factory;
      app.service = $provide.service;

      if (angular.isUndefined(routesConfig.routes) === false) {
        angular.forEach(routesConfig.routes, function(route, path) {
          var deps = {
              templateUrl: route.templateUrl,
              // dependencies are lazily fetched through requirejs here.
              resolve: lazyDependencyProvider.resolve(route.dependencies)
            };

          if(angular.isUndefined(route.controller) === false){
            deps.controller = route.controller;
          }

          if(angular.isUndefined(route.controllerAs) === false){
            deps.controllerAs = route.controllerAs;
          }

          $routeProvider.when(path, deps);
        });
      }

      if (angular.isUndefined(routesConfig.defaultRoutePaths) === false) {
        $routeProvider.otherwise({
          redirectTo: routesConfig.defaultRoutePaths
        });
      }
    }
  ]);


  return app;
});