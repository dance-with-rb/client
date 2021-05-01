import { shallowMount } from '@vue/test-utils';

import Modal from '../Modal.vue';

describe('Modal.vue', () => {
  it('정상적으로 렌더링 되어야 함.', () => {
    const wrapper = shallowMount(Modal);

    const rendererModal = wrapper.findComponent({ name: 'modal' });

    expect(rendererModal.exists()).toBe(true);
  });

  it('닫기 버튼을 통해 닫을 수 있어야 함.', async () => {
    const wrapper = shallowMount(Modal, {
      propsData: {
        isOpen: true,
      },
    });

    await wrapper.setProps({ isOpen: false });

    const rendererModal = wrapper.findComponent({ name: 'modal' });

    await expect(rendererModal.isVisible()).toBe(false);
  });
});
