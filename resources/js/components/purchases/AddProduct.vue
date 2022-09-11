<template>
    <div>
        <div class="mb-3 text-end">
            <button
                class="btn btn-secondary"
                title="Click to add row"
                @click="addRow"
            >
                <span class="fa fa-plus-square"></span>
                &nbsp;Add Product
            </button>
        </div>

        <table class="table text-center">
            <thead>
                <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Cost</th>
                    <th scope="col">Total Cost</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(purchaseDetail, index) in purchaseDetails.products">
                    <td>
                        <select
                            class="form-select"
                            aria-label="Default select example"
                            v-model="purchaseDetail.product_id"
                            name="product_id"
                        >
                            <option
                                v-for="product in products.data"
                                :value="product.id"
                            >
                                {{ product.name }}
                            </option>
                        </select>
                    </td>
                    <td>
                        <input
                            type="number"
                            class="form-control"
                            placeholder="Quantity"
                            aria-label="Quantity"
                            name="quantity"
                            v-model="purchaseDetail.quantity"
                            @input="purchaseDetails.totalCost(index)"
                        />
                    </td>
                    <td>
                        <input
                            type="number"
                            class="form-control"
                            placeholder="Cost"
                            aria-label="Cost"
                            name="'cost"
                            v-model="purchaseDetail.cost"
                            @input="purchaseDetails.totalCost(index)"
                        />
                    </td>
                    <td>{{ purchaseDetail.total_cost }}</td>
                    <td>
                        <div class="col">
                            <button
                                class="btn btn-danger"
                                @click="removeRow(index)"
                            >
                                <span class="fa fa-minus"></span>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import useProducts from "../../composables/products";
import { useCounterStore } from "../../stores/purchaseStore";

const { products, getProducts } = useProducts();

onMounted(() => {
    getProducts();
});

const purchaseDetails = useCounterStore();

const addRow = () => {
    purchaseDetails.products.push({
        product_id: "",
        quantity: 0,
        cost: 0,
        total_cost: 0,
    });
};

const removeRow = (index) => purchaseDetails.products.splice(index, 1);
</script>
