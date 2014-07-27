define([
    './module'
], function(module) {
    'use strict';

    module.provider('lazyDependency', function() {
            this.resolve = getResolver;

            this.$get = ['$injector',
                function($injector) {
                    // the service interface
                    var service = {
                        load: loadDependencies
                    };
                    return service;

                    function loadDependencies(dependencies) {
                        var resolver = getResolver(dependencies).resolver;
                        return $injector.invoke(resolver);
                    }
                }
            ];


            // Helpers
            function getResolver(dependencies) {
                var definition = {
                    resolver: ['$q', '$rootScope',
                        function($q, $rootScope) {
                            var deferred = $q.defer();

                            require(dependencies, function() {
                                $rootScope.$apply(function() {
                                    deferred.resolve();
                                });
                            });

                            return deferred.promise;
                        }
                    ]
                };

                return definition;
            }

        }
    );
});