import { Story, Args, ArgTypes } from '@storybook/vue';

import Textarea from './Textarea.vue';

export default {
  title: 'Atom/Textarea',
  component: Textarea,
};

const Template: Story = (args: Args, { argTypes }: ArgTypes) => ({
  components: { Textarea },
  props: Object.keys(argTypes),
  template: '<Textarea v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {};
