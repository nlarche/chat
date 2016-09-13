import template from './chat-room.html';

class controller {
     constructor(ChatService) {
        this.chatService = ChatService;
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
