<template>
  <div>
    <p><b>Product Details</b></p>
    <div v-if="product">
      <p>{{ product.title }}</p>
      <p>{{ product.description }}</p>
      <p>Price: ${{ product.price }}</p>
      <p>Rating: {{ product.rating }}</p>
      <img :src="product.images[0]" alt="Product Image" />
      <button @click="addToCart(product.title)">Add to Cart</button>
    </div>
    <p v-else>Loading product details...</p>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      product: null,
    };
  },
  async created() {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/${this.$route.params.id}`
      );
      this.product = response.data; 
    } catch (err) {
      console.error("Error fetching product details:", err);
    }
  },
  methods: {
    ...mapActions(["addToCart"]),
  },
};
</script>