<template>
  <div name="weather-box" class="weather-box__wrapper">
    <div class="weather-box__location">
      <Icon class="h-5 w-5 mr-1" viewBox="0 0 20 20">
        <path
          fill-rule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clip-rule="evenodd"
        />
      </Icon>
      {{ location }}
    </div>
    <div class="weather-box__forecast">
      <div class="weather-box__weather">
        <Icon class="h-6 w-6 mr-2" viewBox="0 0 20 20" iconColor="#3F3F46">
          <path
            fill-rule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clip-rule="evenodd"
          />
        </Icon>
        {{ temperature }}°C
      </div>
      <div class="weather-box__fine-dust">
        <Icon class="h-6 w-6 mr-2" viewBox="0 0 20 20" iconColor="#3F3F46">
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z"
            clip-rule="evenodd"
          />
        </Icon>
        {{ fineDust }}
      </div>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
.weather-box__wrapper {
  @apply flex w-96 shadow;
}

.weather-box__location {
  @apply flex justify-center items-center bg-green-500 rounded-l h-full pl-3 pr-4 py-4 text-white font-bold text-lg;
}

.weather-box__forecast {
  @apply bg-white flex rounded-r h-full p-4 text-gray-700 font-bold text-lg;
}

.weather-box__weather {
  @apply flex justify-center items-center mr-4;
}

.weather-box__fine-dust {
  @apply flex justify-center items-center;
}
</style>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import Icon from '@atom/Icon';

@Component({ components: { Icon } })
export default class WeatherBox extends Vue {
  @Prop({ type: String }) private location!: string;

  @Prop({ type: Number }) private temperature!: number;
  @Prop({ type: String }) private fineDust!: string;
}
</script>
