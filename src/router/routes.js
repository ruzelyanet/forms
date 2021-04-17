import login from '@/modules/login/router'
import registration from '@/modules/registration/router'
import home from '@/modules/home/router'

const routes = [{
    path: '/auth',
    name: 'auth',
    component: () =>
        import ( /* webpackChunkName: "auth" */ "@/views/auth"),
    redirect: { name: 'login' },
    children: [login, registration]
}, {
    path: '/',
    name: 'app',
    component: () =>
        import ( /* webpackChunkName: "auth" */ "@/views/auth"),
    redirect: { name: 'home' },
    meta: { requiresAuth: true },
    children: [home]
}]

export default routes