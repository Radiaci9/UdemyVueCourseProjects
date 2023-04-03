export default {
  increase(state, num) {
    console.log(num);
    state.counter += num;
  },
  increment(state) {
    state.counter += 1;
  },
};
