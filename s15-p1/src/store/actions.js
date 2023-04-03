export default {
  logIn(context) {
    context.commit('toggleIsAuthorized', true);
  },
  logOut(context) {
    context.commit('toggleIsAuthorized', false);
  },
};
