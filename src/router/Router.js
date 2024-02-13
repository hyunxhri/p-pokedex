import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from '@/pages/LoginPage.vue'

const routes = [
    { path: '/', component: LoginPage },
    { path: '/explore', component: () => import('@/pages/SearchPokemon.vue') },
    { path: '/register', component: () => import('@/pages/RegisterPage.vue') },
    { path: '/profile', component: () => import('@/pages/UserProfile.vue') },
    { path: '/pokedex', component: () => import('@/pages/UserPokedex.vue') }, 
    { path: '/contact', component: () => import('@/pages/ContactPage.vue') },
    { path: '/:pathMatch(.*)*', component: () => import('@/pages/NoPageFound.vue')} 

]

const router = createRouter({ 
    history: createWebHashHistory(),
    routes, 
})

export default router