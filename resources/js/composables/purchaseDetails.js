import axios from "axios"
import { ref } from "vue"
import { useRouter } from "vue-router"
import { usePurchaseStore } from "../stores/purchaseStore";

export default function usePurchaseDetails() {
    const purchaseDetailsStore = usePurchaseStore()
    const errors = ref([])
    const router = useRouter()
    const purchaseDetails = ref({})
    const purchaseDetail = ref([])
    const purchaseDetailStore = purchaseDetailsStore.products
    // Search
    const queryName = ref('')

    const getPurchaseDetail = async (id) => {
        let response = await axios.get('/api/purchase-details/' + id)
        purchaseDetail.value = response.data.data
    }

    // const getPurchaseDetails = async () => {
    //     let response = await axios.get('/api/purchase-details')
    //     purchaseDetails.value = response.data.data
    // }

    const getPurchaseDetails = async (purchaseId='') => {

        let response = await axios.get('/api/purchase-details?purchase_id=' + purchaseId)
        purchaseDetails.value = response.data
    }


    const storePurchaseDetail = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/purchase-details', data);
            await router.push({ name: "purchaseDetails.index" })
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors
            }
        }
    }

    const updatePurchaseDetail = async (id) => {
        errors.value = ''
        try {
            await axios.put('/api/purchase-details/' + id);
            await router.push({ name: "purchaseDetails.index" })
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors
            }
        }
    }


    const destroyPurchaseDetail = async (id) => {
        await axios.delete('api/purchase-details/' + id)
    }

    return {
        errors,
        purchaseDetail,
        purchaseDetails,
        queryName,
        getPurchaseDetail,
        getPurchaseDetails,
        storePurchaseDetail,
        updatePurchaseDetail,
        destroyPurchaseDetail,
    }
}
