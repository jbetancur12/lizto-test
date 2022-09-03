require('./bootstrap');

import { createApp, defineComponent } from "vue";

import router from './router'
import ProductsIndex from './components/products/ProductsIndex'
import ProductsCreate from './components/products/ProductsCreate'
import ProductsEdit from './components/products/ProductsEdit'
import Pagination from "laravel-vue-pagination";


const root = defineComponent({
    ProductsIndex
})

const app = createApp(root)

app.use(router)

app.component('ProductsIndex', ProductsIndex);
app.component('ProductsCreate', ProductsCreate);
app.component('ProductsEdit', ProductsEdit);

app.component('Pagination', Pagination)

app.mount("#app")
