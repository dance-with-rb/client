<template>
  <div class="login h-screen">
    <LoginForm />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import LoginForm from '@organisms/LoginForm';

@Component({ components: { LoginForm } })
export default class Login extends Vue {}
</script>
