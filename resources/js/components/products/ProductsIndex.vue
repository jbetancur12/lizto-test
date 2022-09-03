<template>
    <h5><span class="badge bg-success">Listado de Productos</span></h5>

    <div class="text-end">
        <router-link
            :to="{ name: 'products.create' }"
            type="button"
            class="btn btn-sm btn-primary"
            >Nuevo</router-link
        >
    </div>

    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <!-- <th scope="col">Acciones</th> -->
            </tr>
        </thead>
        <tbody>
            <template v-for="item in products.data" :key="item.id">
                <tr>
                    <th scope="row">{{ item.id }}</th>
                    <td>{{ item.name }}</td>
                    <td>
                        <router-link
                            :to="{
                                name: 'products.edit',
                                params: { id: item.id },
                            }"
                            class="btn btn-sm btn-primary"
                            >Editar
                        </router-link>
                        &nbsp;
                        <button
                            type="button"
                            @click="deleteProduct(item.id)"
                            class="btn btn-sm btn-danger"
                        >
                            Eliminar
                        </button>
                    </td>
                </tr>
            </template>
        </tbody>
    </table>

    <Pagination :data="products" @pagination-change-page="getProducts" />
</template>

<script>
import useProducts from "../../composables/products";
import { onMounted } from "vue";

export default {
    setup() {
        const { products, getProducts, destroyProduct } = useProducts();
        onMounted(getProducts);

        const deleteProduct = async (id) => {
            if (!window.confirm("Estas Seguro?")) {
                return;
            }
            await destroyProduct(id);
            await getProducts();
        };
        return {
            products,
            deleteProduct,
        };
    },
};
</script>
