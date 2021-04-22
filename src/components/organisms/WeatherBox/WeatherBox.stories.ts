import { Story, Args, ArgTypes } from '@storybook/vue';

import WeatherBox from './WeatherBox.vue';

export default {
  title: 'Organisms/WeatherBox',
  component: WeatherBox,
};

const Template: Story = (args: Args, { argTypes }: ArgTypes) => ({
  components: { WeatherBox },
  props: Object.keys(argTypes),
  template: '<WeatherBox v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  location: '서울시 종로구',
  temperature: 16,
  fineDust: '매우나쁨',
};
