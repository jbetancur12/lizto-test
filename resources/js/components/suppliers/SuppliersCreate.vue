<template>
    <h5><span class="badge bg-success">Create Supplier</span></h5>

    <div v-if="errors">
        <div v-for="(v, k) in errors" :key="k">
            <p v-for="error in v" :key="error" class="text-danger">
                {{ error }}
            </p>
        </div>
    </div>

    <form @submit.prevent="saveSupplier">
        <div class="from-group">
            <label for="">Supplier Name</label>
            <input v-model="form.name" type="text" name="name" class="form-control" />
        </div>
        <div class="form-group mt-2">
            <button class="btn btn-sm btn-success">Save</button>
        </div>
    </form>
</template>

<script>
import { reactive } from 'vue'
import useSuppliers from '../../composables/suppliers'

export default {
    setup() {
        const { errors, storeSupplier } = useSuppliers()
        const form = reactive({
            name: '',
        })

        const saveSupplier = async () => {
            await storeSupplier({ ...form })
        }

        return {
            form,
            saveSupplier,
            errors,
        }
    },
}
</script>
