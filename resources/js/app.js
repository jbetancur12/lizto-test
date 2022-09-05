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

import PurchasesIndex from './components/purchases/PurchasesIndex'
import PurchasesCreate from './components/purchases/PurchasesCreate'
import PurchasesEdit from './components/purchases/PurchasesEdit'

import PurchaseDetailsIndex from './components/purchaseDetails/PurchaseDetailsIndex.vue'
import PurchaseDetailsCreate from './components/purchaseDetails/PurchaseDetailsCreate.vue'
import PurchaseDetailsEdit from './components/purchaseDetails/PurchaseDetailsEdit.vue'

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

app.component('PurchasesIndex', PurchasesIndex);
app.component('PurchasesCreate', PurchasesCreate);
app.component('PurchasesEdit', PurchasesEdit);

app.component('PurchaseDetailsIndex', PurchaseDetailsIndex);
app.component('PurchaseDetailsCreate', PurchaseDetailsCreate);
app.component('PurchaseDetailsEdit', PurchaseDetailsEdit);

app.component('Pagination', Pagination)

app.mount("#app")
