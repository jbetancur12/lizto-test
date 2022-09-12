<template>
    <h5><span class="badge bg-success">Editar Producto</span></h5>

    <form @submit.prevent="saveProduct">
        <div class="from-group">
            <label for="">Nombre del Producto</label>
            <input v-model="product.name" type="text" name="name" class="form-control" />
        </div>
        <div class="form-group mt-2">
            <button class="btn btn-sm btn-success">Guardar</button>
        </div>
    </form>
</template>

<script>
import useProducts from '../../composables/products'
import { onMounted } from 'vue'
export default {
    props: {
        id: {
            required: true,
            type: String,
        },
    },
    setup(props) {
        const { errors, product, getProduct, updateProduct } = useProducts()
        onMounted(getProduct(props.id))

        const saveProduct = async () => {
            await updateProduct(props.id)
        }
        return {
            errors,
            product,
            saveProduct,
        }
    },
}
</script>
