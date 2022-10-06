import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../view/Home.vue'
import About from '../view/About.vue'
import User from '../view/User.vue'
import NotFound from '../view/NotFound.vue'
import Product1 from '../view/Product1.vue'
import Product2 from '../view/Product2.vue'
import Chapter1 from '../view/Chapter1.vue'
import Chapter2 from '../view/Chapter2.vue'
import Order1 from '../view/Order1.vue'
import Order2 from '../view/Order2.vue'

// 1. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/user/:id', component: User },
    // 参数自定义正则
    { path: '/product/:id(\\d+)', component: Product1 },
    { path: '/product/:productName', component: Product2 },
    // 可重复参数
    { path: '/chapter/:chapters+', component: Chapter1 },
    { path: '/chapter/:chapters*', component: Chapter2 },
    // 可选参数
    { path: '/order/:orderId?', component: Order1 }, // 匹配 /users 和 /users/posva
    { path: '/order/:orderId(\\d+)?', component: Order2 }, // 匹配 /users 和 /users/42
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes: routes, // `routes: routes` 的缩写
})

export default router
