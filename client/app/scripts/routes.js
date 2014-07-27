define([], function() {
    'use strict';

    return {
        defaultRoutePath: '/',
        routes: {
            '/': {
              templateUrl: 'scripts/core/shell.html'
            },
            '/about': {
              templateUrl: 'scripts/about/about.html'
            },
            '/module1': {
              templateUrl: 'scripts/moduleone/module1.html',
              controller: 'ModuleCtrl'
            },
            '/modulelazy': {
              templateUrl: 'scripts/modulelazy/main.html',
              controller: 'LazyCtrl',
              dependencies: [
                'modulelazy/module.require'
              ]
            }
        }
    };
});