import { GetterTree } from 'vuex';

import { Common } from './types';

const getters: GetterTree<Common, unknown> = {
  getLoadingState(state: Common): boolean {
    return state.isLoading;
  },
};

export default getters;
