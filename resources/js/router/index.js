import { createRouter, createWebHistory } from "vue-router";

import ProductsIndex from '../components/products/ProductsIndex.vue'


const routes = [
    {
        path: '/home',
        name: 'products.index',
        component: ProductsIndex
    }
]


export default createRouter({
    history: createWebHistory(),
    routes
})
