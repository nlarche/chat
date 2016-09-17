export default class chatService {
    constructor() {
        this.liste = [
        //   {
        //     id: 0,
        //     user: 'me',
        //     text: 'newChat.text newChat.text newChat.text newChat.text newChat.text newChat.text newChat.text'
        // }
        ];

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
