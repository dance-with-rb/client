import { shallowMount } from '@vue/test-utils';

import Button from '../Button.vue';

describe('Button.vue', () => {
  it('정해진 Prop에 따라 버튼 텍스트가 변경되어야 함', () => {
    const text = '테스트';
    const wrapper = shallowMount(Button, {
      propsData: { text },
    });

    expect(wrapper.text()).toBe(text);
  });

  it('Button event 속성이 제공되고 행위를 취할 수 있어야 함', () => {
    const onClick = jest.fn();

    const wrapper = shallowMount(Button, {
      propsData: {
        onClick,
      },
    });

    wrapper.trigger('click');
    expect(onClick).toHaveBeenCalled();
  });
});
