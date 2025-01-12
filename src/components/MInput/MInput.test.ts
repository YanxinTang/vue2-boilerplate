import { mount } from '@vue/test-utils';
import MInput from './index.vue';

describe('MInput', () => {
  test('disabled by provider', () => {
    const wrapper = mount(MInput, {
      provide: {
        disabled: true,
      },
    });
    expect(wrapper.find('input[type="text"]').attributes('disabled')).toBe(
      'disabled'
    );
  });

  test('disabled by property', () => {
    const wrapper = mount(MInput, {
      propsData: {
        disabled: true,
      },
    });
    expect(wrapper.find('input[type="text"]').attributes('disabled')).toBe(
      'disabled'
    );
  });

  test('when disabled by both property and provider, the property takes precedence', () => {
    const wrapper = mount(MInput, {
      provide: {
        disabled: true,
      },
      propsData: {
        disabled: false,
      },
    });
    expect(
      wrapper.find('input[type="text"]').attributes('disabled')
    ).toBeFalsy();
  });
});
