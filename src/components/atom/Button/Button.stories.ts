import { Story, Args, ArgTypes } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import Button from './Button.vue';

export default {
  title: 'Atom/Button',
  component: Button,
};

const Template: Story = (args: Args, { argTypes }: ArgTypes) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: '<Button v-bind="$props" />',
  methods: { action: action('clicked') },
});

export const Default = Template.bind({});
Default.args = {
  text: 'Default Button',
};

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary Button',
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Secondary Button',
  secondary: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Button',
  disabled: true,
};

export const Fluid = Template.bind({});
Fluid.args = {
  text: 'Fluid Button',
  fluid: true,
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
  text: '💡',
  onlyIcon: true,
};
