<template>
    <h5><span class="badge bg-success">Crear Producto</span></h5>

    <div v-if="errors">
        <div v-for="(v, k) in errors" :key="k">
            <p v-for="error in v" :key="error" class="text-danger">
                {{ error }}
            </p>
        </div>
    </div>

    <form @submit.prevent="saveProduct">
        <div class="from-group">
            <label for="">Nombre del Producto</label>
            <input v-model="form.name" type="text" name="name" class="form-control" />
        </div>
        <div class="form-group mt-2">
            <button class="btn btn-sm btn-success">Guardar</button>
        </div>
    </form>
</template>

<script>
import { reactive } from 'vue'
import useProducts from '../../composables/products'

export default {
    setup() {
        const { errors, storeProduct } = useProducts()
        const form = reactive({
            name: '',
        })

        const saveProduct = async () => {
            await storeProduct({ ...form })
        }

        return {
            form,
            saveProduct,
            errors,
        }
    },
}
</script>
