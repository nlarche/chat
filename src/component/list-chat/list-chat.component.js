import template from './list-chat.html';

class controller {
    constructor() {
    }
}

const listChatComponent = {
    template,
    bindings : {
        user: '<',
        list: '<'
    }
};


export default listChatComponent;
