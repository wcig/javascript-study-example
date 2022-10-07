import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('../view/Home.vue')
const About = () => import('../view/About.vue')
const Count = () => import('../view/Count.vue')

const routes = [
    {
        path: '/',
        redirect: 'home',
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/count',
        name: 'count',
        component: Count
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

export default router
