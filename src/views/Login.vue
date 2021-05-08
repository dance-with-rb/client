<template>
  <div class="login">
    <div name="login-form" class="login__form">
      <div class="login__logo">
        <Icon
          iconName="main-logo"
          iconColor="#10B981"
          :width="95"
          :height="58"
          viewBox="0 0 95 58"
          class="mb-4"
        >
          <path
            d="M76.5169 20.4193C73.5892 20.4193 70.8562 21.1791 68.3919 22.4112L62.6756 14.6334L65.0335 9.283H71.8754V4.65069H57.9785V9.28321H59.9981L57.9599 13.9108H33.8762L33.7651 13.7533C34.7749 10.2513 35.4697 7.03641 35.9052 4.65539L46.3929 4.6462V0.013892L32.0374 0V0.00469924L32.0004 0C31.9865 0.101941 30.6803 10.4969 26.8447 19.7013C26.5158 20.4888 26.1591 21.2253 25.8116 21.9756C23.5603 20.9797 21.0866 20.4191 18.4786 20.4191C8.28729 20.4193 0 28.8178 0 39.148C0 49.4735 8.28728 57.8766 18.4784 57.8766C28.6649 57.8766 36.952 49.4735 36.952 39.148C36.952 33.1491 34.1032 27.8543 29.7626 24.4263C30.2073 23.4768 30.6566 22.527 31.0782 21.5172C31.4071 20.7344 31.685 19.9421 31.9769 19.1548L48.2226 41.5243L58.2423 41.1306C59.2335 50.5157 67.0021 57.8766 76.5214 57.8766C86.708 57.8766 94.9998 49.4735 94.9998 39.148C94.9953 28.8178 86.708 20.4193 76.5169 20.4193ZM32.3569 39.148C32.3569 46.9024 26.1311 53.2163 18.4784 53.2163C10.8256 53.2163 4.59983 46.9069 4.59983 39.148C4.59983 31.389 10.8256 25.0796 18.4784 25.0796C20.336 25.0796 22.1056 25.4641 23.7268 26.1405C21.582 30.0502 19.479 33.0705 18.1403 34.854C15.8101 35.0948 13.9666 36.9988 13.9666 39.3937C13.9666 41.9508 16.0418 44.026 18.5989 44.026C21.156 44.026 23.2312 41.9508 23.2312 39.3937C23.2312 38.4487 22.8792 37.6194 22.3928 36.8877C23.7918 34.97 25.6864 32.1626 27.6227 28.6515C30.4993 31.2313 32.3569 34.9557 32.3569 39.148ZM64.4729 25.0657C61.2071 27.9424 58.965 31.9216 58.3119 36.4613L52.957 36.6744L60.4476 19.6831L64.4729 25.0657ZM62.9348 36.2805C63.5416 33.3158 65.1028 30.7262 67.2337 28.7669L72.5655 35.9007L62.9348 36.2805ZM55.9031 18.5711L48.862 34.5434L37.2625 18.5711H55.9031ZM76.5169 53.2118C69.4758 53.2118 63.704 47.843 62.8192 40.9453L72.1116 40.5794C72.6444 42.5482 74.3676 44.0213 76.503 44.0213C79.0602 44.0213 81.1354 41.9461 81.1354 39.389C81.1354 37.235 79.6344 35.5071 77.6426 34.9884L71.1573 26.173C72.8064 25.4688 74.6176 25.0798 76.5122 25.0798C84.1648 25.0798 90.3908 31.3892 90.3908 39.1482C90.4 46.9025 84.1742 53.2118 76.5169 53.2118Z"
          />
        </Icon>
        <h1 class="login__title">따릉따릉따릉이 관리자</h1>
      </div>
      <form @submit.prevent="login">
        <div class="login__form-layout">
          <div class="login__form-row">
            <label>아이디</label>
            <Input
              type="text"
              name="username"
              large
              v-model="username"
              v-validate="'required'"
              :danger="errors.has('username')"
            />
            <p class="error-message" v-if="errors.has('username')">
              {{ errors.first('username') }}
            </p>
          </div>
          <div class="login__form-row">
            <label>비밀번호</label>
            <Input
              type="password"
              name="password"
              large
              v-model="password"
              v-validate="'required'"
              :danger="errors.has('password')"
            />
            <p class="error-message" v-if="errors.has('password')">
              {{ errors.first('password') }}
            </p>
          </div>
          <Button type="submit" text="로그인" fluid primary />
        </div>
      </form>
      <div class="forgot-tooltip">
        <p>아이디/비밀번호를 잊어버리셨나요?</p>
      </div>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
.login {
  @apply h-screen;
}

.login__form {
  @apply flex flex-col items-center justify-center h-full;
}

.login__form-layout {
  @apply flex flex-col items-center;
}

.login__form-row {
  @apply flex flex-col items-start mb-6;
}

.login__logo {
  @apply mb-6;
}

.login__title {
  @apply text-green-500 text-xl font-bold tracking-tighter;
}

.forgot-tooltip {
  @apply mt-6 cursor-pointer hover:text-green-500;
}

.error-message {
  @apply mt-2 text-red-500;
}
</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Input from '@atom/Input';
import Button from '@atom/Button';
import Icon from '@atom/Icon';

@Component({ components: { Input, Icon, Button } })
export default class Login extends Vue {
  private username = '';
  private password = '';

  private login(): void {
    this.$validator.validateAll().then((isValid) => {
      if (isValid) {
        // TODO: 로그인 API 추가
      }

      return;
    });
  }
}
</script>
