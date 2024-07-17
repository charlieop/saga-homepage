<template>
    <MainNavigation></MainNavigation>
    <section class="volinteers-application">
        <h1>Volunteers Application Page</h1>
    </section>
    <Footer></Footer>

</template>

<script setup>
import MainNavigation from "@/components/MainNavigation.vue";

import Footer from "@/components/Footer.vue";

</script>

<style scoped>

.volinteers-application {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f5f5f5;
}

</style>    

