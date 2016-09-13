import service from './index';

describe('service', () => {
  let chatService;

  describe('chatService', () => {

    beforeEach(() => {
      window.module('app.chat.service');

    });

    beforeEach(inject((_ChatService_) => {
      chatService = _ChatService_;
    }));

    it('chatService get should return an array', () => {
      expect(chatService.get()).toEqual([]);
    });

    it('chatService add should add an object to the list', () => {

      const object = {
        user: '1',
        text: 'text'
      };

      chatService.add(object);

      expect(chatService.get()).toEqual([{ id: 0, user: '1', text: 'text' }]);
    });

  });


});

