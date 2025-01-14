<!-- Create a  new branch from the last task branch 
 and Implement e-commerce web application 
 with a home page and top navigation with dead links.
 -->
<template>
   <div>HOME PAGE</div>
   <router-link to="/category">Category</router-link> <br>
   <router-link to="/product/:id">Product details</router-link><br>
   <router-link to="/cart">My Cart</router-link><br>
   <router-view/>
</template>


<script>

export default ({
   name: 'HomePage',
})
</script>
