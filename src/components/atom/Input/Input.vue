<template>
  <input
    type="text"
    :value="value"
    :placeholder="placeholder"
    :disabled="disabled"
    :class="[
      'input',
      { 'input--danger': danger },
      { 'input--disabled': disabled },
      { 'input--large': large },
      { 'input--fluid': fluid },
    ]"
    @input="handleInputChange"
  />
</template>
<style lang="postcss" scoped>
.input {
  @apply px-4 py-3 border border-gray-300 rounded leading-normal shadow outline-none hover:border-green-300 focus:border-green-300 transition-colors duration-300;
}

.input--danger {
  @apply border-red-400 hover:border-red-400;
}

.input--disabled {
  @apply cursor-not-allowed hover:border-gray-300;
}

.input--large {
  @apply w-96;
}

.input--fluid {
  @apply w-full;
}
</style>
<script lang="ts">
import { Component, Vue, Prop, Model, Emit } from 'vue-property-decorator';

@Component
export default class Input extends Vue {
  @Prop({ type: String }) private placeholder?: string;

  @Prop({ type: Boolean }) private large?: boolean;
  @Prop({ type: Boolean }) private fluid?: boolean;

  @Prop({ type: Boolean }) private danger?: boolean;

  @Prop({ type: Boolean }) private disabled?: boolean;

  @Model('change', { type: String }) private value!: string;

  @Emit('change')
  private handleInputChange(event: Event): string {
    const { value } = event.target as HTMLInputElement;
    return value;
  }
}
</script>
