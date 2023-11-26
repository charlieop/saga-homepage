<template>
  <MainNavigation></MainNavigation>
  <TheLanding></TheLanding>
  <TheDataBanner></TheDataBanner>
  <TheNameIntro></TheNameIntro>
  <div class="main__add-blank"></div>
  <TheValues></TheValues>
  <!-- <div class="learn-more">
    <TheLearnMore imageUrl="/src/assets/imgs/lotus.jpg" title="志愿者报名" detail="Work with us!"></TheLearnMore>
    <TheLearnMore imageUrl="/src/assets/imgs/rose.jpg" title="学生报名" detail="来体验我们的课程!"></TheLearnMore>
  </div> -->
  <CallToActionCards></CallToActionCards>
  <Footer></Footer>
</template>

<script setup>
import MainNavigation from "@/components/MainNavigation.vue";
import TheLanding from "@/components/HomePage/TheLanding.vue";
import TheDataBanner from "@/components/HomePage/TheDataBanner.vue";
import TheNameIntro from "@/components/HomePage/TheNameIntro.vue";
import TheValues from "@/components/HomePage/TheValues.vue";
// import TheLearnMore from "@/components/HomePage/TheLearnMore.vue";
import CallToActionCards from "@/components/HomePage/CallToActionCards.vue";
import Footer from "@/components/Footer.vue";

</script>

<style scoped>
.main__add-blank {
  height: 11rem;
}
@media (max-width: 786px) {
  .learn-more{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  Footer{
    width: 100%;
  }
}
</style>
