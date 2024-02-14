import { createRouter, createWebHashHistory } from 'vue-router'
import LoginRegisterPage from '@/pages/LoginRegisterPage.vue'

const routes = [
    { path: '/', component: LoginRegisterPage },
    { path: '/explore', component: () => import('@/pages/SearchPokemon.vue') },
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