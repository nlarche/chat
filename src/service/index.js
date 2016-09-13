import angular from 'angular';

import chatService from './chat.service';

const service = angular.module('app.chat.service', [])
  .service('ChatService', chatService);

export default service;