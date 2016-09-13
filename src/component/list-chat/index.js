import angular from 'angular';
import listChatComponent from './list-chat.component';

const listChat = angular.module('app.chat.listChat', [])
    .component('listChat', listChatComponent);


export default listChat;