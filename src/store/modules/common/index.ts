import { Module } from 'vuex';

import { RootState } from '@/store';

import state from './state';
import mutations from './mutations';
import getters from './getters';
import { Common } from './types';

const common: Module<Common, RootState> = {
  namespaced: true,
  state,
  mutations,
  getters,
};

export default common;
