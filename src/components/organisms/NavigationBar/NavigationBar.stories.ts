import { Story, Args, ArgTypes } from '@storybook/vue';

import NavigationBar from './NavigationBar.vue';

export default {
  title: 'Organisms/NavigationBar',
  component: NavigationBar,
};

const Template: Story = (args: Args, { argTypes }: ArgTypes) => ({
  components: { NavigationBar },
  props: Object.keys(argTypes),
  template: '<NavigationBar v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {};
