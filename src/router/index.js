import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

const routes = [

    {
        path: '/', name: 'Home', component: () => import('../views/Home.vue'), meta: {
            isAuth: false
        }
    },
    {
        path: '/laptop', name: 'Laptop', component: () => import('../views/Laptop.vue'), meta: {
            isAuth: true
        }

    },
    {
        path: '/monitor', name: 'monitor', component: () => import('../views/Monitor.vue'), meta: {
            isAuth: true
        }

    },
    {
        path: '/avaya', name: 'Avaya', component: () => import('../views/Avaya.vue'), meta: {
            isAuth: true
        }

    },
    {
        path: '/systemUnit', name: 'SystemUnit', component: () => import('../views/SystemUnit.vue'), meta: {
            isAuth: true
        }

    },
    {
        path: '/:patchMatch(.*)*', name: 'NotFound', component: () => import('../views/NotFound.vue'), meta: {
            isAuth: true
        }

    },
    {
        path: '/setting', name: 'setting', component: () => import('../views/Setting.vue'), meta: {
            isAuth: true
        }

    },
    {
        path: '/login', name: 'login', beforeEnter: (to, from, next) => {
            if (store.state.user) next({ name: 'home' })
            else next();
        }, component: () => import('../views/Login.vue'), meta: {
            isAuth: true
        }

    },
    {
        path: '/addLaptop', name: 'addLaptop', component: () => import('../addUnits/addLaptop.vue'), meta: {
            isAuth: true
        }

    },
]

const router = createRouter({

    history: createWebHistory(),
    routes

});



export default router