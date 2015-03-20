(function() {
	'use strict';

	angular.module('weavtv.chat.services').factory('ChatService', ChatService);

	ChatService.$inject = ['$rootScope'];

	console.log('connecting the socket');
	var socket = null;

	function ChatService($rootScope) {
		var ChatService = {
			connect: connect,
			on: on,
			emit: emit	
		}

		return ChatService;

		function connect() {
			socket = io.connect('http://localhost:9090');
		}

	    function on(eventName, callback) {
		  	socket.on(eventName, function () {
		        var args = arguments;
		        $rootScope.$apply(function () {
		          	callback.apply(socket, args);
		        });
	      	});
	    }

	    function emit(eventName, data, callback) {
	      	socket.emit(eventName, data, function () {
        		var args = arguments;
        		$rootScope.$apply(function () {
          			if (callback) {
            			callback.apply(socket, args);
      				}
        		});
      		})
    	}
	}
})();