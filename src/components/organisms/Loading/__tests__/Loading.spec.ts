import { shallowMount } from '@vue/test-utils';

import Loading from '../Loading.vue';

describe('Loading.vue', () => {
  it('isLoading prop에 따라 상태가 변경되어야 함.', async () => {
    const wrapper = shallowMount(Loading, {
      propsData: {
        isLoading: false,
      },
    });

    await wrapper.setProps({ isLoading: true });

    const renderedLoading = wrapper.findComponent({ name: 'loading' });

    expect(renderedLoading.isVisible()).toBe(true);
  });
});
