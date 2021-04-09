import {
  createStore,
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
  createLogger,
} from 'vuex';

import {
  MutationPayload as moduleProductsMutationsPayload,
  mutations as moduleProductsMutations,
} from '@/modules/products/store/mutations';
import {
  ActionsPayload as moduleProductsActionsPayload,
  actions as moduleProductsActions,
} from '@/modules/products/store/actions';
import {
  Getters as moduleProductsGettersType,
  getters as moduleProductsGetters,
} from '@/modules/products/store/getters';
import {
  initialState as ProductsInitialState,
  State as ProductsState,
} from '@/modules/products/store/initialState';

const plugins = [];

if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger());
}


export const store = createStore({
  state: ProductsInitialState,
  mutations: { ...moduleProductsMutations },
  getters: { ...moduleProductsGetters },
  actions: { ...moduleProductsActions },
  plugins,
});

type MutationPayload = moduleProductsMutationsPayload;

type ActionsPayload = moduleProductsActionsPayload;

type Getters = moduleProductsGettersType;

/*
  ---------------------- no change code ----------------------
*/

export type Store = Omit<VuexStore<ProductsState>,
  'getters' | 'commit' | 'dispatch'> & {
  commit<K extends keyof MutationPayload>(
    key: K,
    payload: MutationPayload[K],
    options?: CommitOptions
  ): void;
} & {
  dispatch<K extends keyof ActionsPayload>(
    key: K,
    payload: ActionsPayload[K][0],
    options?: DispatchOptions
  ): ActionsPayload[K][1];
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};

export function useStore(): Store {
  return store as Store;
}
