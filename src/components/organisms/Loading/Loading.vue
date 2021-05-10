<template>
  <!-- TODO: 로딩 아이콘 추가 -->
  <div class="loading" name="loading" v-if="isLoading" />
</template>
<style lang="postcss" scoped>
.loading {
  @apply w-full h-screen bg-black bg-opacity-50 z-20 absolute left-0 top-0;
}
</style>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Loading extends Vue {
  @Prop({ type: Boolean, default: false }) private isLoading!: boolean;
}
</script>
