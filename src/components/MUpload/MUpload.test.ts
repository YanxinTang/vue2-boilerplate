import { mount } from '@vue/test-utils';
import MUpload from './MUpload.vue';

describe('MUpload', () => {
  test('disabled by provider', () => {
    const wrapper = mount(MUpload, {
      provide: {
        disabled: true,
      },
    });
    expect(wrapper.find('.ant-upload').classes()).toContain(
      'ant-upload-disabled'
    );
  });

  test('disabled by property', () => {
    const wrapper = mount(MUpload, {
      propsData: {
        disabled: true,
      },
    });
    expect(wrapper.find('.ant-upload').classes()).toContain(
      'ant-upload-disabled'
    );
  });

  test('when disabled by both property and provider, the property takes precedence', () => {
    const wrapper = mount(MUpload, {
      provide: {
        disabled: true,
      },
      propsData: {
        disabled: false,
      },
    });
    expect(wrapper.find('.ant-upload').classes()).not.toContain(
      'ant-upload-disabled'
    );
  });
});
