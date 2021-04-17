<template>
  <div class="home">
    <Header />
    <div id="map" class="w-full h-screen z-0 relative" />
    <Button
      text="?"
      primary
      onlyIcon
      class="z-10 absolute right-5 bottom-5 text-xl"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Header from '@organisms/Header';
import Button from '@atom/Button';

@Component({ components: { Header, Button } })
export default class Home extends Vue {
  mounted(): void {
    window?.kakao?.maps ? this.initialCreateMap() : this.injectScript();
  }

  private injectScript(): void {
    if (typeof document !== 'undefined' && typeof window !== 'undefined') {
      const script = document.createElement('script');

      script.onload = () => window.kakao.maps.load(this.initialCreateMap);
      script.src = `http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.VUE_APP_KAKAOMAP_API_KEY}`;

      document.head.appendChild(script);
    }
  }

  private initialCreateMap(): void {
    if (typeof document !== 'undefined' && typeof window !== 'undefined') {
      const mapContainer = document.getElementById('map');
      const mapOptions = {
        center: new window.kakao.maps.LatLng(37.5717888, 127.008768),
        level: 3,
      };

      new window.kakao.maps.Map(mapContainer, mapOptions);
    }
  }
}
</script>
