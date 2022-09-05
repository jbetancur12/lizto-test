<template>
    <h5><span class="badge bg-success">Crear Purchaseo</span></h5>

    <div v-if="errors">
        <div v-for="(v, k) in errors" :key="k">
            <p class="text-danger" v-for="error in v" :key="error">
                {{ error }}
            </p>
        </div>
    </div>

    <form @submit.prevent="savePurchase">
        <div class="from-group">
            <label for="">Estado</label>
            <select
                class="form-select"
                aria-label="Default select example"
                v-model="form.state"
                name="state"
            >
                <option value="IN_PROGRESS">In Progress</option>
                <option value="RECEIVED">Received</option>
                <option value="CANCELLED">Canceled</option>
            </select>
            <!-- <input
                v-model="form.state"
                type="text"
                name="state"
                class="form-control"
            /> -->
        </div>
        <div class="from-group">
            <label for="">Costo Total</label>

            <input
                v-model="form.total_cost"
                type="number"
                name="total_cost"
                class="form-control"
            />
        </div>
        <div class="from-group">
            <label for="">Supplier Id</label>
            <!-- <input
                v-model="form.supplier_id"
                type="number"
                name="supplier_id"
                class="form-control"
            /> -->

            <select
                v-model="form.supplier_id"
                name="supplier_id"
                class="form-select"
            >
                <option v-for="supplier in suppliers.data" :value="supplier.id">
                    {{ supplier.name }}
                </option>
            </select>
        </div>
        <div class="form-group mt-2">
            <button class="btn btn-sm btn-success">Guardar</button>
        </div>
    </form>
</template>

<script>
import { onMounted, reactive } from "vue";
import usePurchases from "../../composables/purchases";
import useSuppliers from "../../composables/suppliers";

export default {
    setup() {
        const { errors, storePurchase } = usePurchases();
        const { suppliers, getSuppliers } = useSuppliers();

        onMounted(getSuppliers);

        const form = reactive({
            state: "",
            total_cost: 1000,
            supplier_id: 3,
        });

        const savePurchase = async () => {
            await storePurchase({ ...form });
        };

        return {
            form,
            savePurchase,
            errors,
            suppliers,
        };
    },
};
</script>
