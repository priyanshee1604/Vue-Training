import { createRouter, createWebHistory } from 'vue-router';
import RegistrationForm from '@/components/RegistrationForm.vue';
import LoginForm from '@/components/LoginForm.vue';

const routes=[
    { 
        path: '/register',
        component: RegistrationForm
    },
    {
        path: '/login',
        component: LoginForm
    }
];

const route = createRouter({
    history:createWebHistory(),
    routes
});

export default route;