<template>
    <h5><span class="badge bg-success">Editar Suppliers</span></h5>

    <form @submit.prevent="saveSupplier">
        <div class="from-group">
            <label for="">Nombre del Suppliers</label>
            <input
                v-model="supplier.name"
                type="text"
                name="name"
                class="form-control"
            />
        </div>
        <div class="form-group mt-2">
            <button class="btn btn-sm btn-success">Guardar</button>
        </div>
    </form>
</template>

<script>
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
        const { errors, supplier, getSupplier, updateSupplier } =
            useSuppliers();
        onMounted(getSupplier(props.id));

        const saveSupplier = async () => {
            await updateSupplier(props.id);
        };
        return {
            errors,
            supplier,
            saveSupplier,
        };
    },
};
</script>
