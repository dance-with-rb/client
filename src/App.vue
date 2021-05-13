<template>
  <div id="app">
    <NavigationBar v-if="isAdminPage" />
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
  get isLoading(): boolean {
    return this.$store.getters['common/getLoadingState'];
  }

  get isAdminPage(): boolean {
    return this.$route.path.includes('/admin');
  }
}
</script>
