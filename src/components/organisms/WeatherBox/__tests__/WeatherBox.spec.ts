import { shallowMount } from '@vue/test-utils';

import WeatherBox from '../WeatherBox.vue';

describe('WeatherBox.vue', () => {
  it('정상적으로 렌더링 되어야 함', () => {
    const wrapper = shallowMount(WeatherBox);

    const rendererWeatherBox = wrapper.findComponent({ name: 'weather-box' });

    expect(rendererWeatherBox.exists()).toBe(true);
  });
});
