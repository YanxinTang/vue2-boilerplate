import { mount } from '@vue/test-utils';
import Checkbox from 'ant-design-vue/es/checkbox';
import MCheckboxGroup from './MCheckboxGroup.vue';

describe('MCheckboxGroup', () => {
  test('render children by property', () => {
    const wrapper = mount(MCheckboxGroup, {
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
    expect(wrapper.findAllComponents(Checkbox)).toHaveLength(2);
  });

  test('render children by slots', () => {
    const wrapper = mount(MCheckboxGroup, {
      slots: {
        default: [
          '<a-checkbox value="option1">Option 1</a-checkbox>',
          '<a-checkbox value="option2">Option 2</a-checkbox>',
        ],
      },
    });
    expect(wrapper.findAllComponents(Checkbox)).toHaveLength(2);
  });

  test('disabled by provider', () => {
    const wrapper = mount(MCheckboxGroup, {
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
    expect(wrapper.find('input[type="checkbox"]').attributes('disabled')).toBe(
      'disabled'
    );
  });

  test('disabled by property', () => {
    const wrapper = mount(MCheckboxGroup, {
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
    expect(wrapper.find('input[type="checkbox"]').attributes('disabled')).toBe(
      'disabled'
    );
  });

  test('when disabled by both property and provider, the property takes precedence', () => {
    const wrapper = mount(MCheckboxGroup, {
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
      wrapper.find('input[type="checkbox"]').attributes('disabled')
    ).toBeFalsy();
  });
});
