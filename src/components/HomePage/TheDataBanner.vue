<!-- 此部分未适配响应式设计 -->

<template>
  <div class="decoration">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 210">
      <path
        d="M0,256L60,229.3C120,203,240,149,360,138.7C480,128,600,160,720,192C840,224,960,256,1080,250.7C1200,245,1320,203,1380,181.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </svg>
  </div>
  <section class="data-banner">
    <div class="data-banner__block">
      <div class="data-banner__figure">
        <span class="data-banner__number">3</span
        ><span class="data-banner__unit">年</span>
      </div>
      <span class="data-banner__desc">SAGA 成立已达</span>
    </div>
    <div class="data-banner__block">
      <div class="data-banner__figure">
        <span class="data-banner__number">10</span
        ><span class="data-banner__unit">万</span>
      </div>
      <span class="data-banner__desc">提供的教学时长 (分钟)</span>
    </div>
    <div class="data-banner__block">
      <div class="data-banner__figure">
        <span class="data-banner__number">500+</span
        ><span class="data-banner__unit">名</span>
      </div>
      <span class="data-banner__desc">服务的白血病儿童</span>
    </div>
    <div class="data-banner__block">
      <div class="data-banner__figure">
        <span class="data-banner__number">500+</span
        ><span class="data-banner__unit">名</span>
      </div>
      <span class="data-banner__desc">来自世界各地的志愿者</span>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.decoration svg {
  fill: var(--clr-background-muted);
  display: block;
}
.data-banner {
  background-color: var(--clr-background-muted);
  padding: 1rem var(--page-padding-inline) 6rem;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(4, 1fr);
}

.data-banner__block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
}
.data-banner__figure {
  font-family: var(--ff-accent);
  font-size: var(--fs-700);
  font-weight: 700;
}
.data-banner__unit {
  color: var(--clr-primary);
  margin-left: 0.2ch;
}

.data-banner__number {
  font-size: 1.125em;
}

.data-banner__desc {
  font-size: var(--fs-300);
  color: var(--clr-text-muted);
}
</style>
