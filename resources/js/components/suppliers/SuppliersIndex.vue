<template>
    <h5><span class="badge bg-success">Suppliers List</span></h5>

    <div class="text-end">
        <router-link :to="{ name: 'suppliers.create' }" type="button" class="btn btn-sm btn-primary"
            >Nuevo</router-link
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
                <button class="btn btn-sm btn-primary" @click="getSuppliers">Search</button>
            </div>
        </div>
    </div>

    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <!-- <th scope="col">Acciones</th> -->
            </tr>
        </thead>
        <tbody>
            <template v-for="item in suppliers.data" :key="item.id">
                <tr>
                    <th scope="row">{{ item.id }}</th>
                    <td>{{ item.name }}</td>
                    <td>
                        <router-link
                            :to="{
                                name: 'suppliers.edit',
                                params: { id: item.id },
                            }"
                            class="btn btn-sm btn-primary"
                            >Editar
                        </router-link>
                        &nbsp;
                        <button
                            type="button"
                            class="btn btn-sm btn-danger"
                            @click="deleteSupplier(item.id)"
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            </template>
        </tbody>
    </table>

    <Pagination :data="suppliers" @pagination-change-page="getSuppliers" />
</template>

<script>
import useSuppliers from '../../composables/suppliers'
import { onMounted } from 'vue'

export default {
    setup() {
        const { queryName, suppliers, getSuppliers, destroySupplier } = useSuppliers()
        onMounted(getSuppliers)

        const deleteSupplier = async (id) => {
            if (!window.confirm('Estas Seguro?')) {
                return
            }
            await destroySupplier(id)
            await getSuppliers()
        }
        return {
            suppliers,
            deleteSupplier,
            queryName,
        }
    },
}
</script>
