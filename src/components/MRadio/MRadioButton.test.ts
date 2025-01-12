import { mount } from '@vue/test-utils';
import MRadioButton from './MRadioButton.vue';

describe('MRadioButton', () => {
  test('disabled by provider', () => {
    const wrapper = mount(MRadioButton, {
      provide: {
        disabled: true,
      },
    });
    expect(wrapper.find('.ant-radio-button').classes()).toContain(
      'ant-radio-button-disabled'
    );
  });

  test('disabled by property', () => {
    const wrapper = mount(MRadioButton, {
      propsData: {
        disabled: true,
      },
    });
    expect(wrapper.find('.ant-radio-button').classes()).toContain(
      'ant-radio-button-disabled'
    );
  });

  test('when disabled by both property and provider, the property takes precedence', () => {
    const wrapper = mount(MRadioButton, {
      provide: {
        disabled: true,
      },
      propsData: {
        disabled: false,
      },
    });
    expect(wrapper.find('.ant-radio-button').classes()).not.toContain(
      'ant-radio-button-disabled'
    );
  });
});
