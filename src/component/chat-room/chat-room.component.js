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

controller.$inject = ['ChatService'];

const chatRoomComponent = {
    template,
    controller,
    bindings : {
        user: '@'
    }
};


export default chatRoomComponent;
