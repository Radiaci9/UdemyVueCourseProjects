import { createStore } from 'vuex';
import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';
import productModules from './modules/product';
import cartModules from './modules/cart';

const store = createStore({
  modules: {
    product: productModules,
    cart: cartModules,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
