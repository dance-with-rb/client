import { Story, Args, ArgTypes } from '@storybook/vue';

import Modal from './Modal.vue';

export default {
  title: 'Organisms/Modal',
  component: Modal,
};

const Template: Story = (args: Args, { argTypes }: ArgTypes) => ({
  components: { Modal },
  props: Object.keys(argTypes),
  template: `<Modal v-bind="$props">${args.body}</Modal>`,
});

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  body: `<div><h1>기본 모달</h1></div>`,
};
