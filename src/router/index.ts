import { createRouter, createWebHistory } from 'vue-router';
import About from '../views/AboutPage.vue';
import AnimeDetails from '../views/AnimeDetails.vue';
import AnimeSearch from '../views/AnimeSearch.vue';
import Home from '../views/HomePage.vue';

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
    },
    {
        path: '/search',
        name: 'SearchResults',
        component: AnimeSearch
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;