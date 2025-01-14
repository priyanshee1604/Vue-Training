<!-- Create a  new branch from the last task branch 
 and add a category page which lists all products belonging to the category.  
 Create a new PR with the last task branch as the target branch.
 -->

 <!-- Add features to sort and filter out products based upon price, color or any other field on the category page -->
<template>
<div>
    <p>Sort Products:</p>
    <select v-model="sortby" @change="sortingProduct">
        <option value="price">Price</option>
        <option value="rating">Rating</option>
    </select>
    <br><br>


    <p> Filter products based on Brands</p>
    <input type="radio" name="brand" value="Apple" v-model="selectedBrand" @change="filterByBrand">Apple
    <input type="radio" name="brand" value="Samsung" v-model="selectedBrand" @change="filterByBrand">Samsung
    <input type="radio" name="brand" value="Vivo" v-model="selectedBrand" @change="filterByBrand">Vivo
    <input type="radio" name="brand" value="Realme" v-model="selectedBrand" @change="filterByBrand">Realme
    <input type="radio" name="brand" value="Oppo" v-model="selectedBrand" @change="filterByBrand">Oppo
    <br><br>

    <div>Products according to the category.</div>
    <ol>
        <li v-for="product in products" v-bind:key="product.id">{{ product }}</li>
    </ol>
</div>
</template>

<script>
import axios from 'axios';
    export default{
        data(){
            return{
                res: [],
                products: [],
                sortby: 'price',
                selectedBrand:''
            };
        },

        async beforeMount(){
           this.prod = await axios.get('https://dummyjson.com/products/category/smartphones')
           .then((response)=>{
            this.res = response.data;
            this.products = this.res.products;
        })
           .catch(err=>console.log(err));
        },

        methods:{
            sortingProduct(){
                if(this.sortby=='price')
            {
                this.products.sort((a,b)=>a.price-b.price);
            }else{
                this.products.sort((a,b)=>a.rating-b.rating);

            }
        },
        filterByBrand() {
            
            this.products = [...this.res.products];
            this.products = this.products.filter(product => {
             return product.brand === this.selectedBrand;
            });
        }
    }
}

</script>
