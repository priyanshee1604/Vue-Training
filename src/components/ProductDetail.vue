<template>
    <div>
      <p><b>Product Details</b></p>
      <div v-if="product">
        <p>{{ product.title }}</p>
        <p>{{ product.description }}</p>
        <p>Price: ${{ product.price }}</p>
        <p>Rating: {{ product.rating }}</p>
        <img :src="product.images[0]" />
      </div>
      <p v-else>No Product found :c</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        product: null,
      };
    },
    props: ['id'],
    async created() {
           this.prod = await axios.get(`https://dummyjson.com/products/${this.id}`)
           .then((response)=>{
            this.product = response.data;
        })
           .catch(err=>console.log(err));
        },
  };
  </script>
  
