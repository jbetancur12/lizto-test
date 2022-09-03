import { createRouter, createWebHistory } from "vue-router";

import App from '../App.vue'

import ProductsIndex from '../components/products/ProductsIndex.vue'
import ProductsCreate from '../components/products/ProductsCreate.vue'
import ProductsEdit from '../components/products/ProductsEdit.vue'

import SuppliersIndex from '../components/suppliers/SuppliersIndex.vue'
import SuppliersCreate from '../components/suppliers/SuppliersCreate.vue'
import SuppliersEdit from '../components/suppliers/SuppliersEdit.vue'



const routes = [
    {
        path: '/home',
        name: 'home',
        component: App
    },
    {
        path: '/products',
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
    },
    {
        path: '/suppliers',
        name: 'suppliers.index',
        component: SuppliersIndex
    },
    {
        path: '/suppliers/create',
        name: 'suppliers.create',
        component: SuppliersCreate
    },
    {
        path: '/suppliers/:id/edit',
        name: 'suppliers.edit',
        component: SuppliersEdit,
        props: true
    }
]


export default createRouter({
    history: createWebHistory(),
    routes
})
