import { shallowMount } from '@vue/test-utils';

import NavigationBar from '../NavigationBar.vue';

describe('NavigationBar.vue', () => {
  it('정상적으로 렌더링 되어야 함.', () => {
    const wrapper = shallowMount(NavigationBar);

    const rendererNavigationBar = wrapper.findComponent({
      name: 'navigation-bar',
    });

    expect(rendererNavigationBar.exists()).toBe(true);
  });
});
