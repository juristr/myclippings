define([
    './module'
], function(module){
    'use strict';

    module.factory('lazyService',
        function() {
            return {
                showAlert: function(msg){
                    alert('Msg from lazy service: ' + msg);
                }
            };
        }
    );
});