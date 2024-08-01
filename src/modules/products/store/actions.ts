import { ActionContext, CommitOptions } from 'vuex';
import { productModel } from '@/modules/products/models/product';
import { State } from './initialState';
import { MutationPayload } from './mutations';
import createFakeData from '../../../../fakeData';

/*
   ---------------------- Actions no change code -----------------------------
 */

export type ActionsPayload = {
  setPagination: [payload: number, returnVal: void];
  setFilter: [payload: string, returnVal: Promise<productModel[]>];
  refreshData: [payload: void, returnVal: void];
  getProducts: [
    payload: void,
    returnVal: Promise<productModel[]>,
  ];
};

type AugmentedActionContext = {
  commit<K extends keyof MutationPayload>(
    key: K,
    payload: MutationPayload[K],
    options?: CommitOptions
  ): void;
} & Omit<ActionContext<State, State>, 'commit'>;

type Actions = {
  [Property in keyof ActionsPayload]: (
    augContext: AugmentedActionContext,
    payload: ActionsPayload[Property][0]
  ) => ActionsPayload[Property][1];
};

/*
   ---------------------- Actions -------------------------------
 */

// It should be at backend
const itemsPerPage = 5;
let tempFakeData = createFakeData();
function refreshData() {
  tempFakeData = createFakeData();
}
function getDataFromBackend(filter: string | null = '', pagination:number = 0) {
  function filterItem(item:productModel) {
    return !filter || (item.manufacturer.toLowerCase().indexOf(filter.toLowerCase()) > -1);
  }
  const filteredData = tempFakeData.filter(filterItem);
  const filteredLength = filteredData.length;
  const neededPage = filteredData.length > itemsPerPage * pagination
    ? pagination
    : Math.floor(filteredLength / itemsPerPage) + (filteredLength % itemsPerPage === 0 ? -1 : 0);
  return {
    items: filteredData.slice(neededPage * itemsPerPage, neededPage * itemsPerPage + itemsPerPage),
    filter,
    pagination: neededPage,
    overallCount: tempFakeData.length,
    filteredCount: filteredData.length,
  };
}

export const actions: Actions = {
  setPagination({ dispatch, commit, state }, payload: number): void {
    commit('setPagination', payload);
    dispatch('getProducts');
  },
  setFilter({ dispatch, commit }, payload: string): Promise<productModel[]> {
    commit('setFilter', payload);
    return dispatch('getProducts', payload);
  },
  refreshData({ dispatch }, payload: void): void {
    tempFakeData = createFakeData();
    dispatch('getProducts');
  },
  async getProducts(con: AugmentedActionContext): Promise<productModel[]> {
    const { commit, state } = con;
    // Simply imitates backend
    const responseFromBack = getDataFromBackend(
      state.products.filter.current,
      state.products.pagination.current,
    );
    commit('setPagination', responseFromBack.pagination);
    commit('getProducts', responseFromBack);
    return new Promise<productModel[]>(() => responseFromBack.items);
  },
};

