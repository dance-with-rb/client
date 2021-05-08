<template>
  <input
    type="text"
    :value="value"
    :placeholder="placeholder"
    :disabled="disabled"
    :class="[
      'px-4 py-3 border border-gray-300 rounded leading-normal shadow outline-none hover:border-green-300 focus:border-green-300 transition-colors duration-300',
      { 'cursor-not-allowed hover:border-gray-300': disabled },
      { 'w-96': large },
      { 'w-full': fluid },
    ]"
    @input="handleInputChange"
  />
</template>

<script lang="ts">
import { Component, Vue, Prop, Model, Emit } from 'vue-property-decorator';

@Component
export default class Input extends Vue {
  @Prop({ type: String }) private placeholder?: string;

  @Prop({ type: Boolean }) private large?: boolean;
  @Prop({ type: Boolean }) private fluid?: boolean;

  @Prop({ type: Boolean }) private disabled?: boolean;

  @Model('change', { type: String }) private value!: string;

  @Emit('change')
  private handleInputChange(event: Event): string {
    const { value } = event.target as HTMLInputElement;
    return value;
  }
}
</script>
