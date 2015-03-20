(function() {
    'use strict';

    angular
        .module('weavtv', [
            'weavtv.chat',
            'weavtv.routes'
        ])
    ;

    angular.module('weavtv.routes', ['ui.router']);
})();
