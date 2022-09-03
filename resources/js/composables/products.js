import axios from "axios"
import { ref } from "vue"

export default function useProducts() {
    const products = ref([])

    const getProducts = async () => {
        let response = await axios.get('/api/products')
        products.value = response.data.data
    }

    const destroyProduct = async (id) => {
        await axios.delete('api/products/' + id)
    }

    return {
        products,
        destroyProduct,
        getProducts
    }
}
