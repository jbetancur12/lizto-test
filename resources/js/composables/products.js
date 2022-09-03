import axios from "axios"
import { ref } from "vue"
import { useRouter } from "vue-router"

export default function useProducts() {
    const errors = ref([])
    const router = useRouter()
    const products = ref([])
    const product = ref([])

    const getProduct = async (id) => {
        let response = await axios.get('/api/products/' + id)
        product.value = response.data.data
    }

    const getProducts = async () => {
        let response = await axios.get('/api/products')
        products.value = response.data.data
    }

    const storeProduct = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/products', data);
            await router.push({ name: "products.index" })
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors
            }
        }
    }

    const updateProduct = async (id) => {
        errors.value = ''
        try {
            await axios.put('/api/products/' + id, product.value);
            await router.push({ name: "products.index" })
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors
            }
        }
    }


    const destroyProduct = async (id) => {
        await axios.delete('api/products/' + id)
    }

    return {
        errors,
        product,
        products,
        getProduct,
        getProducts,
        storeProduct,
        updateProduct,
        destroyProduct,
    }
}
