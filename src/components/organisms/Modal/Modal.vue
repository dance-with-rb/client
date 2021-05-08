<template>
  <div
    name="modal-backdrop"
    v-if="isOpen"
    class="modal__backdrop"
    aria-hidden
    role="dialog"
  >
    <div name="modal-wrapper" class="modal__wrapper">
      <div name="modal" class="w-2/4 bg-white rounded p-5">
        <div name="modal-header" class="flex justify-end">
          <span role="button" class="modal__close-button" @click="onClose()">
            &times;
          </span>
        </div>
        <div name="modal-body" class="modal__body">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
.modal__backdrop {
  @apply z-20 bg-black bg-opacity-50 w-full h-screen;
}

.modal__wrapper {
  @apply z-30 w-full h-screen flex items-center justify-center;
}

.modal__body {
  @apply py-3 flex justify-start;
}

.modal__close-button {
  @apply cursor-pointer select-none;
}
</style>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class Modal extends Vue {
  @Prop({ type: Boolean, default: false }) private isOpen!: boolean;

  @Prop({ type: Function }) private onSubmit?: () => void;
  @Prop({ type: Function }) private onClose!: () => void;
}
</script>
