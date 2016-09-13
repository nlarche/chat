import listChat from './index';
import listChatComponent from './list-chat.component';
import Template from './list-chat.html';

describe('ListChat', () => {
  let component, $componentController;

  const list = [
    { id : 0, user : 'me', text : 'text1' },
    { id : 1, user : 'you', text : 'text2' },
    { id : 2, user : 'me', text : 'text3' },
  ];

  beforeEach(() => {
    window.module('app.chat.listChat');

  });

  beforeEach(inject((_$componentController_) => {
    $componentController = _$componentController_;
  }));


  it('should define the user', function () {

    const bindings = { user: 'me' };
    const ctrl = $componentController('listChat', null, bindings);

    expect(ctrl.user).toBeDefined();
    expect(ctrl.user).toBe('me');
  });

  it('should create the list', function () {

    const bindings = { user: 'me', list: list };
    const ctrl = $componentController('listChat', null, bindings);

    expect(ctrl.list).toBeDefined();
    expect(ctrl.list).toBe(list);
  });
});

