(function () {
	'use strict';

	angular.module('weavtv.chat.controllers')
		.controller('ChatController', ChatController);

	ChatController.$inject = ['ChatService', '$rootScope'];

	function ChatController(ChatService, $rootScope) {
		var vmChatController = this;
		vmChatController.send_hello = send_hello;
		vmChatController.nickname = 'mehrdust';

		ChatService.connect();
		ChatService.on('connect', function () {
			vmChatController.connected = true;
			console.log('socket connected');
		});

		ChatService.on('greetings', function (data) {
	        console.log('Greetings from ' + data.from);
	    });

		function send_hello() {
			ChatService.emit('hello', {'from': 'My application'});
		}
	}
})();