import { shallowMount } from '@vue/test-utils';

import Input from '../Input.vue';

describe('Input.vue', () => {
  it('Input event 속성이 제공되고 행위를 취할 수 있어야 함', async () => {
    const wrapper = shallowMount(Input);
    const text = 'hello world';
    wrapper.vm.$emit('test', text);

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().test).toEqual([[text]]);
  });
});
