<!-- Create a  new branch from the last task branch 
 and add a category page which lists all products belonging to the category.  
 Create a new PR with the last task branch as the target branch.
 -->
<template>
    <div>Products according to the category.</div><br>
    <ol>
        <li v-for="product in products" v-bind:key="product.id">{{ product }}</li>
    </ol>
</template>

<script>
import axios from 'axios';
    export default{
        data(){
            return{
                products: []
            };
        },

        async beforeMount(){
           this.prod = await axios.get('https://dummyjson.com/products/category/smartphones')
           .then((response)=>{
            this.products = response.data.products;
        })
           .catch(err=>console.log(err));
        },
    }

</script>
