import { shallowMount } from '@vue/test-utils';

import Icon from '../Icon.vue';

describe('Icon.vue', () => {
  it('Icon 내 SVG Path를 정의하고 정상적으로 아이콘이 렌더링 되어야 함', () => {
    const svgPath = `<path
                      name="icon"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />`;

    const wrapper = shallowMount(Icon, {
      slots: {
        svgPath,
      },
    });

    const iconElement = wrapper.findComponent({ name: 'icon' });

    expect(iconElement.exists()).toBe(true);
  });
});
