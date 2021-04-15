<template>
  <div
    :class="[
      'rounded-full h-12 w-12 flex items-center justify-center cursor-pointer select-none',
      { 'bg-green-500': !isWarning && !isDanger },
      { 'bg-yellow-500': isWarning },
      { 'bg-red-500': isDanger },
    ]"
    @click="onClick()"
  >
    <div class="rounded-full h-8 w-8 bg-white flex items-center justify-center">
      <p class="font-bold">{{ count }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MapMarker extends Vue {
  @Prop({ type: Number }) private count!: number;

  @Prop({ type: Boolean }) private isWarning?: boolean;
  @Prop({ type: Boolean }) private isDanger?: boolean;

  @Prop({ type: Function }) private onClick!: () => void;
}
</script>
