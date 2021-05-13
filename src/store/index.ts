import Vue from 'vue';
import Vuex from 'vuex';

import common from './modules/common';
import { Common } from './modules/common/types';

export interface RootState {
  common: Common;
}

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    common,
  },
});
