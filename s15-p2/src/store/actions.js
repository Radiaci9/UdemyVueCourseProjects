export default {
  login(context) {
    context.commit('setIsLoggedIn', true);
  },
  logout(context) {
    context.commit('setIsLoggedIn', false);
  },
};
