import { mount } from '@vue/test-utils';
import MRate from './index.vue';

describe('MRate', () => {
  test('disabled by provider', () => {
    const wrapper = mount(MRate, {
      provide: {
        disabled: true,
      },
    });
    expect(wrapper.find('.ant-rate').classes()).toContain('ant-rate-disabled');
  });

  test('disabled by property', () => {
    const wrapper = mount(MRate, {
      propsData: {
        disabled: true,
      },
    });
    expect(wrapper.find('.ant-rate').classes()).toContain('ant-rate-disabled');
  });

  test('when disabled by both property and provider, the property takes precedence', () => {
    const wrapper = mount(MRate, {
      provide: {
        disabled: true,
      },
      propsData: {
        disabled: false,
      },
    });
    expect(wrapper.find('.ant-rate').classes()).not.toContain(
      'ant-rate-disabled'
    );
  });
});
