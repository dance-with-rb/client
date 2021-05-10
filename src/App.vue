<template>
  <div id="app">
    <router-view />
    <Loading :isLoading="this.$store.state.common.isLoading" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Loading from '@organisms/Loading';

@Component({ components: { Loading } })
export default class App extends Vue {}
</script>
