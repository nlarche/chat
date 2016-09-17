import template from './input-chat.html';
import Styles from './input-chat.css';

class controller {
    constructor() {
      this.styles = Styles;
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
