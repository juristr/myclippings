define([
    'angular',
    './namespace',
    '../core/namespace',
    '../core/module.require',
], function(angular, namespace, coreNamespace){
    'use strict';

    // module definition
    return angular.module(namespace, [coreNamespace]);
});