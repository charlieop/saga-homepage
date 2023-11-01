<!-- 此部分未适配响应式设计 -->

<template>
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
.data-banner {
  background-color: var(--clr-background-muted);
  padding: 5rem var(--page-padding-inline);
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
