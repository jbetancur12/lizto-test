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
        <div class="row">
            <div class="col-7">
                <div class="from-group"></div>
                <div class="from-group">
                    <label for="">Supplier</label>
                    <select
                        v-model="form.supplier_id"
                        name="supplier_id"
                        class="form-select"
                    >
                        <option
                            v-for="supplier in suppliers.data"
                            :value="supplier.id"
                        >
                            {{ supplier.name }}
                        </option>
                    </select>
                </div>
            </div>
            <div
                class="col-5 d-flex justify-content-center align-items-center flex-column"
            >
                <div>
                    <strong>Estado:</strong>
                    <span>
                        &nbsp;
                        {{ status[form.state] }}
                    </span>
                </div>
                <div class="d-flex gap-2 mt-3">
                    <button
                        class="btn btn-success"
                        @click.prevent="receiveState"
                    >
                        Receive
                    </button>
                    <button class="btn btn-danger">Cancel</button>
                </div>
            </div>
        </div>

        <hr class="bg-primary border-2 border-top border-primary" />

        <AddProduct />
        <hr class="bg-secondary border-2 border-top border-secondary" />
        <div class="d-flex justify-content-end align-items-baseline gap-2 mr-5">
            <strong>Total:</strong>
            <span
                >&nbsp;{{ formatter.format(purchaseDetails.grandTotal) }}</span
            >
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
import useSuppliers from "../../composables/suppliers";
import AddProduct from "./AddProduct.vue";
import { usePurchaseStore } from "../../stores/purchaseStore";
import { status, formatter } from "../../helpers/helpers.js";

const { errors, storePurchase } = usePurchases();
const { suppliers, getSuppliers } = useSuppliers();

onMounted(getSuppliers);

const purchaseDetails = usePurchaseStore();

const form = reactive({
    state: "IN_PROGRESS",
    total_cost: 1000,
    supplier_id: 3,
});

const receiveState = () => {
    form.state = "RECEIVED";
};

const savePurchase = async () => {
    await storePurchase({
        ...form,
        total_cost: purchaseDetails.grandTotal,
        products: purchaseDetails.products,
    });
};
</script>
