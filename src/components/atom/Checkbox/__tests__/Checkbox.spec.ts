import { shallowMount } from '@vue/test-utils';

import Checkbox from '../Checkbox.vue';

describe('Checkbox.vue', () => {
  it('Change event 속성이 제공되고 행위를 취할 수 있어야 함.', () => {
    const wrapper = shallowMount(Checkbox);
  });
});
