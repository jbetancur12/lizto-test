<template>
    <h5><span class="badge bg-success">Make a Purchase</span></h5>

    <div v-if="errors">
        <div v-for="(v, k) in errors" :key="k">
            <p v-for="error in v" :key="error" class="text-danger">
                {{ error }}
            </p>
        </div>
    </div>

    <form @submit.prevent="savePurchase">
        <div class="from-group">
            <label for="">Estado</label>
            <select
                v-model="form.state"
                class="form-select"
                aria-label="Default select example"
                name="state"
            >
                <option value="IN_PROGRESS">In Progress</option>
                <option value="RECEIVED">Received</option>
                <option value="CANCELLED">Canceled</option>
            </select>
        </div>

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
        </div>

        <div class="from-group">
            <label for="">Quantity</label>

            <input v-model="form.quantity" type="number" name="quantity" class="form-control" />
        </div>

        <div class="from-group">
            <label for="">Cost per Unit</label>

            <input v-model="form.cost" type="number" name="cost" class="form-control" />
        </div>

        <div class="from-group">
            <label for="">Costo Total</label>

            <input
                :value="grandTotal"
                type="number"
                name="total_cost"
                class="form-control"
                readonly
            />
        </div>
        <div class="form-group mt-2">
            <button class="btn btn-sm btn-success">Guardar</button>
        </div>
    </form>
</template>

<script>
import { onMounted, reactive } from 'vue'
import useProducts from '../../composables/products'
import usePurchases from '../../composables/purchases'
import useSuppliers from '../../composables/suppliers'

export default {
    setup() {
        const { errors, storePurchase } = usePurchases()
        const { products, getProducts } = useProducts()

        onMounted(() => {
            getProducts()
        })

        const form = reactive({
            state: 'IN_PROGRESS',
            total_cost: 1000,
            purchase_id: null,
            product_id: null,
            cost: 0,
            quantity: 0,
        })

        const savePurchase = async () => {
            await storePurchase({ ...form })
        }
        return {
            form,
            savePurchase,
            errors,
            products,
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
