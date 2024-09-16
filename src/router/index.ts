import { createRouter, createWebHistory } from 'vue-router';
import About from '../views/About.vue';
import AnimeDetails from '../views/AnimeDetails.vue';
import Home from '../views/Home.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/anime/:id',
        name: 'Anime Details',
        component: AnimeDetails
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;