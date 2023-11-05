<template>
  <MainNavigation></MainNavigation>
  <TheLanding></TheLanding>
  <TheDataBanner></TheDataBanner>
  <TheNameIntro></TheNameIntro>
  <div class="main__add-blank"></div>
  <TheValues></TheValues>
  <div class="learn-more">
    <TheLearnMore imageUrl="/src/assets/imgs/lotus.jpg" title="志愿者报名" detail="Work with us!"></TheLearnMore>
    <TheLearnMore imageUrl="/src/assets/imgs/rose.jpg" title="学生报名" detail="来体验我们的课程"></TheLearnMore>
  </div>
  <TheContact></TheContact>
  <Footer></Footer>
</template>

<script setup>
import MainNavigation from "@/components/MainNavigation.vue";
import TheLanding from "@/components/HomePage/TheLanding.vue";
import TheDataBanner from "@/components/HomePage/TheDataBanner.vue";
import TheNameIntro from "@/components/HomePage/TheNameIntro.vue";
import TheValues from "@/components/HomePage/TheValues.vue";
import Footer from "@/components/Footer.vue";
import TheLearnMore from "@/components/HomePage/TheLearnMore.vue";
import TheContact from "@/components/HomePage/TheContact.vue";
</script>

<style scoped>
.main__add-blank {
  height: 11rem;
}
</style>
