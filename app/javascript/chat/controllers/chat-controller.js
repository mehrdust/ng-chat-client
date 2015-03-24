(function () {
	'use strict';

	angular.module('weavtv.chat.controllers')
		.controller('ChatController', ChatController);

	ChatController.$inject = ['ChatService', '$rootScope', '$cookies'];

	function ChatController(ChatService, $rootScope, $cookies) {
		var vmChatController = this;

		if ($cookies.nickname) {
			vmChatController.connected = true;
			vmChatController.nickname = $cookies.nickname;
			connect();
		} else {
			vmChatController.connected = false;
			vmChatController.nickname = null;
		}

		vmChatController.sendMsg = sendMsg;
		vmChatController.connect = connect;

		// Handler for new messages
		ChatService.on('msg_to_room', function (from, msg) {
			document.getElementById('lines').innerHTML = document.getElementById('lines').innerHTML + '<p><strong>' + from + ': </strong>' + msg + '</p>';
			scrollBottom();
		});

		ChatService.on('announcement', function(msg) {
			console.log(msg);
			document.getElementById('lines').innerHTML = document.getElementById('lines').innerHTML + '<p><strong>Me: </strong>' + msg + '</p>';
		});

		function connect() {
			ChatService.connect();
			// Handler for connect to socketio
			ChatService.on('connect', function () {
				vmChatController.connected = true;
				ChatService.emit('join', 'room1');
				ChatService.emit('nickname', vmChatController.nickname);
				$cookies.nickname = vmChatController.nickname;
			});
		}

		function sendMsg() {
			ChatService.emit('user message', vmChatController.message);

			document.getElementById('lines').innerHTML = document.getElementById('lines').innerHTML + '<p><strong>Me: </strong>' + vmChatController.message + '</p>';
			scrollBottom();
		}

		function scrollBottom() {
			var elem = document.getElementById('lines');
			elem.scrollTop = elem.scrollHeight;
		}
	}
})();