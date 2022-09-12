<template>
    <h5><span class="badge bg-success">Create Purchase Detail</span></h5>

    <div v-if="errors">
        <div v-for="(v, k) in errors" :key="k">
            <p v-for="error in v" :key="error" class="text-danger">
                {{ error }}
            </p>
        </div>
    </div>

    <form @submit.prevent="savePurchaseDetail">
        <div class="from-group">
            <label for="">Product</label>
            <select
                v-model="form.product_id"
                class="form-select"
                aria-label="Default select example"
                name="product_id"
            >
                <option v-for="product in products.data" :key="product.id" :value="product.id">
                    {{ product.name }}
                </option>
            </select>
            <label for="">Purchase Id</label>
            <select
                v-model="form.purchase_id"
                class="form-select"
                aria-label="Default select example"
                name="purchase_id"
            >
                <option v-for="purchase in purchases.data" :key="purchase.id" :value="purchase.id">
                    {{ purchase.id }}
                </option>
            </select>
        </div>
        <div class="from-group">
            <label for="">Quantity</label>

            <input v-model="form.quantity" type="number" name="quantity" class="form-control" />
        </div>
        <div class="from-group">
            <label for="">Cost</label>

            <input v-model="form.cost" type="number" name="cost" class="form-control" />
        </div>
        <div class="from-group">
            <label for="">Total Cost</label>

            <input
                :value="grandTotal"
                type="number"
                name="total_cost"
                class="form-control"
                readonly
            />
        </div>

        <div class="form-group mt-2">
            <button class="btn btn-sm btn-success">Save</button>
        </div>
    </form>
</template>

<script>
import { onMounted, reactive } from 'vue'
import useProducts from '../../composables/products'
import usePurchaseDetails from '../../composables/purchaseDetails'
import usePurchases from '../../composables/purchases'

export default {
    setup() {
        const { errors, storePurchaseDetail } = usePurchaseDetails()
        const { products, getProducts } = useProducts()
        const { purchases, getPurchases } = usePurchases()

        onMounted(() => {
            getProducts()
            getPurchases()
        })

        const form = reactive({
            product_id: null,
            purchase_id: null,
            quantity: 0,
            cost: 0,
            total_cost: 0,
        })

        const savePurchaseDetail = async () => {
            await storePurchaseDetail({ ...form })
        }

        return {
            form,
            savePurchaseDetail,
            errors,
            products,
            purchases,
        }
    },
    computed: {
        grandTotal() {
            let costTotal = this.form.cost * this.form.quantity
            this.form.total_cost = costTotal
            return costTotal
        },
    },
}
</script>
