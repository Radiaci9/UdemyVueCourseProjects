export default {
  addProductToCart(context, payload) {
    const prodId = payload.id;
    const products = context.rootGetters['product/products'];
    const product = products.find((prod) => prod.id === prodId);
    context.commit('addProductToCart', product);
  },
  removeProductFromCart(context, payload) {
    context.commit('removeProductFromCart', payload);
  },
};
