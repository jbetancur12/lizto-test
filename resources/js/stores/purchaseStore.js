import { defineStore } from 'pinia'

export const useCounterStore = defineStore('purchaseDetails', {
    state: () => {
        return {
            grandTotal: 0,
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
            this.products[index].total_cost = this.products[index].quantity * this.products[index].cost
        },
        sumTotal(){
            this.grandTotal =  this.products.map(item => item.total_cost).reduce((prev,next)=> prev+next)

        }
    },
})
