import { createRouter, createWebHistory } from 'vue-router'

import App from '../App.vue'

import ProductsIndex from '../components/products/ProductsIndex.vue'
import ProductsCreate from '../components/products/ProductsCreate.vue'
import ProductsEdit from '../components/products/ProductsEdit.vue'

import SuppliersIndex from '../components/suppliers/SuppliersIndex.vue'
import SuppliersCreate from '../components/suppliers/SuppliersCreate.vue'
import SuppliersEdit from '../components/suppliers/SuppliersEdit.vue'

import PurchasesIndex from '../components/purchases/PurchasesIndex.vue'
import PurchasesCreate from '../components/purchases/PurchasesCreate.vue'
import PurchasesShow from '../components/purchases/PurchasesShow.vue'

import PurchaseDetailsIndex from '../components/purchaseDetails/PurchaseDetailsIndex.vue'
import PurchaseDetailsCreate from '../components/purchaseDetails/PurchaseDetailsCreate.vue'
import PurchaseDetailsEdit from '../components/purchaseDetails/PurchaseDetailsEdit.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: App,
    },
    {
        path: '/products',
        name: 'products.index',
        component: ProductsIndex,
    },
    {
        path: '/products/create',
        name: 'products.create',
        component: ProductsCreate,
    },
    {
        path: '/products/:id/edit',
        name: 'products.edit',
        component: ProductsEdit,
        props: true,
    },
    {
        path: '/suppliers',
        name: 'suppliers.index',
        component: SuppliersIndex,
    },
    {
        path: '/suppliers/create',
        name: 'suppliers.create',
        component: SuppliersCreate,
    },
    {
        path: '/suppliers/:id/edit',
        name: 'suppliers.edit',
        component: SuppliersEdit,
        props: true,
    },
    {
        path: '/purchases',
        name: 'purchases.index',
        component: PurchasesIndex,
    },

    {
        path: '/purchases/create',
        name: 'purchases.create',
        component: PurchasesCreate,
    },
    {
        path: '/purchases/:id/show',
        name: 'purchases.show',
        component: PurchasesShow,
        props: true,
    },

    {
        path: '/purchase-details',
        name: 'purchaseDetails.index',
        component: PurchaseDetailsIndex,
    },
    {
        path: '/purchase-details/create',
        name: 'purchaseDetails.create',
        component: PurchaseDetailsCreate,
    },
    {
        path: '/purchase-details/:id/edit',
        name: 'purchaseDetails.edit',
        component: PurchaseDetailsEdit,
        props: true,
    },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})
