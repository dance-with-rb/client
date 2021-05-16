import { RootState } from '@/store';
import { GetterTree } from 'vuex';

import { User } from './types';

const getters: GetterTree<User, RootState> = {
  getUsername(state: User): string {
    return state.name;
  },
  isLogined(state: User): boolean {
    return !!state.name;
  },
};

export default getters;
