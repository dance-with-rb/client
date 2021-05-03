import { Story, Args, ArgTypes } from '@storybook/vue';

import LoginForm from './LoginForm.vue';

export default {
  title: 'Organisms/LoginForm',
  component: LoginForm,
};

const Template: Story = (args: Args, { argTypes }: ArgTypes) => ({
  components: { LoginForm },
  prop: Object.keys(argTypes),
  template: '<LoginForm v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {};
