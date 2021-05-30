import { Story, Args, ArgTypes } from '@storybook/vue';

import Checkbox from './Checkbox.vue';

export default {
  title: 'Atom/Checkbox',
  component: Checkbox,
};

const Template: Story = (args: Args, { argTypes }: ArgTypes) => ({
  components: { Checkbox },
  props: Object.keys(argTypes),
  template: '<Checkbox v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {};
