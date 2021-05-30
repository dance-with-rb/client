import { Story, Args, ArgTypes } from '@storybook/vue';

import Select from './Select.vue';

export default {
  title: 'Atom/Select',
  component: Select,
};

const Template: Story = (args: Args, { argTypes }: ArgTypes) => ({
  components: { Select },
  props: Object.keys(argTypes),
  template: '<Select v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  options: [
    {
      name: 'Option 1',
      value: 'Value 1',
    },
    {
      name: 'Option 2',
      value: 'Value 2',
    },
    {
      name: 'Option 3',
      value: 'Value 3',
    },
  ],
};
