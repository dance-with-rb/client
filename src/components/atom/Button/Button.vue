<template>
  <button
    :class="[
      'button',
      { 'button--primary': primary },
      { 'button--secondary': secondary },
      { 'button--disabled': disabled },
      { 'button--fluid': fluid },
      { 'button--only-icon': onlyIcon },
    ]"
    :disabled="disabled"
    @click="onClick"
  >
    {{ text }}
  </button>
</template>
<style lang="postcss" scoped>
.button {
  @apply px-5 py-3 rounded bg-gray-300 text-white leading-normal font-bold hover:bg-gray-400 transition-colors duration-300 focus:ring ring-gray-200 focus:outline-none;
}

.button--primary {
  @apply bg-green-500 hover:bg-green-600 focus:ring ring-green-200;
}

.button--secondary {
  @apply bg-transparent hover:bg-green-50 text-green-500 ring-transparent;
}

.button--fluid {
  @apply w-full;
}

.button--only-icon {
  @apply rounded-full w-14 h-14 flex items-center justify-center;
}

.button--disabled {
  @apply bg-gray-300 text-gray-400 hover:bg-gray-300 cursor-not-allowed ring-opacity-0;
}
</style>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  @Prop({ type: String }) private text?: string;
  @Prop({ type: Boolean }) private onlyIcon?: boolean;

  @Prop({ type: Boolean }) private primary?: boolean;
  @Prop({ type: Boolean }) private secondary?: boolean;

  @Prop({ type: Boolean }) private fluid?: boolean;

  @Prop({ type: Boolean }) private disabled?: boolean;

  @Prop({ type: Function }) private onClick?: () => void;
}
</script>
