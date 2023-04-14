import { createRouter, createWebHistory } from 'vue-router'


const routes = [

    {
        path: '/', name: 'Home', component: () => import( '../views/Home.vue'),  
    },
    {
        path: '/laptop', name: 'Laptop', component: () => import( '../views/Laptop.vue'),   
    
    },
    {
        path: '/monitor', name: 'monitor', component: () => import( '../views/Monitor.vue')
    
    },
    {
        path: '/avaya', name: 'Avaya', component: () => import( '../views/Avaya.vue')
    
    },
    {
        path: '/systemUnit', name: 'SystemUnit', component: () => import( '../views/SystemUnit.vue')
    
    },
    {
        path: '/:patchMatch(.*)*', name: 'NotFound', component: () => import( '../views/NotFound.vue')
    
    },
    {
        path: '/setting', name: 'setting', component: () => import( '../views/Setting.vue')
    
    },
    {
        path: '/login', name: 'login', component: () => import( '../views/Login.vue')
    
    },
    {
        path: '/addLaptop', name: 'addLaptop', component: () => import( '../addUnits/addLaptop.vue')
    
    },
]

const router = createRouter ({

    history: createWebHistory(),
    routes
  
})

export default router