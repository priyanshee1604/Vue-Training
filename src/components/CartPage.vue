<template>
   <div>
    <p>Cart</p>
    <ul>
      <li v-for="(count, productId) in cartItems" :key="productId">
        Product: {{ productId }} -- Count: {{ count }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default ({
   name: 'CartPage',
   computed:{
    ...mapGetters(['cartItems'])
   }
})
</script>
