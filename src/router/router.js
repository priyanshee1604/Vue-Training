import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import CategoryPage from "@/components/CategoryPage.vue";

const routes= [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/category',
        component: CategoryPage
    }

];

const router = createRouter({ 
    history: createWebHistory(),
    routes
});

export default router;