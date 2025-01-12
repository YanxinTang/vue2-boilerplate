import { mount } from '@vue/test-utils';
import MSlider from './index.vue';

describe('MSlider', () => {
  test('disabled by provider', () => {
    const wrapper = mount(MSlider, {
      provide: {
        disabled: true,
      },
    });
    expect(wrapper.find('.ant-slider').classes()).toContain(
      'ant-slider-disabled'
    );
  });

  test('disabled by property', () => {
    const wrapper = mount(MSlider, {
      propsData: {
        disabled: true,
      },
    });
    expect(wrapper.find('.ant-slider').classes()).toContain(
      'ant-slider-disabled'
    );
  });

  test('when disabled by both property and provider, the property takes precedence', () => {
    const wrapper = mount(MSlider, {
      provide: {
        disabled: true,
      },
      propsData: {
        disabled: false,
      },
    });
    expect(wrapper.find('.ant-slider').classes()).not.toContain(
      'ant-slider-disabled'
    );
  });
});
