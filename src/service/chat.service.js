export default class chatService {
    constructor() {
        this.liste = [];
    }
    add(newChat) {
        this.liste.push({
            id: this.liste.length,
            user: newChat.user,
            text: newChat.text
        });
    }
    get() {
        return this.liste;
    }
}
