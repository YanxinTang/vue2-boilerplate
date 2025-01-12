import { mount } from '@vue/test-utils';
import MSelect from './index.vue';

describe('MSelect', () => {
  test('disabled by provider', () => {
    const wrapper = mount(MSelect, {
      provide: {
        disabled: true,
      },
    });
    expect(wrapper.find('.ant-select').classes()).toContain(
      'ant-select-disabled'
    );
  });

  test('disabled by property', () => {
    const wrapper = mount(MSelect, {
      propsData: {
        disabled: true,
      },
    });
    expect(wrapper.find('.ant-select').classes()).toContain(
      'ant-select-disabled'
    );
  });

  test('when disabled by both property and provider, the property takes precedence', () => {
    const wrapper = mount(MSelect, {
      provide: {
        disabled: true,
      },
      propsData: {
        disabled: false,
      },
    });
    expect(wrapper.find('.ant-select').classes()).not.toContain(
      'ant-select-disabled'
    );
  });
});
