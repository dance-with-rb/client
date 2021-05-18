import { MutationTree } from 'vuex';

import { User, UserMutationTypes, Mutations } from './types';

const mutations: MutationTree<User> & Mutations = {
  [UserMutationTypes.SET_USER_ACCOUNT](state: User, username): void {
    state.name = username;
  },
  [UserMutationTypes.LOGOUT](state: User): void {
    state.name = '';
  },
};

export default mutations;
