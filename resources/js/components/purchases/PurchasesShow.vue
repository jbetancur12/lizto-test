<template>
  <h5><span class="badge bg-success">Create Purchase</span></h5>

  <div v-if="errors">
    <div v-for="(v, k) in errors" :key="k">
      <p v-for="error in v" :key="error" class="text-danger">
        {{ error }}
      </p>
    </div>
  </div>

  <form>
    <div class="row">
      <div class="col-7">
        <div class="from-group">
          <label for="">Supplier Id</label>
          <select
            v-model="purchase.supplier_id"
            name="supplier_id"
            class="form-select"
            :disabled="purchase.state === 'RECEIVED' || purchase.state === 'CANCELLED'"
          >
            <option
              v-for="supplier in suppliers.data"
              :key="supplier.id"
              :value="supplier.id"
            >
              {{ supplier.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="col-5 d-flex justify-content-center align-items-center flex-column">
        <div>
          <strong>State:</strong>
          <span>
            &nbsp;
            {{ status[purchase.state] }}
          </span>
        </div>
        <div class="d-flex gap-2 mt-3">
          <button class="btn btn-success" @click.prevent="receiveState">Receive</button>
          <button class="btn btn-danger" @click.prevent="cancelledState">Cancel</button>
        </div>
      </div>
    </div>

    <hr class="bg-primary border-2 border-top border-primary" />

    <AddProduct :purchase-id="props.id" :state="purchase.state" />
    <hr class="bg-secondary border-2 border-top border-secondary" />
    <div class="d-flex justify-content-end align-items-baseline gap-2 mr-5">
      <strong>Total:</strong>
      <span>&nbsp;{{ formatter.format(purchaseDetails.grandTotal) }}</span>
    </div>

    <div class="form-group mt-2">
      <button class="btn btn-sm btn-success" @click.prevent="savePurchase">Save</button>
    </div>
  </form>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import usePurchases from "../../composables/purchases";
import usePurchaseDetails from "../../composables/purchaseDetails";
import useSuppliers from "../../composables/suppliers";
import AddProduct from "./AddProduct.vue";
import { usePurchaseStore } from "../../stores/purchaseStore";
import { status, formatter } from "../../helpers/helpers.js";
import swal from "sweetalert";

const { errors, purchase, getPurchase, updatePurchase } = usePurchases();

const { suppliers, getSuppliers } = useSuppliers();

const props = defineProps({ id: { type: Number, default: 0 } });

onMounted(() => {
  getPurchase(props.id);
  getSuppliers();
});

const purchaseDetails = usePurchaseStore();

const receiveState = () => {
  purchase.value.state = "RECEIVED";
};

const cancelledState = () => {
  swal({
    title: "Are you sure?",
    text: "Once cancelled, you will not be able to recover this state",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      purchase.value.state = "CANCELLED";
      swal("Your state is now cancelled!", {
        icon: "success",
      });
    } else {
      swal("The state was not changed");
    }
  });
};

const savePurchase = async () => {
  await updatePurchase(props.id);
};
</script>
