<template>
   <div>
    <p>Cart</p>
    <ul>
      <li v-for="(count, productId) in cartItems" :key="productId">
        Product ID: {{ productId }} | Count: {{ count }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default ({
   computed:{
    ...mapGetters(['cartItems'])
   }
})
</script>
