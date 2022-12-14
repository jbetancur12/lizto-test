import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { usePurchaseStore } from '../stores/purchaseStore'
import swal from 'sweetalert'

export default function usePurchases() {
    const purchaseDetailsStore = usePurchaseStore()
    const errors = ref([])
    const router = useRouter()
    const purchases = ref({})
    let purchasesDetails = ref([])
    const purchase = ref([])
    // Search
    const queryName = ref('')

    const getPurchase = async (id) => {
        let response = await axios.get('/api/purchases/' + id)
        purchase.value = response.data.data
        purchaseDetailsStore.updateTotal(response.data.data.total_cost);
    }

    const getPurchases = async () => {
        let response = await axios.get('/api/purchases')
        purchases.value = response.data
    }

    const storePurchase = async (data) => {
        errors.value = ''
        const dataPurchase = {
            state: data.state,
            total_cost: data.total_cost,
            supplier_id: data.supplier_id,
        }


        try {
            const purchaseCreated = await axios.post('/api/purchases', dataPurchase)

            const newArray = data.products.map((item) => ({
                ...item,
                purchase_id: purchaseCreated.data.data.id,
            }))

            await axios.post('/api/purchase-details', newArray)
            swal('Success!', 'Purchase already created!', 'success')
            await router.push({ name: 'purchases.index' })
        } catch (error) {
            console.log(error.response);
            if (error.response.status === 422) {
                errors.value = error.response.data.errors
            }
        }
    }

    const updatePurchase = async (id) => {
        errors.value = ''
        purchase.value.total_cost = purchaseDetailsStore.grandTotal
        try {
            const purchaseUpdated = await axios.put('/api/purchases/' + id, purchase.value)
            const purchase_id = purchaseUpdated.data.data.id
            for (const item of purchaseDetailsStore.products) {
                if (item.hasOwnProperty('purchase_id')) {
                    await axios.put('/api/purchase-details/' + item.id, item)
                } else {
                    await axios.post('/api/purchase-details', [
                        { ...item, purchase_id: purchase_id },
                    ])
                }
            }
            // await axios.put('/api/purchase-details/', newArray )
            swal('Success!', 'Purchase already updated!', 'success')
            await router.push({ name: 'purchases.index' })
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
        purchasesDetails,
        queryName,
        getPurchase,
        getPurchases,
        storePurchase,
        updatePurchase,
        destroyPurchase,
    }
}
