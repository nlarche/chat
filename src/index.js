import angular from 'angular';
import Styles from './app.css';

import service from './service';
import chatRoom from './component/chat-room';

import template  from './app.html';

class MainController {
  constructor() {
    this.styles = Styles;
  }
}

angular.module('app.chat', [
  service.name,
  chatRoom.name
])
  .component('app', {
    template,
    controller: MainController
  });
