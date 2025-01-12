import { mount } from '@vue/test-utils';
import MButton from './index.vue';

describe('MButton', () => {
  test('MButton mount', () => {
    const wrapper = mount(MButton, {
      slots: {
        default: 'Button',
      },
    });
    expect(wrapper.text()).toBe('Button');
  });

  test('MButton click', async () => {
    const onClick = jest.fn();
    const wrapper = mount(MButton, {
      slots: {
        default: 'Button',
      },
      listeners: {
        click: onClick,
      },
    });
    await wrapper.trigger('click');
    expect(onClick).toHaveBeenCalled();
  });

  test('disabled by provider', () => {
    const wrapper = mount(MButton, {
      provide: {
        disabled: true,
      },
    });
    expect(wrapper.find('button.ant-btn').attributes('disabled')).toBe(
      'disabled'
    );
  });

  test('disabled by property', () => {
    const wrapper = mount(MButton, {
      propsData: {
        disabled: true,
      },
    });
    expect(wrapper.find('button.ant-btn').attributes('disabled')).toBe(
      'disabled'
    );
  });

  test('when disabled by both property and provider, the property takes precedence', () => {
    const wrapper = mount(MButton, {
      provide: {
        disabled: true,
      },
      propsData: {
        disabled: false,
      },
    });
    expect(wrapper.find('button.ant-btn').attributes('disabled')).toBeFalsy();
  });
});
