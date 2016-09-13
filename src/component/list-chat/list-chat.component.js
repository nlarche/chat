import template from './list-chat.html';
import Styles from './list-chat.css';

class Controller {
  constructor() {
  }
  getClass(item) {
    if (this.user === item) {
      return Styles.me;
    } else {
      return Styles.you;
    }
  }
}

const listChatComponent = {
  template,
  controller : Controller,
  bindings: {
    user: '<',
    list: '<'
  }
};


export default listChatComponent;
