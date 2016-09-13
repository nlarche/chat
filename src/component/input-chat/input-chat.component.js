import template from './input-chat.html';

class controller {
    constructor() {            
    }  
    onSubmit() {
        this.onUpdate({
                    $event : {
                    user: this.user,
                    text: this.text
                }
            }
        );
        this.text = null;        
    }
}

const InputChatComponent = {
    template,
    controller,
    bindings : {
        user: '<',
        onUpdate: '&'
    }
};


export default InputChatComponent;
