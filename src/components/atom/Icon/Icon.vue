<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :class="[
      { 'w-12 h-12': large },
      { 'w-8 h-8': medium },
      { 'w-4 w-4': small },
    ]"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Icon extends Vue {
  @Prop({ type: Number, default: 24 }) private width?: number;
  @Prop({ type: Number, default: 24 }) private height?: number;

  @Prop({ type: Boolean }) private large?: boolean;
  @Prop({ type: Boolean }) private medium?: boolean;
  @Prop({ type: Boolean }) private small?: boolean;

  @Prop({ type: String, default: 'iconName' }) private iconName?: string;

  @Prop({ type: String, default: '#F9FAFB' }) private iconColor?: string;
}
</script>
