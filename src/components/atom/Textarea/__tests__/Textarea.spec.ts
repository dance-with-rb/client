import { shallowMount } from '@vue/test-utils';

import Textarea from '../Textarea.vue';

describe('Textarea.vue', () => {
  it('Input event 속성이 제공되고 행위를 취할 수 있어야 함.', async () => {
    const wrapper = shallowMount(Textarea);
    const text = 'hello world';
    wrapper.vm.$emit('test', text);

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().test).toEqual([[text]]);
  });
});
