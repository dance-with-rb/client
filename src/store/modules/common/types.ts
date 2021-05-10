export interface Common {
  isLoading: boolean;
}

export enum CommonMutationTypes {
  SET_LOADING_STATE = 'SET_LOADING_STATE',
}

export type Mutations<S = Common> = {
  [CommonMutationTypes.SET_LOADING_STATE](state: S): void;
};
