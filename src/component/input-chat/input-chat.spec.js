import inputChat from './index';
import iputChatComponent from './input-chat.component';
import template from './input-chat.html';

describe('inputChat', () => {
  let $componentController;

  beforeEach(() => {
    window.module('app.chat.inputChat');

  });

  beforeEach(inject((_$componentController_) => {
    $componentController = _$componentController_;
  }));

  it('should define the user', function () {

    const bindings = { user: 'me' };
    const ctrl = $componentController('inputChat', null, bindings);

    expect(ctrl.user).toBeDefined();
    expect(ctrl.user).toBe('me');
  });

  it('should call the onUpdate method on submit', function () {

    const bindings = { user: 'me', onUpdate: () => { } };

    spyOn(bindings, 'onUpdate').and.callThrough();

    const ctrl = $componentController('inputChat', null, bindings);

    ctrl.onSubmit();

    expect(bindings.onUpdate).toHaveBeenCalled();

  });

  it('should call the onUpdate method on submit with a user input', function () {

    let events = null;
    const bindings = { user: 'me', onUpdate: () => { } };

    spyOn(bindings, 'onUpdate').and.callThrough();

    const ctrl = $componentController('inputChat', null, bindings);

    ctrl.text = 'text';
    ctrl.onSubmit();

    expect(bindings.onUpdate).toHaveBeenCalledWith({ $event: { user: 'me', text: 'text' } });
  });


  it('should reset the input on submit', function () {

    let events = null;
    const bindings = { user: 'me', onUpdate: () => { } };


    const ctrl = $componentController('inputChat', null, bindings);

    ctrl.text = 'text';
    ctrl.onSubmit();

    expect(ctrl.text).toBeNull();
  });

});

describe('Template', () => {
  it('includes the `form`', () => {
    expect(template).toContain('form');
  });
});

