import { createStore } from "vuex";
const store = createStore ({
    state:{
        cart:{}
    },
    mutations:{
        add_To_Cart(state, productId) {
            const id = String(productId); 
      
            if (state.cart[id]) {
              state.cart[id]++;
            } else {
              state.cart[id] = 1;
            }
          }
    },
    actions: {
        addToCart({ commit }, id) {
          commit('add_To_Cart', id);
        },
    },
    getters: {
        cartItems() {
          return this.state.cart;
        }
      }
});
export default store;