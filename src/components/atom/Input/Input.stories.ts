import { Story, Args, ArgTypes } from '@storybook/vue';

import Input from './Input.vue';

export default {
  title: 'Atom/Input',
  component: Input,
};

const Template: Story = (args: Args, { argTypes }: ArgTypes) => ({
  components: { Input },
  props: Object.keys(argTypes),
  template: '<Input v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: '이름을 입력해주세요.',
};

export const Large = Template.bind({});
Large.args = {
  large: true,
};

export const Fluid = Template.bind({});
Fluid.args = {
  fluid: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
