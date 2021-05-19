<template>
  <div name="weather-box" class="weather-box__wrapper">
    <div class="weather-box__location">
      <i class="fas fa-map-marker-alt mr-2" />
      서울시 {{ location }}
    </div>
    <div class="weather-box__forecast">
      <div class="weather-box__weather">
        <i
          :class="[
            'fas mr-1',
            { 'fa-sun': temperature && precipitation < 60 },
            { 'fa-cloud-showers-heavy': temperature && precipitation > 60 },
          ]"
        />

        {{ temperature }}°C
      </div>
      <div class="weather-box__fine-dust">
        <i
          :class="[
            'fas mr-1',
            { 'fa-grin-hearts': fineDust === '좋음' },
            { 'fa-smile': fineDust === '보통' },
            { 'fa-tired': fineDust === '나쁨' },
            { 'fa-dizzy': fineDust === '매우나쁨' },
          ]"
        />
        {{ fineDust }}
      </div>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
.weather-box__wrapper {
  @apply flex shadow;
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
  @Prop({ type: Number }) private precipitation!: number;
  @Prop({ type: String }) private fineDust!: string;
}
</script>
