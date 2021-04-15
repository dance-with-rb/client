import { Args, ArgTypes, Story } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import MapMarker from './MapMarker.vue';

export default {
  title: 'Atom/MapMarker',
  component: MapMarker,
};

const Template: Story = (args: Args, { argTypes }: ArgTypes) => ({
  components: { MapMarker },
  props: Object.keys(argTypes),
  template: '<MapMarker v-bind="$props" />',
  methods: { action: action('clicked') },
});

export const Default = Template.bind({});
Default.args = {
  count: 1,
};

export const Warning = Template.bind({});
Warning.args = {
  count: 1,
  isWarning: true,
};

export const Danger = Template.bind({});
Danger.args = {
  count: 1,
  isDanger: true,
};
