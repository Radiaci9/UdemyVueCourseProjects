import { createStore } from 'vuex';
import counterModule from './modules/counter';
import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';

const store = createStore({
  modules: {
    counter: counterModule,
  },
  state() {
    return {
      isAuthorized: false,
    };
  },
  mutations: rootMutations,
  getters: rootGetters,
  actions: rootActions,
});

export default store;
