import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import common from './modules/common';
import user from './modules/user';

import { Common } from './modules/common/types';
import { User } from './modules/user/types';

export interface RootState {
  common: Common;
  user: User;
}

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    common,
    user,
  },
  plugins: [
    createPersistedState({
      paths: ['user'],
    }),
  ],
});
