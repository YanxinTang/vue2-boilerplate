import { mount } from '@vue/test-utils';
import Radio from 'ant-design-vue/es/radio';
import MRadioGroup from './MRadioGroup.vue';

describe('MRadioGroup', () => {
  test('render children by property', () => {
    const wrapper = mount(MRadioGroup, {
      propsData: {
        options: [
          {
            label: 'Option 1',
            value: 'option1',
          },
          {
            label: 'Option 2',
            value: 'option2',
          },
        ],
      },
    });
    expect(wrapper.findAllComponents(Radio)).toHaveLength(2);
  });

  test('render children by slots', () => {
    const wrapper = mount(MRadioGroup, {
      slots: {
        default: [
          '<a-radio value="option1">Option 1</a-radio>',
          '<a-radio value="option2">Option 2</a-radio>',
        ],
      },
    });
    expect(wrapper.findAllComponents(Radio)).toHaveLength(2);
  });

  test('disabled by provider', () => {
    const wrapper = mount(MRadioGroup, {
      provide: {
        disabled: true,
      },
      propsData: {
        options: [
          {
            label: 'Option 1',
            value: 'option1',
          },
        ],
      },
    });
    expect(wrapper.find('input[type="radio"]').attributes('disabled')).toBe(
      'disabled'
    );
  });

  test('disabled by property', () => {
    const wrapper = mount(MRadioGroup, {
      propsData: {
        options: [
          {
            label: 'Option 1',
            value: 'option1',
          },
        ],
        disabled: true,
      },
    });
    expect(wrapper.find('input[type="radio"]').attributes('disabled')).toBe(
      'disabled'
    );
  });

  test('when disabled by both property and provider, the property takes precedence', () => {
    const wrapper = mount(MRadioGroup, {
      provide: {
        disabled: true,
      },
      propsData: {
        options: [
          {
            label: 'Option 1',
            value: 'option1',
          },
        ],
        disabled: false,
      },
    });
    expect(
      wrapper.find('input[type="radio"]').attributes('disabled')
    ).toBeFalsy();
  });
});
