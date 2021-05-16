import { Module } from 'vuex';

import { RootState } from '@/store';

import state from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import { User } from './types';

const user: Module<User, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default user;
