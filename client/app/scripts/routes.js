define([], function() {
    'use strict';

    return {
        defaultRoutePath: '/',
        routes: {
            '/': {
              templateUrl: 'scripts/clippingsList/clippingsList.html',
              controller: 'ClippingsListCtrl',
              controllerAs: 'vm'
            },
            '/clipping/:title': {
              templateUrl: 'scripts/clippingNotes/notes.html',
              controller: 'ClippingNotesCtrl',
              controllerAs: 'vm'
            }
        }
    };
});