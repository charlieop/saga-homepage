<template>
  <TheMainNavigation></TheMainNavigation>
  <TheLanding></TheLanding>
  <TheDataBanner></TheDataBanner>
  <TheNameIntro></TheNameIntro>
  <div class="main__add-blank"></div>
  <TheValues></TheValues>
</template>

<script setup>
import TheMainNavigation from "@/components/HomePage/TheMainNavigation.vue";
import TheLanding from "@/components/HomePage/TheLanding.vue";
import TheDataBanner from "@/components/HomePage/TheDataBanner.vue";
import TheNameIntro from "@/components/HomePage/TheNameIntro.vue";
import TheValues from "@/components/HomePage/TheValues.vue";
</script>

<style scoped>
.main__add-blank {
  height: 11rem;
}
</style>
