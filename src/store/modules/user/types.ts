import { ActionContext } from 'vuex';

import { RootState } from '@/store';

export interface User {
  name: string;
}

export interface UserRequest {
  username: string;
  password: string;
}

export enum UserMutationTypes {
  SET_USER_ACCOUNT = 'SET_USER_ACCOUNT',
}

export type Mutations<S = User> = {
  [UserMutationTypes.SET_USER_ACCOUNT](state: S, username: string): void;
};

export enum UserActionTypes {
  LOGIN = 'LOGIN',
}

export type Actions<S = User, R = RootState> = {
  [UserActionTypes.LOGIN](
    context: ActionContext<S, R>,
    userRequest: UserRequest,
  ): void;
};
