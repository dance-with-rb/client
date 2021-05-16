<template>
  <div class="dashboard">
    <NavigationBar :username="username" />
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import NavigationBar from '@organisms/NavigationBar';

@Component({ components: { NavigationBar } })
export default class Dashboard extends Vue {
  private username = this.$store.getters['user/getUsername'];
}
</script>
