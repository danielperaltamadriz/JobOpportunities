(function() {
    'use strict';

    angular
        .module('app.create')
        .config(routesConfiguration);

    /* @ngInject */
    function routesConfiguration($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('create', {
                url: '/create',
                templateUrl: 'app/create/create.html',
                controller: 'CreateCtrl as vm'
            });
    }
})();