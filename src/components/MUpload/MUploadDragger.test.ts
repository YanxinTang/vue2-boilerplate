import { mount } from '@vue/test-utils';
import MUploadDragger from './MUploadDragger.vue';

// Break cycle dependency
jest.mock('ant-design-vue/es/upload/Upload');

describe('MUploadDragger', () => {
  test('disabled by provider', () => {
    const wrapper = mount(MUploadDragger, {
      provide: {
        disabled: true,
      },
    });
    expect(wrapper.find('.ant-upload').classes()).toContain(
      'ant-upload-disabled'
    );
  });

  test('disabled by property', () => {
    const wrapper = mount(MUploadDragger, {
      propsData: {
        disabled: true,
      },
    });
    expect(wrapper.find('.ant-upload').classes()).toContain(
      'ant-upload-disabled'
    );
  });

  test('when disabled by both property and provider, the property takes precedence', () => {
    const wrapper = mount(MUploadDragger, {
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
