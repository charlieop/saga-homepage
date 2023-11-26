<template>
  <section class="ack-page">
    <h2>特别鸣谢</h2>
    <div class="marquee__container">
      <div class="marquee-group" v-for="i in 2">
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
  </section>
</template>

<script setup></script>

<style scoped>
.ack-page {
  --_color-logo: navy;
  --_color-bg: var(--clr-footer-text);
  --_width: clamp(10rem, 1rem + 30vmin, 12rem);
  --_gap: 1rem;
  --_duration: 30s;
  --_scroll-start: 0;
  --_scroll-end: calc(-100% - var(--_gap));

  margin-bottom: 5rem;
}

h2 {
  font-size: var(--fs-700);
  font-weight: 600;
  text-align: center;
  margin-block: 2rem 5rem;
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
  filter: grayscale(100%);
  transition: 0.3s ease-in-out;
}

.marquee__block:hover .marquee__image {
  transform: scale(1.05);
  filter: none;
}
</style>
