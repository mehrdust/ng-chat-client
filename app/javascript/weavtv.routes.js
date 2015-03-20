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
                    // 'header': {
                    //     templateUrl: 'templates/layout/navbar.html',
                    //     controller: 'HeaderController as headerCtrl' 
                    // },
                    // 'sidebar': {
                    //     templateUrl: 'templates/layout/sidebar.tpl.html'
                    // },
                    'content': {
                        templateUrl: 'templates/layout/content.tpl.html',
                        controller: 'ChatController as chatCtrl'
                    },
                    // 'footer': {
                    //     templateUrl: 'templates/layout/footer.tpl.html'
                    // }
                }
            })
        ;
        $urlRouterProvider.otherwise('/');
    }
})();
