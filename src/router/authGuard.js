import { useAuthStore } from "@/stores/authStore"

const isAuthenticatedGuard = (to, from, next) => {
    const authStore = useAuthStore()
    if (!authStore.isAuthenticated && to.name !== 'login') {
        console.log("No estás autenticado")
        next({ name: 'login' }) 
    } else if (authStore.isAuthenticated && to.name === 'login') {
        console.log("Ya estás autenticado")
        next({ name: 'explore' }) 
    } else {
        console.log("Estás autenticado")
        next()
    }
}

export default isAuthenticatedGuard
