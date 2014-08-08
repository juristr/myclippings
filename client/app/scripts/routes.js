define([], function() {
    'use strict';

    return {
        defaultRoutePath: '/',
        routes: {
            '/': {
              templateUrl: 'scripts/clippingsList/clippingsList.html',
              controller: 'ClippingsListCtrl',
              controllerAs: 'vm'
            }
        }
    };
});