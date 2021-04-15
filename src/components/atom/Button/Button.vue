<template>
  <button
    :class="[
      'px-5 py-3 rounded bg-gray-300 text-white leading-normal font-bold hover:bg-gray-400 transition-colors duration-300 focus:ring ring-gray-200 focus:outline-none',
      { 'bg-green-500 hover:bg-green-600 focus:ring ring-green-200': primary },
      {
        'bg-opacity-0 hover:bg-green-50 text-green-500 ring-opacity-0': secondary,
      },
      {
        'bg-gray-400 text-gray-500 hover:bg-gray-400 cursor-not-allowed ring-opacity-0 ': disabled,
      },
      { 'w-full': fluid },
      { 'rounded-full w-14 h-14 flex items-center justify-center': onlyIcon },
    ]"
    :disabled="disabled"
    @click="onClick()"
  >
    {{ text }}
  </button>
</template>

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

  @Prop({ type: Function }) private onClick!: () => void;
}
</script>
