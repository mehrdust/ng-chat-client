(function () {
	'use strict';

	angular.module('weavtv.chat.controllers')
		.controller('ChatController', ChatController);

	ChatController.$inject = ['ChatService', '$rootScope'];

	function ChatController(ChatService, $rootScope) {
		var vmChatController = this;
		vmChatController.chat_lines = null;
		vmChatController.connected = false;
		vmChatController.nickname = 'mehrdust';

		vmChatController.sendMsg = sendMsg;

	}

	function connect() {
		console.log('connect');
		ChatService.connect();
		// Handler for connect to socketio
		ChatService.on('connect', function () {
			vmChatController.connected = true;
			ChatService.emit('join', 'room1'); 
			console.log('socket connected');
		});
		// Handler for new messages
		ChatService.on('msg_to_room', function (from, msg) {
			$('#lines').append($('<p>').append($('<b>').text(from), msg));
		});
	}

	function sendMsg() {
		ChatService.emit('user message', vmChatController.message)
	}
})();