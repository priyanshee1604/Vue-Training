import { createWebHistory, createRouter } from "vue-router";
import CategoryPage from "@/components/CategoryPage.vue";
import ProductDetail from "@/components/ProductDetail.vue";
const routes= [
    {
        path: '/category',
        component: CategoryPage
    },
    {
        path: '/product/:id',
        component: ProductDetail,
        props: true
    },
    

];

const router = createRouter({ 
    history: createWebHistory(),
    routes
});

export default router;