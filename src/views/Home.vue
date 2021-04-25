<template>
  <div class="home">
    <Header />
    <div id="map" class="w-full h-screen z-0 relative" />
    <WeatherBox
      class="z-10 absolute right-5 top-5"
      location="서울시 종로구"
      :temperature="23"
      fineDust="매우나쁨"
    />
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
import WeatherBox from '@organisms/WeatherBox';
import Button from '@atom/Button';

import Http from '@utils/http';
import { draw } from '@utils/marker';

import Urls from '@config/urls';

interface Station {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  stationId: string;
  totalParkingBikeCount: number;
  totalRackCount: number;
}

@Component({ components: { Header, WeatherBox, Button } })
export default class Home extends Vue {
  mounted(): void {
    window?.kakao?.maps ? this.initialCreateMap() : this.injectScript();
    this.getInitialStationMarkers();
  }

  private stations: Station[] | undefined;

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
        center: new window.kakao.maps.LatLng(37.5532737, 126.91102795),
        level: 3,
      };

      const map = new window.kakao.maps.Map(mapContainer, mapOptions);

      const currentPositionMarker = new window.kakao.maps.Marker({
        position: map.getCenter(),
      });
      const stationMarkers = this.stations?.map((station) => {
        return {
          id: station.id,
          position: new window.kakao.maps.LatLng(
            station.latitude,
            station.longitude,
          ),
          count: station.totalParkingBikeCount,
        };
      });

      stationMarkers?.forEach((marker) => {
        const { id, count, position } = marker;
        const content = draw(count, () => this.openStationModal(id));

        new window.kakao.maps.CustomOverlay({ map, position, content });
      });

      currentPositionMarker.setMap(map);
    }
  }

  private async getInitialStationMarkers(): Promise<void> {
    const response = await Http.get<Station[]>(Urls.getStations);

    if (response?.data) {
      this.stations = response.data;
    }
  }

  private openStationModal(id: number) {
    const stationInfomation = this.stations?.find(
      (station) => station.id === id,
    );

    console.log(stationInfomation);
  }
}
</script>
