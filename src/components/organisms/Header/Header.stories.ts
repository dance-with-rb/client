import { Story, Args, ArgTypes } from '@storybook/vue';

import Header from './Header.vue';

export default {
  title: 'Organisms/Header',
  component: Header,
};

const Template: Story = (args: Args, { argTypes }: ArgTypes) => ({
  components: { Header },
  props: Object.keys(argTypes),
  template: '<Header v-bind="$props"/>',
});

export const Default = Template.bind({});
Default.args = {};
