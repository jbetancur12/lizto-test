<template>
    <h5><span class="badge bg-success">Edit Purchase Detail</span></h5>

    <form @submit.prevent="savePurchaseDetail">
        <div class="from-group">
            <label for="">Product</label>
            <select
                v-model="purchaseDetail.product_id"
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
                v-model="purchaseDetail.purchase_id"
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

            <input
                v-model="purchaseDetail.quantity"
                type="number"
                name="quantity"
                class="form-control"
            />
        </div>
        <div class="from-group">
            <label for="">Cost</label>

            <input v-model="purchaseDetail.cost" type="number" name="cost" class="form-control" />
        </div>
        <div class="from-group">
            <label for="">Total Cost</label>

            <input
                v-model="purchaseDetail.total_cost"
                type="number"
                name="total_cost"
                class="form-control"
            />
        </div>

        <div class="form-group mt-2">
            <button class="btn btn-sm btn-success">Save</button>
        </div>
    </form>
</template>

<script>
import usePurchaseDetails from '../../composables/purchaseDetails'
import { onMounted } from 'vue'
import useProducts from '../../composables/products'
import usePurchases from '../../composables/purchases'
export default {
    props: {
        id: {
            required: true,
            type: String,
        },
    },
    setup(props) {
        const { errors, purchaseDetail, getPurchaseDetail, updatePurchaseDetail } =
            usePurchaseDetails()
        const { products, getProducts } = useProducts()
        const { purchases, getPurchases } = usePurchases()
        onMounted(() => {
            getPurchaseDetail(props.id)
            getProducts()
            getPurchases()
        })

        const savePurchaseDetail = async () => {
            await updatePurchaseDetail(props.id)
        }

        return {
            errors,
            purchaseDetail,
            savePurchaseDetail,
            products,
            purchases,
        }
    },
}
</script>
