<template>
  <div id="app">
    <router-view />
    <Loading :isLoading="isLoading" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Loading from '@organisms/Loading';
import NavigationBar from '@organisms/NavigationBar';

@Component({ components: { Loading, NavigationBar } })
export default class App extends Vue {
  private isLoading = this.$store.getters['common/getLoadingState'];
}
</script>
