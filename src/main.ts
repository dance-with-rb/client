import Vue from 'vue';
import VeeValidate from 'vee-validate';

import Locale from '@config/locale';

import router from './router';
import store from './store';

import App from './App.vue';

import './index.css';

Vue.config.productionTip = false;

Vue.use(VeeValidate, {
  locale: 'ko',
  dictionary: Locale.dictionary,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
