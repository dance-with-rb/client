<template>
  <div
    name="modal-backdrop"
    v-if="isOpen"
    class="z-20 bg-black bg-opacity-50 w-full h-screen"
    aria-hidden
    role="dialog"
  >
    <div
      name="modal-wrapper"
      class="z-30 w-full h-screen flex items-center justify-center"
    >
      <div name="modal" class="w-2/4 bg-white rounded p-5">
        <div name="modal-header" class="flex justify-end">
          <span
            role="button"
            class="cursor-pointer select-none"
            @click="onClose()"
          >
            &times;
          </span>
        </div>
        <div name="modal-body" class="py-3 flex justify-start">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class Modal extends Vue {
  @Prop({ type: Boolean, default: false }) private isOpen!: boolean;

  @Prop({ type: Function }) private onSubmit?: () => void;
  @Prop({ type: Function }) private onClose!: () => void;
}
</script>
