import { Story, Args, ArgTypes } from '@storybook/vue';

import Icon from './Icon.vue';

export default {
  title: 'Atom/Icon',
  component: Icon,
};

const Template: Story = (args: Args, { argTypes }: ArgTypes) => ({
  components: { Icon },
  props: Object.keys(argTypes),
  template: `<Icon v-bind="$props">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
    </Icon>`,
});

export const Default = Template.bind({});
Default.args = {
  iconColor: 'lightgray',
};

export const Large = Template.bind({});
Large.args = {
  iconColor: 'lightgray',
  large: true,
};

export const Medium = Template.bind({});
Medium.args = {
  iconColor: 'lightgray',
  medium: true,
};

export const Small = Template.bind({});
Small.args = {
  iconColor: 'lightgray',
  small: true,
};
