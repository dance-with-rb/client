import { ActionTree } from 'vuex';

import { RootState } from '@/store';

import Api from './api';

import { User, Actions, UserActionTypes } from './types';

const actions: ActionTree<User, RootState> & Actions = {
  [UserActionTypes.LOGIN]({ commit }, payload): Promise<void> {
    const { username, password } = payload;

    return Api.login({ username, password }).then(() => {
      commit('SET_USER_ACCOUNT', username);
    });
  },
};

export default actions;
