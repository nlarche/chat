import chatRoom from './index';
import chatRoomComponent from './chat-room.component';
import template from './chat-room.html';

describe('chatRoom', () => {
  let $componentController, ChatService;

  beforeEach(() => {
    window.module('app.chat.chatRoom');

    window.module($provide => {
      $provide.value('ChatService', {
        get: () => {
          return [];
        },
        add: () => { }
      });
    });
  });

  beforeEach(inject((_$componentController_, _ChatService_) => {
    $componentController = _$componentController_;
    ChatService = _ChatService_;
  }));

  it('should define the user', function () {

    const bindings = { user: 'me' };
    const ctrl = $componentController('chatRoom', null, bindings);

    expect(ctrl.user).toBeDefined();
    expect(ctrl.user).toBe('me');
  });

  it('should call the chatService', function () {

    spyOn(ChatService, 'get').and.callThrough();
    spyOn(ChatService, 'add').and.callThrough();

    const bindings = { user: 'me' };
    const ctrl = $componentController('chatRoom', { ChatService }, bindings);

    ctrl.update();

    expect(ChatService.get).toHaveBeenCalled();
    expect(ChatService.add).toHaveBeenCalled();
  });

});

describe('Template', () => {
  it('includes the `list-chat` component', () => {
    expect(template).toContain('list-chat');
  });
  it('includes the `input-chat` component', () => {
    expect(template).toContain('input-chat');
  });
});

