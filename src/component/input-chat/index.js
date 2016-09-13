import angular from 'angular';
import inputChatComponent from './input-chat.component';

const inputChat = angular.module('app.chat.inputChat', [])
    .component('inputChat', inputChatComponent);


export default inputChat;