<template>
  <div class="home">
    <Header />
    <div class="w-full h-screen pl-36 z-0 absolute" v-if="isMapLoading">
      현재 위치를 조회하고 있습니다.
    </div>
    <div id="map" class="w-full h-screen z-0 relative" />
    <Modal
      class="absolute left-0 top-0"
      :isOpen="isApplicationInfoModalOpen"
      :onClose="handleApplicationInfoModal"
    >
      <div>사이트 정보 기재 예정</div>
    </Modal>
    <Modal
      class="absolute left-0 top-0"
      v-show="selectedStation"
      :isOpen="isSelectedStationModalOpen"
      :onClose="handleSelectedStationModal"
    >
      <div class="w-full pt-4">
        <div class="flex justify-between items-center">
          <div class="flex flex-col">
            <h1 class="text-2xl font-medium">
              {{ selectedStationInfo.stationName }}
            </h1>
            <div class="flex items-center">
              <i class="fas fa-map-marker-alt mr-1" />
              <p class="my-1">{{ selectedStationAddress }}</p>
            </div>
          </div>
          <div class="flex">
            <Button
              onlyIcon
              shareKakao
              class="text-2xl"
              :onClick="shareStationInfomation"
            >
              <i class="fas fa-comment" />
            </Button>
          </div>
        </div>
        <div class="mt-5 mb-6">
          <h2>
            현재 {{ selectedStationInfo.rackTotCnt }}개의 거치대 중
            {{ selectedStationInfo.parkingBikeTotCnt }}대의 자전거가
            거치되어있습니다.({{ selectedStationInfo.shared }}%)
          </h2>
        </div>
        <div class="w-full flex items-center">
          <Button
            text="자주하는 질문"
            fluid
            secondary
            class="mr-3"
            :onClick="handleRouteFaq"
          />
          <Button
            text="불편사항 문의"
            fluid
            primary
            :onClick="handleVocRequestModal"
          />
        </div>
      </div>
    </Modal>
    <Modal
      class="absolute left-0 top-0"
      :isOpen="isVocRequestModalOpen"
      :onClose="handleVocRequestModal"
    >
      <div class="w-full pt-4 flex flex-col">
        <div class="flex">
          <Select :options="options" v-model="vocCategory" />
          <Input
            type="text"
            name="vocTitle"
            class="ml-3"
            fluid
            v-model="vocTitle"
            placeholder="문의명을 작성해주세요."
            v-validate="'required'"
            :danger="errors.has('vocTitle')"
          />
        </div>
        <p class="error-message" v-show="errors.has('vocTitle')">
          {{ errors.first('vocTitle') }}
        </p>
        <div class="mt-4 flex flex-col">
          <Textarea
            fluid
            name="vocContent"
            placeholder="문의내용을 작성해주세요."
            v-model="vocContent"
            v-validate="'required'"
            :danger="errors.has('vocContent')"
          />
          <p class="error-message" v-if="errors.has('vocContent')">
            {{ errors.first('vocContent') }}
          </p>
        </div>
        <div class="flex items-center mt-3">
          <Checkbox
            id="need-reply"
            label="수신 필요"
            class="flex-1"
            v-model="needReply"
          />
          <div v-show="needReply">
            <div>
              <Input
                placeholder="작성자명"
                name="vocAuthor"
                class="flex-1 mr-3"
                v-model="vocAuthor"
                v-validate="{ required: this.needReply }"
                :danger="errors.has('vocAuthor')"
              />
              <Input
                placeholder="이메일 주소"
                name="replyEmail"
                class="flex-1"
                v-model="replyEmail"
                v-validate="{ required: this.needReply, email: this.needReply }"
                :danger="errors.has('replyEmail')"
              />
            </div>
          </div>
        </div>
        <div v-show="errors.has('vocAuthor') || errors.has('replyEmail')">
          <p class="error-message">
            {{ errors.first('vocAuthor') || errors.first('replyEmail') }}
          </p>
        </div>
        <div v-show="needReply" class="my-2">
          <p class="text-sm text-gray-500 text-center">
            <i class="fas fa-exclamation-circle" /> 작성자명과 이메일 주소는
            문의 <b>답변 발신을 위한 용도</b> 외에는 사용되지 않습니다.
          </p>
        </div>
        <div class="flex justify-end mt-1">
          <Button primary :onClick="handlePostVoc">확인</Button>
        </div>
      </div>
    </Modal>
    <WeatherBox
      class="z-10 absolute right-5 top-5"
      :location="location"
      :temperature="currentTemperature"
      :precipitation="currentPrecipitation"
      :fineDust="currentFinedust"
      v-show="canVisibleWeatherBox"
    />
    <Button
      primary
      onlyIcon
      class="z-10 absolute right-5 bottom-5 text-3xl"
      :onClick="handleApplicationInfoModal"
    >
      <i class="fas fa-question" />
    </Button>
  </div>
</template>
<style lang="postcss" scoped>
.error-message {
  @apply mt-2 text-red-500;
}
</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Header from '@organisms/Header';
import WeatherBox from '@organisms/WeatherBox';
import Modal from '@organisms/Modal';
import Button from '@atom/Button';
import Input from '@atom/Input';
import Select from '@atom/Select';
import Textarea from '@atom/Textarea';
import Checkbox from '@atom/Checkbox';

import Http from '@utils/http';
import { draw } from '@utils/marker';
import Finedust from '@utils/finedust';

import Urls from '@config/urls';

interface Station {
  id: number;
  stationLatitude: number;
  stationLongitude: number;
  stationName: string;
  stationId: string;
  parkingBikeTotCnt: number;
  rackTotCnt: number;
}

interface GuInfomation {
  address_name: string;
  code: string;
  region_1depth_name: string;
  region_2depth_name: string;
  region_3depth_name: string;
  region_4depth_name: string;
  region_type: string;
  x: number;
  y: number;
}

interface WeatherInfomation {
  fineDust: number;
  weather: {
    precipitation: number;
    temperature: number;
  };
}

@Component({
  components: {
    Header,
    WeatherBox,
    Modal,
    Button,
    Input,
    Select,
    Textarea,
    Checkbox,
  },
})
export default class Home extends Vue {
  private latitude: number | undefined;
  private longitude: number | undefined;

  private isMapLoading = false;

  private gu = '';
  private address = '';

  private temperature = 0;
  private precipitation = 0;
  private finedust = '';

  private stations: Station[] | undefined;
  private selectedStation: Station = {
    id: 0,
    stationLatitude: 0,
    stationLongitude: 0,
    stationName: '',
    stationId: '',
    parkingBikeTotCnt: 0,
    rackTotCnt: 0,
  };

  private isApplicationInfoModalOpen = false;
  private isSelectedStationModalOpen = false;
  private isVocRequestModalOpen = false;

  private options = [
    { name: '고장 신고', value: 'break' },
    { name: '도난 신고', value: 'thiefed' },
    { name: '기타', value: 'other' },
  ];

  private vocTitle = '';
  private vocContent = '';
  private vocCategory = 'break';
  private vocAuthor = '';
  private needReply = false;
  private replyEmail = '';

  private get location(): string {
    return this.gu;
  }

  private get selectedStationInfo(): Station {
    return this.selectedStation;
  }

  private get selectedStationAddress(): string {
    return this.address;
  }

  private get currentTemperature(): number {
    return this.temperature;
  }

  private get currentPrecipitation(): number {
    return this.precipitation;
  }

  private get currentFinedust(): string {
    return this.finedust;
  }

  private get canVisibleWeatherBox(): boolean {
    return !!(this.gu && this.temperature && this.finedust);
  }

  mounted(): void {
    this.getCurrentLocation();

    // Set up kakao sdk(map, link)
    window?.kakao?.maps ? this.initialCreateMap() : this.injectScript();
    new window.Kakao.init(process.env.VUE_APP_KAKAOMAP_API_KEY);
    this.getInitialStationMarkers();
  }

  private injectScript(): void {
    if (typeof document !== 'undefined' && typeof window !== 'undefined') {
      const script = document.createElement('script');

      script.onload = () => window.kakao.maps.load(this.initialCreateMap);
      script.src = `http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&libraries=services&appkey=${process.env.VUE_APP_KAKAOMAP_API_KEY}`;

      document.head.appendChild(script);
    }
  }

  // FIXME: 좀 더 우아한 지도 생성 및 조회
  private initialCreateMap(): void {
    this.handleMapLoadingState();

    if (typeof document !== 'undefined' && typeof window !== 'undefined') {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;

          this.latitude = latitude;
          this.longitude = longitude;

          const mapContainer = document.getElementById('map') as HTMLElement;

          const mapOptions = {
            center: new window.kakao.maps.LatLng(latitude, longitude),
            level: 3,
          };

          this.handleChangeLoaction(longitude, latitude);

          const map = new window.kakao.maps.Map(mapContainer, mapOptions);

          window.kakao.maps.event.addListener(map, 'dragend', () => {
            const { La, Ma } = map.getCenter();

            this.handleChangeLoaction(La, Ma);
          });

          const currentPositionMarker = new window.kakao.maps.Marker({
            position: map.getCenter(),
          });
          const stationMarkers = this.stations?.map((station) => {
            const {
              stationId,
              stationLatitude,
              stationLongitude,
              parkingBikeTotCnt: count,
            } = station;
            return {
              stationId,
              position: new window.kakao.maps.LatLng(
                stationLatitude,
                stationLongitude,
              ),
              count,
            };
          });

          stationMarkers?.forEach((marker) => {
            const { stationId, count, position } = marker;
            const content = draw(count, () => this.openStationModal(stationId));

            new window.kakao.maps.CustomOverlay({ map, position, content });
          });

          currentPositionMarker.setMap(map);
          this.handleMapLoadingState();
        });
      }
    }
  }

  private async getInitialStationMarkers(): Promise<void> {
    const response = await Http.get<Station[]>(Urls.getStations);

    if (response?.data) {
      this.stations = response.data;
    }
  }

  private async openStationModal(id: string): Promise<void> {
    this.handleSelectedStationModal();

    const stationInfomation = this.stations?.find(
      (station) => station.stationId === id,
    ) as Station;

    const callback = (
      result: any[],
      status: 'ERROR' | 'OK' | 'ZERO_RESULT',
    ) => {
      if (status === 'OK') {
        this.address = result[0].address.address_name;
      }
    };

    new window.kakao.maps.services.Geocoder().coord2Address(
      stationInfomation.stationLongitude,
      stationInfomation.stationLatitude,
      callback,
    );

    this.selectedStation = stationInfomation as Station;
  }

  private async getCurrentLocation(): Promise<void> {
    if ('geolocation' in navigator) {
      await navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;

        this.latitude = latitude;
        this.longitude = longitude;
      });
    }
  }

  private handleApplicationInfoModal(): void {
    this.isApplicationInfoModalOpen = !this.isApplicationInfoModalOpen;
  }

  private handleSelectedStationModal(): void {
    this.isSelectedStationModalOpen = !this.isSelectedStationModalOpen;
  }

  private handleVocRequestModal(): void {
    this.isVocRequestModalOpen = !this.isVocRequestModalOpen;
  }

  private handleMapLoadingState(): void {
    this.isMapLoading = !this.isMapLoading;
  }

  private handleChangeLoaction(longitude: number, latitude: number): void {
    const callback = (
      result: GuInfomation[],
      status: 'ERROR' | 'OK' | 'ZERO_RESULT',
    ) => {
      if (status === 'OK') {
        this.gu = result[0].region_2depth_name;
        this.getWeather(latitude, longitude, result[0].region_2depth_name);
      }
    };

    new window.kakao.maps.services.Geocoder().coord2RegionCode(
      longitude,
      latitude,
      callback,
    );
  }

  private handleRouteFaq(): void {
    window.open(
      'https://www.bikeseoul.com/customer/opinionBoard/opinionBoardList.do',
      '_blank',
    );
  }

  private async getWeather(
    nx: number,
    ny: number,
    stationName: string,
  ): Promise<void> {
    const response = await Http.get<WeatherInfomation>('/weather', {
      params: {
        nx: nx.toFixed(0),
        ny: ny.toFixed(0),
        stationName,
      },
    });

    if (response?.data) {
      const { fineDust, weather } = response.data;

      this.temperature = weather.temperature;
      this.precipitation = weather.precipitation;
      this.finedust = Finedust.convertFinedustLevel(fineDust);
    }
  }

  private shareStationInfomation(): void {
    const { stationName, parkingBikeTotCnt } = this.selectedStation;
    const address = this.address;

    window?.Kakao?.Link?.sendDefault({
      objectType: 'location',
      address,
      addressTitle: stationName,
      content: {
        title: stationName,
        description: `현재 대여소에 ${parkingBikeTotCnt}대의 자전거가 있어요!`,
        imageUrl:
          'https://user-images.githubusercontent.com/61655667/119266386-92583c00-bc25-11eb-98ca-27a7d9871fab.png',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
    });
  }

  private async handlePostVoc(): void {
    this.$validator.validateAll().then((isValid) => {
      if (isValid) {
        const { id } = this.selectedStationInfo;
        const {
          vocTitle,
          vocContent,
          vocCategory,
          vocAuthor,
          needReply,
          replyEmail,
        } = this;

        // 로그인 로직 작성
        const response = await Http.post(Urls.voc, {});
      }
    });
  }
}
</script>
