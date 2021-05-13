import { MutationTree } from 'vuex';

import { Common, CommonMutationTypes, Mutations } from './types';

const mutations: MutationTree<Common> & Mutations = {
  [CommonMutationTypes.SET_LOADING_STATE](state: Common): void {
    state.isLoading = !state.isLoading;
  },
};

export default mutations;
