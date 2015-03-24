(function () {
    'use strict';

    angular
        .module('weavtv.routes')
        .config(config);

    // config.$inject = ['$routeProvider'];
    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('weavtv', {
                url: '/',
                views: {
                    'content': {
                        templateUrl: 'templates/layout/content.tpl.html',
                        controller: 'ChatController as chatCtrl'
                    },
                }
            })
        ;
        $urlRouterProvider.otherwise('/');
    }
})();
