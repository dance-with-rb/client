import { Module } from 'vuex';

import { RootState } from '@/store';

import state from './state';
import mutations from './mutations';
import { Common } from './types';

const common: Module<Common, RootState> = {
  namespaced: true,
  state,
  mutations,
};

export default common;
