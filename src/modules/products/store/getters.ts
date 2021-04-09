import { GetterTree } from 'vuex';
import { productModel } from '../models/product';
import { State } from './initialState';


export type Getters = {
  currPagination(state: State): number;
  currFilter(state: State): string | null;
  products(state: State): productModel[];
};

export const getters: GetterTree<State, State> & Getters = {
  products: ({ products }) => products.items,
  currPagination: ({ products }) => products.pagination.current,
  currFilter: ({ products }) => products.filter.current,
};
