import angular from 'angular';

import service from './service';
import chatRoom from './component/chat-room';

import template  from './app.html';

angular.module('app.chat', [
    service.name,
    chatRoom.name
])
    .component('app', {
        template,
    });