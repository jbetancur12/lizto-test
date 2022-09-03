require('./bootstrap');

import { createApp, defineComponent } from "vue";

import router from './router'
import App from './App.vue'
import ProductsIndex from './components/products/ProductsIndex'
import ProductsCreate from './components/products/ProductsCreate'
import ProductsEdit from './components/products/ProductsEdit'

import SuppliersIndex from './components/suppliers/SuppliersIndex'
import SuppliersCreate from './components/suppliers/SuppliersCreate'
import SuppliersEdit from './components/suppliers/SuppliersEdit'

import Pagination from "laravel-vue-pagination";


const root = defineComponent({
    App
})

const app = createApp(root)

app.use(router)

app.component('App', App)
app.component('ProductsIndex', ProductsIndex);
app.component('ProductsCreate', ProductsCreate);
app.component('ProductsEdit', ProductsEdit);

app.component('SuppliersIndex', SuppliersIndex);
app.component('SuppliersCreate', SuppliersCreate);
app.component('SuppliersEdit', SuppliersEdit);

app.component('Pagination', Pagination)

app.mount("#app")
