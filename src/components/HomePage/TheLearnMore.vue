<template>
  <div class="card" :style="{ backgroundImage: 'url(' + imgUrl + ')' }">
    <!-- :style="{backgroundImage:`url(${imageUr1})`}" -->
    <div class="title">{{ title }}</div>
    <div class="line"></div>
    <div v-if="showFlag" class="title">
      <div class="detail">{{ detail }}</div>
    </div>
    <div
      class="more-saga"
      @mouseover="showFlag = true"
      @mouseout="showFlag = false"
    >
      了解详情
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
// 控制显示隐藏
const showFlag = ref(false);
// 图片路径
const imgUrl = ref("");
const props = defineProps(["imageUrl", "title", "detail"]);
imgUrl.value = props.imageUrl;
</script>
<style>
.learn-more {
  display: flex;
  justify-content: space-evenly;
  box-sizing: border-box;
  padding-inline: var(--page-padding-inline);
  gap: 3rem;
  padding-bottom: 5rem;
}

.card {
  flex: 1;
  border-radius: 1.2rem;
  min-height: 20rem;
  padding-top: 3.2rem;
  /* background-image: url(../../assets/image/rose.jpg); */
  /* background-size: 100% 100%; */
  background-position: right top;
  background-repeat: no-repeat;
  position: relative;
}
.title {
 font-size:var(--fs-600);
  color: var(--clr-text);
  font-weight: 600;
  text-align: right;
  width: 23rem;
}

.line {
  height: 0.9rem;
  width: 22rem;
  background-color: var(--clr-text-muted);
  margin-bottom: 1.2rem;
  text-align: right;
  transform: translateX(0.9rem);
}

.detail {
  width: 12rem;
  color: var(--clr-text);
  font-size: 1.4rem;
  animation-duration: 1s;
  animation-name: slidein;
}
@keyframes slidein {
  from {
    margin-left: 100%;
    width: 70%;
  }

  to {
    margin-left: 0%;
    width: 12rem;
  }
}
.more-saga {
  position: absolute;
  top: 70%;
  left: 3.2rem;
  background-color: var(--clr-secondary);
   font-size: var(--fs-400);
  width: 10rem;
  height: 3rem;
  border-radius: 0.33rem;
  text-align: center;
  line-height: 3.1rem;
  cursor: pointer;
  transition: background-color 0.5s, transform 0.5s;
}

.more-saga:hover {
  background-color: var(--clr-text-muted);
  transform: translateY(-30px);
}

@keyframes hideShow {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@media (max-width:796px) {
  .card{
    width:100%;
    min-height: 15rem;
  }
  .title{
    width: 80%;
  }
  .line{
    width: 80%;
  }
}
</style>
