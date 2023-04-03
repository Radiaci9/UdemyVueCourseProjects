export default {
  increase(context, payload) {
    console.log('🚀 ~ file: main.js:34 ~ increase ~ context:', context);
    setTimeout(() => {
      context.commit('increase', payload);
    }, 2000);
  },
  increment(context) {
    setTimeout(() => {
      context.commit('increment');
    }, 2000);
  },
};
