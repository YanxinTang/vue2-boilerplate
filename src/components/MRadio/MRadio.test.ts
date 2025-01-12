import { mount } from '@vue/test-utils';
import MRadio from './MRadio.vue';

describe('MRadio', () => {
  test('disabled by provider', () => {
    const wrapper = mount(MRadio, {
      provide: {
        disabled: true,
      },
    });
    expect(wrapper.find('.ant-radio-input').attributes('disabled')).toBe(
      'disabled'
    );
  });

  test('disabled by property', () => {
    const wrapper = mount(MRadio, {
      propsData: {
        disabled: true,
      },
    });
    expect(wrapper.find('.ant-radio-input').attributes('disabled')).toBe(
      'disabled'
    );
  });

  test('when disabled by both property and provider, the property takes precedence', () => {
    const wrapper = mount(MRadio, {
      provide: {
        disabled: true,
      },
      propsData: {
        disabled: false,
      },
    });
    expect(wrapper.find('.ant-radio-input').attributes('disabled')).toBeFalsy();
  });
});
