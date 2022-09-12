<template>
    <h5><span class="badge bg-success">Purchases List</span></h5>

    <div class="text-end">
        <router-link :to="{ name: 'purchases.create' }" type="button" class="btn btn-sm btn-primary"
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
                <button class="btn btn-sm btn-primary" @click="getPurchases">Search</button>
            </div>
        </div>
    </div>

    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">State</th>
                <th scope="col">Total Cost</th>
                <th scope="col">Supplier Id</th>
                <!-- <th scope="col">Acciones</th> -->
            </tr>
        </thead>
        <tbody>
            <template v-for="item in purchases.data" :key="item.id">
                <tr>
                    <th scope="row">{{ item.id }}</th>
                    <td>{{ item.state }}</td>
                    <td>{{ item.total_cost }}</td>
                    <td>{{ item.supplier_id }}</td>
                    <td>
                        <router-link
                            :to="{
                                name: 'purchases.show',
                                params: { id: item.id },
                            }"
                            class="btn btn-sm btn-primary"
                            >Show
                        </router-link>
                        &nbsp;
                        <!-- <router-link
                            :to="{
                                name: 'purchases.edit',
                                params: { id: item.id },
                            }"
                            class="btn btn-sm btn-primary"
                            >Editar
                        </router-link> -->
                        &nbsp;
                        <button
                            type="button"
                            class="btn btn-sm btn-danger"
                            @click="deletePurchase(item.id)"
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            </template>
        </tbody>
    </table>

    <Pagination :data="purchases" @pagination-change-page="getPurchases" />
</template>

<script setup>
import usePurchases from '../../composables/purchases'
import { onMounted } from 'vue'

const { queryName, purchases, getPurchases, destroyPurchase } = usePurchases()
onMounted(getPurchases)

const deletePurchase = async (id) => {
    if (!window.confirm('Estas Seguro?')) {
        return
    }
    await destroyPurchase(id)
    await getPurchases()
}
</script>
