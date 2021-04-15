import { shallowMount } from '@vue/test-utils';

import Input from '../Input.vue';

describe('Input.vue', () => {
  it('Input event 속성이 제공되고 행위를 취할 수 있어야 함', () => {
    const onChange = jest.fn();

    const wrapper = shallowMount(Input, {
      propsData: {
        onChange,
      },
    });

    wrapper.trigger('change');
    expect(onChange).toHaveBeenCalled();
  });
});
