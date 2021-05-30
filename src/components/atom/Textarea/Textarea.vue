<template>
  <textarea
    :disabled="disabled"
    :placeholder="placeholder"
    :class="[
      'textarea h-300',
      { 'textarea--danger': danger },
      { 'textarea--disabled': disabled },
      { 'textarea--large': large },
      { 'textarea--fluid': fluid },
    ]"
    @input="handleTextareaChange"
  >
  </textarea>
</template>
<style lang="postcss" scoped>
.textarea {
  @apply px-4 py-3 border border-gray-300 rounded leading-normal shadow outline-none hover:border-green-300 focus:border-green-300 transition-colors duration-300;
}

.textarea--danger {
  @apply border-red-400 hover:border-red-400;
}

.textarea--disabled {
  @apply cursor-not-allowed hover:border-gray-300;
}

.textarea--large {
  @apply w-96;
}

.textarea--fluid {
  @apply w-full;
}
</style>
<script lang="ts">
import { Component, Emit, Model, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Textarea extends Vue {
  @Prop({ type: String }) private placeholder?: string;

  @Prop({ type: Boolean }) private large?: boolean;
  @Prop({ type: Boolean }) private fluid?: boolean;

  @Prop({ type: Boolean }) private danger?: boolean;

  @Prop({ type: Boolean }) private disabled?: boolean;

  @Model('change', { type: String }) private value!: string;

  @Emit('change')
  private handleTextareaChange(event: Event): string {
    const { value } = event.target as HTMLTextAreaElement;
    return value;
  }
}
</script>
