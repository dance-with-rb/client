import { shallowMount } from '@vue/test-utils';

import Header from '../Header.vue';

describe('Header.vue', () => {
  it('정상적으로 렌더링이 되어야 함', () => {
    const wrapper = shallowMount(Header);

    const renderedHeader = wrapper.findComponent({ name: 'header' });

    expect(renderedHeader.exists()).toBe(true);
  });
});
