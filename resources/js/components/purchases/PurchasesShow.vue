<template>
    <h5><span class="badge bg-success">Crear Purchaseo</span></h5>

    <div v-if="errors">
        <div v-for="(v, k) in errors" :key="k">
            <p class="text-danger" v-for="error in v" :key="error">
                {{ error }}
            </p>
        </div>
    </div>

    <form>
        <div class="from-group">
            <label for="">Estado</label>
            <select
                class="form-select"
                aria-label="Default select example"
                v-model="purchase.state"
                name="state"
            >
                <option value="IN_PROGRESS">In Progress</option>
                <option value="RECEIVED">Received</option>
                <option value="CANCELLED">Canceled</option>
            </select>
            <!-- <input
                v-model="purchase.state"
                type="text"
                name="state"
                class="form-control"
            /> -->
        </div>
        <!-- <div class="from-group">
            <label for="">Costo Total</label>

            <input
                :value="purchaseDetails.grandTotal"
                type="number"
                name="total_cost"
                class="form-control"
            />
        </div> -->
        <div class="from-group">
            <label for="">Supplier Id</label>
            <select
                v-model="purchase.supplier_id"
                name="supplier_id"
                class="form-select"
            >
                <option v-for="supplier in suppliers.data" :value="supplier.id">
                    {{ supplier.name }}
                </option>
            </select>
        </div>

        <hr class="bg-primary border-2 border-top border-primary" />

        <AddProduct :purchaseId="props.id" />
        <hr class="bg-secondary border-2 border-top border-secondary" />
        <div class="d-flex justify-content-end align-items-baseline gap-2 mr-5">
            <strong>Total:</strong>
            <span>&nbsp;{{ purchaseDetails.grandTotal }}</span>
        </div>

        <div class="form-group mt-2">
            <button
                class="btn btn-sm btn-success"
                @click.prevent="savePurchase"
            >
                Guardar
            </button>
        </div>
    </form>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import usePurchases from "../../composables/purchases";
import usePurchaseDetails from "../../composables/purchaseDetails";
import useSuppliers from "../../composables/suppliers";
import AddProduct from "./AddProduct.vue";
import { usePurchaseStore } from "../../stores/purchaseStore";

const { errors, purchase, getPurchase, updatePurchase } = usePurchases();

const { suppliers, getSuppliers } = useSuppliers();

const props = defineProps(["id"]);

onMounted(() => {
    getPurchase(props.id);
    getSuppliers();
});

const purchaseDetails = usePurchaseStore();

const savePurchase = async () => {};
</script>