import { mount } from '@vue/test-utils';
import MSwitch from './index.vue';

describe('MSwitch', () => {
  test('disabled by provider', () => {
    const wrapper = mount(MSwitch, {
      provide: {
        disabled: true,
      },
    });
    expect(wrapper.find('button.ant-switch').attributes('disabled')).toBe(
      'disabled'
    );
  });

  test('disabled by property', () => {
    const wrapper = mount(MSwitch, {
      propsData: {
        disabled: true,
      },
    });
    expect(wrapper.find('button.ant-switch').attributes('disabled')).toBe(
      'disabled'
    );
  });

  test('when disabled by both property and provider, the property takes precedence', () => {
    const wrapper = mount(MSwitch, {
      provide: {
        disabled: true,
      },
      propsData: {
        disabled: false,
      },
    });
    expect(
      wrapper.find('button.ant-switch').attributes('disabled')
    ).toBeFalsy();
  });
});
