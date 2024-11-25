<template>
  <MainNavigation></MainNavigation>
  <TheLanding></TheLanding>
  <TheDataBanner></TheDataBanner>
  <TheNameIntro></TheNameIntro>
  <div class="main__add-blank"></div>
  <TheValues></TheValues>
  <CallToActionCards></CallToActionCards>
  <TheAcknowledgments></TheAcknowledgments>
  <Footer></Footer>
</template>

<script setup>
import MainNavigation from "@/components/MainNavigation.vue";
import TheLanding from "@/components/HomePage/TheLanding.vue";
import TheDataBanner from "@/components/HomePage/TheDataBanner.vue";
import TheNameIntro from "@/components/HomePage/TheNameIntro.vue";
import TheValues from "@/components/HomePage/TheValues.vue";
import CallToActionCards from "@/components/HomePage/CallToActionCards.vue";
import TheAcknowledgments from "@/components/HomePage/TheAcknowledgments.vue";
import Footer from "@/components/Footer.vue";

import { onMounted } from "vue";
onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style scoped></style>
