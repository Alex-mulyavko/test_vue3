import { MutationTree } from 'vuex';
import { productModel } from '@/modules/products/models/product';
import { initialState, State } from './initialState';

export type MutationPayload = {
  setPagination: number;
  setFilter: string | null;
  getProducts: {
    items:productModel[],
    overallCount: number,
    filteredCount: number
  };
};

type Mutations = {
  [Property in keyof MutationPayload]: (
    state: State,
    payload: MutationPayload[Property]
  ) => void;
};

export const mutations: MutationTree<State> & Mutations = {
  setPagination(state, payload) {
    state.products.pagination.current = payload;
  },
  setFilter(state, payload) {
    state.products.filter.current = payload;
  },
  getProducts(state, payload) {
    state.products.items = payload.items;
    state.products.overallCount = payload.overallCount;
    state.products.filteredCount = payload.filteredCount;
  },
};
