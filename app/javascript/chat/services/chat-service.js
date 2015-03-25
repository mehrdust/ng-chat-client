(function() {
	'use strict';

	angular.module('weavtv.chat.services').factory('ChatService', ChatService);

	ChatService.$inject = ['$rootScope'];

	var socket = null;
	function ChatService($rootScope) {
		var ChatService = {
			connect: connect,
			on: on,
			emit: emit
		}

		return ChatService;

		function connect(room) {
			socket = io.connect('http://10.10.26.31:8000/chat');
		}

	    function on(eventName, callback) {
	    	if (socket !== null) {
			  	socket.on(eventName, function () {
			        var args = arguments;
			        $rootScope.$apply(function () {
			          	callback.apply(socket, args);
			        });
		      	});
	    	}
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