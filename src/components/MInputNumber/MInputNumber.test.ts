import { mount } from '@vue/test-utils';
import MInputNumber from './index.vue';

describe('MInputNumber', () => {
  test('disabled by provider', () => {
    const wrapper = mount(MInputNumber, {
      provide: {
        disabled: true,
      },
    });
    expect(wrapper.find('input').attributes('disabled')).toBe('disabled');
  });

  test('disabled by property', () => {
    const wrapper = mount(MInputNumber, {
      propsData: {
        disabled: true,
      },
    });
    expect(wrapper.find('input').attributes('disabled')).toBe('disabled');
  });

  test('when disabled by both property and provider, the property takes precedence', () => {
    const wrapper = mount(MInputNumber, {
      provide: {
        disabled: true,
      },
      propsData: {
        disabled: false,
      },
    });
    expect(wrapper.find('input').attributes('disabled')).toBeFalsy();
  });
});
