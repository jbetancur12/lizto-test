import axios from "axios"
import { ref } from "vue"
import { useRouter } from "vue-router"

export default function usePurchases() {
    const errors = ref([])
    const router = useRouter()
    const purchases = ref({})
    const purchase = ref([])
    // Search
    const queryName = ref('')

    const getPurchase = async (id) => {
        let response = await axios.get('/api/purchases/' + id)
        purchase.value = response.data.data
    }

    // const getPurchases = async () => {
    //     let response = await axios.get('/api/purchases')
    //     purchases.value = response.data.data
    // }

    const getPurchases = async (page) => {
        console.log("entro");
        let response = await axios.get('/api/purchases?page=' + page + '&name=' + queryName.value)
        purchases.value = response.data
    }


    const storePurchase = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/purchases', data);
            await router.push({ name: "purchases.index" })
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors
            }
        }
    }

    const updatePurchase = async (id) => {
        errors.value = ''
        try {
            await axios.put('/api/purchases/' + id, purchase.value);
            await router.push({ name: "purchases.index" })
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors
            }
        }
    }


    const destroyPurchase = async (id) => {
        await axios.delete('api/purchases/' + id)
    }

    return {
        errors,
        purchase,
        purchases,
        queryName,
        getPurchase,
        getPurchases,
        storePurchase,
        updatePurchase,
        destroyPurchase,
    }
}
