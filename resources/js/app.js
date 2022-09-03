require('./bootstrap');

import { createApp } from "vue";
import router from './router'

import ProductsIndex from './components/products/ProductsIndex'


createApp({
    components: {
        ProductsIndex
    }
}).use(router).mount('#app')
