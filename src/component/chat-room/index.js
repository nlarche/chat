import angular from 'angular';
import chatRoomComponent from './chat-room.component';

import listChat from '../list-chat';
import inputChat from '../input-chat';

const chatRoom = angular.module('app.chat.chatRoom', [
    listChat.name,
    inputChat.name
])
    .component('chatRoom', chatRoomComponent);


export default chatRoom;