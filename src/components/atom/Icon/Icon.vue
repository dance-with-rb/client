<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :class="[
      'icon',
      { 'icon--small': small },
      { 'icon--medium': medium },
      { 'icon--large': large },
    ]"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>
<style lang="postcss" scoped>
.icon {
  @apply mx-auto;
}

.icon--small {
  @apply w-4 h-4;
}

.icon--medium {
  @apply w-8 h-8;
}

.icon--large {
  @apply w-12 h-12;
}
</style>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Icon extends Vue {
  @Prop({ type: Number, default: 24 }) private width?: number;
  @Prop({ type: Number, default: 24 }) private height?: number;

  @Prop({ type: String, default: '0 0 24 24' }) private viewBox?: string;

  @Prop({ type: Boolean }) private large?: boolean;
  @Prop({ type: Boolean }) private medium?: boolean;
  @Prop({ type: Boolean }) private small?: boolean;

  @Prop({ type: String, default: 'iconName' }) private iconName?: string;

  @Prop({ type: String, default: '#F9FAFB' }) private iconColor?: string;
}
</script>
