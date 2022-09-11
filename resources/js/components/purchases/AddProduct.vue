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
                <tr v-for="(formPurchaseDetail, index) in formPurchaseDetails">
                    <td>
                        <select
                            class="form-select"
                            aria-label="Default select example"
                            v-model="formPurchaseDetail.product_id"
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
                            v-model="formPurchaseDetail.quantity"
                            @input="totalCost(index)"
                        />
                    </td>
                    <td>
                        <input
                            type="number"
                            class="form-control"
                            placeholder="Cost"
                            aria-label="Cost"
                            name="'cost"
                            v-model="formPurchaseDetail.cost"
                            @input="totalCost(index)"
                        />
                    </td>
                    <td>{{ formPurchaseDetail.total_cost }}</td>
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
        <!-- <div class="form-group">
            <div
                class="row mb-3"
                v-for="(formPurchaseDetail, index) in formPurchaseDetails"
            >
                <div class="col">
                    <select
                        class="form-select"
                        aria-label="Default select example"
                        v-model="formPurchaseDetail.product_id"
                        name="product_id"
                    >
                        <option
                            v-for="product in products.data"
                            :value="product.id"
                        >
                            {{ product.name }}
                        </option>
                    </select>
                </div>
                <div class="col">
                    <input
                        type="number"
                        class="form-control"
                        placeholder="Quantity"
                        aria-label="Quantity"
                        name="quantity"
                        v-model="formPurchaseDetail.quantity"
                        @input="totalCost(index)"
                    />
                </div>

                <div class="col">
                    <input
                        type="number"
                        class="form-control"
                        placeholder="Cost"
                        aria-label="Cost"
                        name="'cost"
                        v-model="formPurchaseDetail.cost"
                        @input="totalCost(index)"
                    />
                </div>

                <div class="col">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Total Cost"
                        aria-label="Total Cost"
                        name="total_cost"
                        v-model="formPurchaseDetail.total_cost"
                        readonly
                    />
                </div>
                <div class="col">
                    <button class="btn btn-danger" @click="removeRow(index)">
                        Remove
                    </button>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import useProducts from "../../composables/products";
import PurchaseDetailsIndexVue from "../purchaseDetails/PurchaseDetailsIndex.vue";
const { products, getProducts } = useProducts();

onMounted(() => {
    getProducts();
});

const formPurchaseDetails = ref([
    {
        product_id: "",
        quantity: 0,
        cost: 0,
        total_cost: 0,
    },
]);

const addRow = () => {
    formPurchaseDetails.value.push({
        product_id: "",
        quantity: 0,
        cost: 0,
        total_cost: 0,
    });
};

const removeRow = (index) => formPurchaseDetails.value.splice(index, 1);

const totalCost = (index) => {
    formPurchaseDetails.value[index].total_cost =
        formPurchaseDetails.value[index].cost *
        formPurchaseDetails.value[index].quantity;
};

// const grandTotal = computed(() => {
//     get: () => {};
//     set: (index) => {
//         console.log(index);
//     };
// });
</script>
