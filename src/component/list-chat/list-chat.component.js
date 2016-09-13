import template from './list-chat.html';

class controller {
    constructor() {      
    }  
}

const listChatComponent = {
    template,
    controller,
    bindings : {
        user: '<',
        list: '<'
    }
};


export default listChatComponent;
