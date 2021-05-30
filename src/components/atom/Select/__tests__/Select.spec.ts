import { shallowMount } from '@vue/test-utils';

import Select from '../Select.vue';

describe('Select.vue', () => {
  it('Change event 속성이 제공되고 행위를 취할 수 있어야 함.', async () => {
    const wrapper = shallowMount(Select);
    const options = wrapper.find('select').findAll('option');

    await options.at(1).setSelected();

    expect(wrapper.find('option:checked').element.nodeValue).toBe('bar');
  });
});
