import { defineStore } from 'pinia'

export const useCounterStore = defineStore('purchaseDetails', {
    state: () => {
        return {
            products: [{
                product_id: "",
                quantity: 0,
                cost: 0,
                total_cost: 0,
            },]
        }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        totalCost(index) {
            console.log(index);
            this.products[index].total_cost = this.products[index].quantity * this.products[index].cost
        },
    },
})
