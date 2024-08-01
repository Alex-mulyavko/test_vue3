import { Store } from 'vuex';
import { initialState } from './initialState';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

export default new Store({
  state: initialState,
  getters,
  actions,
  mutations,
});
