import { createRouter, createWebHistory } from "vue-router";

import ProductsIndex from '../components/products/ProductsIndex.vue'
import ProductsCreate from '../components/products/ProductsCreate.vue'
import ProductsEdit from '../components/products/ProductsEdit.vue'


const routes = [
    {
        path: '/home',
        name: 'products.index',
        component: ProductsIndex
    },
    {
        path: '/products/create',
        name: 'products.create',
        component: ProductsCreate
    },
    {
        path: '/products/:id/edit',
        name: 'products.edit',
        component: ProductsEdit,
        props: true
    }
]


export default createRouter({
    history: createWebHistory(),
    routes
})
