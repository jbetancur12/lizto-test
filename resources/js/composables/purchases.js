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
        console.log(id);
        let response = await axios.get('/api/purchases/' + id)
        purchase.value = response.data.data
    }


    const getPurchases = async (page) => {
        let response = await axios.get('/api/purchases?page=' + page + '&name=' + queryName.value)
        purchases.value = response.data
    }


    const storePurchase = async (data) => {
        errors.value = ''
        const dataPurchase = {
                state: data.state,
                total_cost: data.total_cost,
                supplier_id: data.supplier_id,

        }
         const dataPurchaseDetails = { ...data.products

        }


        try {
            const purchaseCreated = await axios.post('/api/purchases', dataPurchase);

            const newArray = data.products.map(item => ({...item, purchase_id:purchaseCreated.data.data.id}))

            console.log(newArray);

            await axios.post('/api/purchase-details', newArray);
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
