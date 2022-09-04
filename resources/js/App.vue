<template>
    <div class="">
        <router-link
            :to="{ name: 'products.index' }"
            type="button"
            class="btn btn-sm btn-primary"
            >Products</router-link
        >
    </div>
    <div class="">
        <router-link
            :to="{ name: 'suppliers.index' }"
            type="button"
            class="btn btn-sm btn-primary"
            >Suppliers</router-link
        >
    </div>
    <div class="">
        <router-link
            :to="{ name: 'purchases.index' }"
            type="button"
            class="btn btn-sm btn-primary"
            >Purchases</router-link
        >
    </div>
</template>
