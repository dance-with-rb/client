<template>
  <div class="p-4">
    <div class="flex items-center my-auto">
      <input
        type="checkbox"
        :id="id"
        value="yes"
        class="opacity-0 absolute h-5 w-5"
        @change="handleCheckboxChange"
      />
      <div
        class="bg-white border rounded-md border-grey-300 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500"
      >
        <svg
          class="fill-current hidden w-3 h-3 text-white pointer-events-none"
          version="1.1"
          viewBox="0 0 17 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd">
            <g transform="translate(-9 -11)" fill="#FFFFFF" fill-rule="nonzero">
              <path
                d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"
              />
            </g>
          </g>
        </svg>
      </div>
      <label :for="id" class="select-none">{{ label }}</label>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
input:checked + div {
  @apply border-transparent bg-green-500;
}

input:checked + div svg {
  @apply block;
}
</style>
<script lang="ts">
import { Component, Emit, Model, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Checkbox extends Vue {
  @Prop({ type: String }) private id!: string;

  @Prop({ type: String }) private label?: string;

  @Model('change', { type: Boolean }) private value!: boolean;

  @Emit('change')
  private handleCheckboxChange(event: Event): boolean {
    const { checked } = event.target as HTMLInputElement;
    return checked;
  }
}
</script>
