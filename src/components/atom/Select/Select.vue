<template>
  <select class="select" :disabled="disabled" @change="handleSelectChange">
    <option v-for="option in options" :key="option.name" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>
<style lang="postcss" scoped>
.select {
  @apply px-4 py-3 border border-gray-300 rounded leading-normal shadow outline-none hover:border-green-300 focus:border-green-300 transition-colors duration-300;
}
</style>
<script lang="ts">
import { Component, Emit, Model, Prop, Vue } from 'vue-property-decorator';

interface SelectOption {
  name: string;
  value: string | number;
}

@Component
export default class Select extends Vue {
  @Prop({ type: Boolean }) private disabled?: boolean;
  @Prop({ type: Array }) private options!: SelectOption[];

  @Model('change', { type: String }) private value!: string;

  @Emit('change')
  private handleSelectChange(event: Event): string {
    const { value } = event.target as HTMLOptionElement;
    return value;
  }
}
</script>
