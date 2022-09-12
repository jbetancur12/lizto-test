import axios from "axios"
import { ref } from "vue"
import { useRouter } from "vue-router"

export default function useSuppliers() {
    const errors = ref([])
    const router = useRouter()
    const suppliers = ref({})
    const supplier = ref([])
    // Search
    const queryName = ref('')

    const getSupplier = async (id) => {
        let response = await axios.get('/api/suppliers/' + id)
        supplier.value = response.data.data
    }

    // const getSuppliers = async () => {
    //     let response = await axios.get('/api/suppliers')
    //     suppliers.value = response.data.data
    // }

    const getSuppliers = async (page) => {
        let response = await axios.get('/api/suppliers?page=' + page + '&name=' + queryName.value)
        suppliers.value = response.data
    }


    const storeSupplier = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/suppliers', data);
            swal("Success!", "Supplier already created!", "success");
            await router.push({ name: "suppliers.index" })
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors
            }
        }
    }

    const updateSupplier = async (id) => {
        errors.value = ''
        try {
            await axios.put('/api/suppliers/' + id, supplier.value);
            swal("Success!", "Purchase already updated!", "success");
            await router.push({ name: "suppliers.index" })
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors
            }
        }
    }


    const destroySupplier = async (id) => {
        await axios.delete('api/suppliers/' + id)
    }

    return {
        errors,
        supplier,
        suppliers,
        queryName,
        getSupplier,
        getSuppliers,
        storeSupplier,
        updateSupplier,
        destroySupplier,
    }
}
