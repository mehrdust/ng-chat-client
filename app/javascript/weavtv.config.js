(function() {
	'use strict';

	angular.module('weavtv.config', [])
		.constant('baseConfig', {

		 	// 'backend': 'http://192.168.0.13:8000/api/v1/',
		 	// 'hls': 'http://192.168.0.13/hls/',
		 	'backend': 'http://www.weav.tv:8000/api/v1/',
		 	'hls': 'http://ingest-us.weav.tv/hls/',
		  	'version': 0.1
		})
		.config(config);

  	config.$inject = ['$locationProvider', '$httpProvider'];

  	function config($locationProvider, $httpProvider) {
    	// $locationProvider.html5Mode(true);
	    // $locationProvider.hashPrefix('!');
	}
})();

