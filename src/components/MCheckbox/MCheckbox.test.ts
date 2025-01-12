import { mount } from '@vue/test-utils';
import MCheckbox from './MCheckbox.vue';

describe('MCheckbox', () => {
  test('disabled by provider', () => {
    const wrapper = mount(MCheckbox, {
      provide: {
        disabled: true,
      },
    });
    expect(
      wrapper.find('input.ant-checkbox-input').attributes('disabled')
    ).toBe('disabled');
  });

  test('disabled by property', () => {
    const wrapper = mount(MCheckbox, {
      propsData: {
        disabled: true,
      },
    });
    expect(
      wrapper.find('input.ant-checkbox-input').attributes('disabled')
    ).toBe('disabled');
  });

  test('when disabled by both property and provider, the property takes precedence', () => {
    const wrapper = mount(MCheckbox, {
      provide: {
        disabled: true,
      },
      propsData: {
        disabled: false,
      },
    });
    expect(
      wrapper.find('input.ant-checkbox-input').attributes('disabled')
    ).toBeFalsy();
  });
});
