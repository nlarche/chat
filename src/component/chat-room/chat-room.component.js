import template from './chat-room.html';
import Styles from './chat-room.css';

class controller {
     constructor(ChatService) {
        this.chatService = ChatService;
        this.styles = Styles;
    }
    update($event) {
        this.chatService.add($event);
        this.list = this.chatService.get();
    }
}

// $inject for dependency injection when minification
controller.$inject = ['ChatService'];

const chatRoomComponent = {
    template,
    controller,
    bindings : {
        user: '@'
    }
};


export default chatRoomComponent;
