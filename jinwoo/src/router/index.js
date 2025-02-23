
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import LoginPage from '../views/LoginPage.vue';
import SignupForm from '../views/SignupPage.vue';

const routes = [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage }, // Trang chủ
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage }, //Login
    {
      path: '/sign-up',
      name: 'SignupForm',
      component: SignupForm }, //Sign up
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
