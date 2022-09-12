<template>
    <h5><span class="badge bg-success">List Purchase Detail</span></h5>

    <div class="text-end">
        <router-link
            :to="{ name: 'purchaseDetails.create' }"
            type="button"
            class="btn btn-sm btn-primary"
            >New</router-link
        >
    </div>

    <div class="row">
        <div class="col-md-4">
            <div class="form-group d-flex">
                <input
                    v-model="queryName"
                    type="text"
                    class="form-control"
                    placeholder="Buscar por nombre"
                />
                &nbsp;
                <button class="btn btn-sm btn-primary" @click="getPurchaseDetails">Search</button>
            </div>
        </div>
    </div>

    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Purchase Id</th>
                <th scope="col">Product Id</th>
                <th scope="col">Quantity</th>
                <th scope="col">Cost</th>
                <th scope="col">Total Cost</th>
                <!-- <th scope="col">Acciones</th> -->
            </tr>
        </thead>
        <tbody>
            <template v-for="item in purchaseDetails.data" :key="item.id">
                <tr>
                    <th scope="row">{{ item.id }}</th>
                    <td>{{ item.purchase_id }}</td>
                    <td>{{ item.product_id }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>{{ item.cost }}</td>
                    <td>{{ item.total_cost }}</td>
                    <td>
                        <router-link
                            :to="{
                                name: 'purchaseDetails.edit',
                                params: { id: item.id },
                            }"
                            class="btn btn-sm btn-primary"
                            >Edit
                        </router-link>
                        &nbsp;
                        <button
                            type="button"
                            class="btn btn-sm btn-danger"
                            @click="deletePurchaseDetail(item.id)"
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            </template>
        </tbody>
    </table>

    <Pagination :data="purchaseDetails" @pagination-change-page="getPurchaseDetails" />
</template>

<script>
import usePurchaseDetails from '../../composables/purchaseDetails'
import { onMounted } from 'vue'

export default {
    setup() {
        const { queryName, purchaseDetails, getPurchaseDetails, destroyPurchaseDetail } =
            usePurchaseDetails()
        onMounted(getPurchaseDetails)

        const deletePurchaseDetail = async (id) => {
            if (!window.confirm('Estas Seguro?')) {
                return
            }
            await destroyPurchaseDetail(id)
            await getPurchaseDetails()
        }
        return {
            purchaseDetails,
            deletePurchaseDetail,
            queryName,
        }
    },
}
</script>
