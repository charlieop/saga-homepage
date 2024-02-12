<template>
  <section class="ack-page">
    <h2>特别鸣谢</h2>
    <div class="text">
      <p>我们由衷地感谢所有参与SAGA星光的志愿者</p>
      <p>正是因为有你们辛勤、无私的奉献, 我们才能走到这里</p>
      <br />
      <div class="block">
        <p>点点星光绽放, 比太阳还耀眼</p>
        <p>
          请点击<RouterLink
            to="acknowledgment"
            title="SAGA星光全体志愿者名单"
          ></RouterLink>
          寻找每一颗闪耀过的星星✨
        </p>
        <p>我们会一直在，希望你们也是❤️</p>
      </div>
    </div>
    <p>同时感谢以下企业/ 组织为我们提供的帮助与合作:</p>
    <div class="marquee__container">
      <div class="marquee-group" v-for="i in 3">
        <div class="marquee__block">
          <img
            src="@/assets/imgs/logos/canva.png"
            alt=""
            class="marquee__image"
          />
        </div>
        <div class="marquee__block">
          <img
            src="@/assets/imgs/logos/feishu.png"
            alt=""
            class="marquee__image"
          />
        </div>
        <div class="marquee__block">
          <img
            src="@/assets/imgs/logos/classin.svg"
            alt=""
            class="marquee__image"
          />
        </div>
        <div class="marquee__block">
          <img
            src="@/assets/imgs/logos/tencent.png"
            alt=""
            class="marquee__image"
          />
        </div>
        <div class="marquee__block">
          <img
            src="@/assets/imgs/logos/tencent-charity.png"
            alt=""
            class="marquee__image"
          />
        </div>
        <div class="marquee__block">
          <img
            src="@/assets/imgs/logos/hku.svg"
            alt=""
            class="marquee__image"
          />
        </div>
      </div>
    </div>
    <div class="marquee__container reverse">
      <div class="marquee-group" v-for="i in 3">
        <div class="marquee__block">
          <img
            src="@/assets/imgs/logos/bixing-charity-min.png"
            alt=""
            class="marquee__image"
          />
        </div>
        <div class="marquee__block">
          <img
            src="@/assets/imgs/logos/cuaa-min.png"
            alt=""
            class="marquee__image"
          />
        </div>
        <div class="marquee__block">
          <img
            src="@/assets/imgs/logos/ewb-min.png"
            alt=""
            class="marquee__image"
          />
        </div>
        <div class="marquee__block">
          <img
            src="@/assets/imgs/logos/kokuyo-charity-min.png"
            alt=""
            class="marquee__image"
          />
        </div>
        <div class="marquee__block">
          <img
            src="@/assets/imgs/logos/qingnuan-charity-min.png"
            alt=""
            class="marquee__image"
          />
        </div>
        <div class="marquee__block">
          <img
            src="@/assets/imgs/logos/qnsjxd-min.png"
            alt=""
            class="marquee__image"
          />
        </div>
        <div class="marquee__block">
          <img
            src="@/assets/imgs/logos/seagulls-society-min.png"
            alt=""
            class="marquee__image"
          />
        </div>
        <div class="marquee__block">
          <img
            src="@/assets/imgs/logos/shiyu-children-foundation-min.png"
            alt=""
            class="marquee__image"
          />
        </div>
        <div class="marquee__block">
          <img
            src="@/assets/imgs/logos/vous-min.png"
            alt=""
            class="marquee__image"
          />
        </div>
        <div class="marquee__block">
          <img
            src="@/assets/imgs/logos/zhiyuanhui-min.png"
            alt=""
            class="marquee__image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.ack-page {
  --_color-logo: navy;
  --_color-bg: transparent;
  --_width: clamp(10rem, 1rem + 30vmin, 12rem);
  --_gap: 1rem;
  --_duration: 60s;
  --_scroll-start: 0;
  --_scroll-end: calc(-100% - var(--_gap));

  margin-bottom: 5rem;
}

h2 {
  font-size: var(--fs-700);
  font-weight: 600;
  text-align: center;
  margin-block: 5rem 3rem;
  font-family: var(--ff-accent);
}

.text {
  padding-inline: var(--page-padding-inline);
  font-size: var(--fs-400);
  margin-block: 0 5rem;
}

p {
  text-align: center;
  margin-bottom: 1rem;
}

a {
  font-size: var(--fs-500);
  color: var(--clr-primary);
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  transition: 0.3s ease-in-out;
  text-decoration: underline;
  text-underline-position: under;
}

a:hover {
  filter: brightness(1.05);
  transform: translateY(-0.2rem);
}

.block:hover a::before {
  content: "全体志愿者名单";
}

a::before {
  content: "👉这里";
  margin-inline-start: 0.5rem;
}

.marquee__container {
  display: flex;
  width: 100%;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 5%,
    hsl(0 0% 0% / 1) 95%,
    hsl(0 0% 0% / 0)
  );
  user-select: none;
  gap: var(--_gap);
}

.reverse {
  margin-block: var(--_gap) 5rem;
}

.reverse .marquee-group {
  animation-direction: reverse;
  flex-direction: row-reverse;
}

@keyframes scroll-x {
  from {
    transform: translateX(var(--_scroll-start));
  }
  to {
    transform: translateX(var(--_scroll-end));
  }
}

.marquee-group {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: var(--_gap);
  animation: scroll-x var(--_duration) linear infinite;
}

.marquee__container:has(.marquee__block:hover) .marquee-group {
  animation-play-state: paused;
}

.marquee__block {
  flex-shrink: 0;
  width: var(--_width);
  height: calc(var(--_width) / 16 * 9);
  background-color: var(--_color-bg);
  border-radius: 0.5rem;
  padding: clamp(1rem, 1.5vw, 2rem);
  display: flex;
  justify-content: center;
}

.marquee__image {
  height: 100%;
  width: 100%;
  object-fit: contain;
  object-position: center;
  filter: grayscale(100%) contrast(0.15) sepia(110%) saturate(320%)
    brightness(1.1);
  transition: 0.3s ease-in-out;
}

.marquee__block:hover .marquee__image {
  transform: scale(1.15);
  filter: none;
}
</style>
