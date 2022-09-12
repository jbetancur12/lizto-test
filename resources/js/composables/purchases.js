import axios from "axios"
import { ref } from "vue"
import { useRouter } from "vue-router"
import { usePurchaseStore } from "../stores/purchaseStore";

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
         const dataPurchaseDetails = { ...data.products }


        try {
            const purchaseCreated = await axios.post('/api/purchases', dataPurchase);

            const newArray = data.products.map(item => ({...item, purchase_id:purchaseCreated.data.data.id}))

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
            const purchaseUpdated = await axios.put('/api/purchases/' + id, purchase.value);
            const purchase_id = purchaseUpdated.data.data.id
            for(const item of purchaseDetailsStore.products ){
                if(item.hasOwnProperty('purchase_id')){
                    await axios.put('/api/purchase-details/' + item.id, item);
                }else{
                    await axios.post('/api/purchase-details', [{...item, purchase_id: purchase_id}])
                }
            }
            // await axios.put('/api/purchase-details/', newArray )
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
        purchasesDetails,
        queryName,
        getPurchase,
        getPurchases,
        storePurchase,
        updatePurchase,
        destroyPurchase,
    }
}
