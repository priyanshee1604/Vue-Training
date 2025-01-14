import { createStore } from "vuex";
const store = createStore ({
    state:{
        cart:{}
    },
    mutations:{
        add_To_Cart(state, productTitle) {
            const title = String(productTitle); 
            alert(`${title} added to cart`);
            if (state.cart[title]) {
              state.cart[title]++;
            } else {
              state.cart[title] = 1;
            }
          }
    },
    actions: {
        addToCart({ commit }, productTitle) {
          commit('add_To_Cart', productTitle);
        },
    },
    getters: {
        cartItems(state) {
          return state.cart;
        }
      }
});
export default store;