import { shallowMount } from '@vue/test-utils';

import MapMarker from '../MapMarker.vue';

describe('MapMarker.vue', () => {
  it('정해진 Count prop에 따라 마커의 카운트가 변경되어야 함', () => {
    const count = 3;
    const wrapper = shallowMount(MapMarker, {
      propsData: { count },
    });

    expect(Number(wrapper.text())).toBe(count);
  });

  it('onClick 속성이 제공되고 행위를 취할 수 있어야 함', () => {
    const onClick = jest.fn();

    const wrapper = shallowMount(MapMarker, {
      propsData: {
        onClick,
      },
    });

    wrapper.trigger('click');
    expect(onClick).toHaveBeenCalled();
  });
});
