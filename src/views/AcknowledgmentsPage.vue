<template>
  <MainNavigation></MainNavigation>
  <div class="pageContent-wrapper grid" style="margin: 2rem">
    <Volunteers
      name="张三"
      dept="核心团队"
      uni="香港大学"
      honor="教学部Leader"
    ></Volunteers>
    <Volunteers
      name="李四"
      dept="核心团队"
      uni="香港大学"
      honor="IT部Leader"
    ></Volunteers>
    <Volunteers
      name="王五"
      dept="主席团"
      uni="香港大学"
      honor="校友会"
    ></Volunteers>
    <Volunteers
      name="蒲公英"
      dept="教学部"
      uni="香港大学"
      honor="优秀志愿者"
    ></Volunteers>
    <Volunteers
      name="显示器"
      dept="行研部"
      uni="香港大学"
      honor="SAGA志愿者"
    ></Volunteers>
    <Volunteers
      name="起名字"
      dept="教学部"
      uni="香港大学"
      honor="SAGA志愿者"
    ></Volunteers>
    <Volunteers
      name="你好吗"
      dept="IT部"
      uni="香港大学"
      honor="优秀志愿者"
    ></Volunteers>
    <Volunteers
      name="四个字的"
      dept="行研部"
      uni="香港大学"
      honor="SAGA志愿者"
    ></Volunteers>
    <Volunteers
      name="周六"
      dept="宣传部"
      uni="香港大学"
      honor="最佳进步奖"
    ></Volunteers>
    <Volunteers
      name="吃饭"
      dept="法务部"
      uni="香港大学"
      honor="SAGA志愿者"
    ></Volunteers>
    <Volunteers
      name="白菜"
      dept="IT部"
      uni="香港大学"
      honor="最佳进步奖"
    ></Volunteers>
    <Volunteers
      name="小白"
      dept="财务部"
      uni="香港大学"
      honor="SAGA志愿者"
    ></Volunteers>
    <Volunteers
      name="白菜"
      dept="人事部"
      uni="香港大学"
      honor="最佳贡献奖"
    ></Volunteers>
    <Volunteers
      name="小白"
      dept="外联部"
      uni="香港大学"
      honor="SAGA志愿者"
    ></Volunteers>
    <Volunteers
      name="错误"
      dept="错误"
      uni="错误"
      honor="错误"
    ></Volunteers>
  </div>
  <div class="pageContent-wrapper">
    <TheAcknowledgments></TheAcknowledgments>
  </div>
  <Footer></Footer>
</template>

<script setup>
import MainNavigation from "@/components/MainNavigation.vue";
import Volunteers from "@/components/AcknowledgmentsPage/Volunteer.vue";
import TheAcknowledgments from "@/components/AcknowledgmentsPage/TheVolunteersList.vue";
import Footer from "@/components/Footer.vue";
</script>

<style scoped>
.pageContent-wrapper {
  padding-top: var(--nav-height);
}

.grid {
  padding-inline: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
}
</style>
