import { computed } from 'vue';
import { mount } from '@vue/test-utils';
import Control from './index';

describe('Control', () => {
  test('provide.disable is primitive', () => {
    const wrapper = mount(Control, {
      propsData: {
        tag: 'AButton',
      },
      provide: {
        disabled: true,
      },
    });
    expect(wrapper.find('button.ant-btn').attributes('disabled')).toBe(
      'disabled'
    );
  });

  test('provide.disable is computed', () => {
    const wrapper = mount(Control, {
      propsData: {
        tag: 'AButton',
      },
      provide: {
        disabled: computed(() => true),
      },
    });
    expect(wrapper.find('button.ant-btn').attributes('disabled')).toBe(
      'disabled'
    );
  });
});
