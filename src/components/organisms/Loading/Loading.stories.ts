import { Story, Args, ArgTypes } from '@storybook/vue';

import Loading from './Loading.vue';

export default {
  title: 'Organisms/Loading',
  component: Loading,
};

const Template: Story = (args: Args, { argTypes }: ArgTypes) => ({
  components: { Loading },
  props: Object.keys(argTypes),
  template: '<Loading v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  isLoading: true,
};
