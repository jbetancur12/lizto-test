<template>
    <h5><span class="badge bg-success">Editar Purchaseo</span></h5>

    <form @submit.prevent="savePurchase">
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
                v-model="form.state"
                type="text"
                name="state"
                class="form-control"
            /> -->
        </div>
        <div class="from-group">
            <label for="">Costo Total</label>

            <input
                v-model="purchase.total_cost"
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
                v-model="purchase.supplier_id"
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
import usePurchases from "../../composables/purchases";
import useSuppliers from "../../composables/suppliers";
import { onMounted } from "vue";
export default {
    props: {
        id: {
            required: true,
            type: String,
        },
    },
    setup(props) {
        const { errors, purchase, getPurchase, updatePurchase } =
            usePurchases();
        const { suppliers, getSuppliers } = useSuppliers();
        onMounted(() => {
            getPurchase(props.id);
            getSuppliers();
        });

        const savePurchase = async () => {
            await updatePurchase(props.id);
        };

        return {
            errors,
            purchase,
            savePurchase,
            suppliers,
        };
    },
};
</script>
