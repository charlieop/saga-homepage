<template>
  <section class="card-group">
    <article class="card">
      <h2 class="title">志愿者报名</h2>
      <p class="text">让这个世界变得更加美好</p>
      <div class="button-container">
        <a href="#nav" class="button">加入我们</a>
      </div>
      <div class="decoration"></div>
    </article>
    <article class="card">
      <h2 class="title">小朋友报名</h2>
      <p class="text">你从不孤单</p>
      <div class="button-container">
        <a href="#nav" class="button">参与课程</a>
      </div>
      <div class="decoration"></div>
    </article>
    <article class="card">
      <h2 class="title">组织合作</h2>
      <p class="text">与我们携手为孩子教育出一份力</p>
      <div class="button-container">
        <a href="#nav" class="button">联系我们</a>
      </div>
      <div class="decoration"></div>
    </article>
  </section>
</template>

<script setup></script>

<style scoped>
.card-group {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding-inline: var(--page-padding-inline);
  gap: 2rem;
  margin-block: 0 7rem;
}

.card-group * {
  transition: 0.3s cubic-bezier(0.3, 0, 0, 1.3);
}

.card {
  --_card-height: 25rem;
  --_card-width: 18rem;
  --_color: var(--clr-primary);
  position: relative;
  height: var(--_card-height);
  width: var(--_card-width);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  overflow: clip;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--clr-background);
  padding: 1rem;
}

.card:hover {
  box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.2);
  transform: scale(105%);
}

.decoration {
  --_height: 30rem;
  --_width: 30rem;
  position: absolute;
  top: -22rem;
  left: calc(50% - var(--_width) / 2);
  height: var(--_height);
  width: var(--_width);
  border-radius: 50%;
  background-color: var(--_color);
  opacity: 1;
  z-index: -1;
}

.card:hover .decoration {
  border-radius: 0;
  top: -15rem;
}

.button-container {
  position: absolute;
  bottom: 17%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
}

.title {
  font-size: var(--fs-500);
  font-weight: 600;
  margin-block: 1rem;
  color: var(--_color);
  padding-top: 11rem;
}

.card:hover .title {
  padding-top: 5rem;
  color: unset;
}

.text {
  font-size: var(--fs-300);
  font-weight: 400;
  margin-block: 1rem;
  opacity: 0;
}

.card:hover .text {
  opacity: 1;
}

.button {
  background-color: var(--_color);
  padding: 1rem 2rem;
  border-radius: 2rem;
  font-weight: 600;
  font-size: var(--fs-300);
}

.button:hover {
  transform: scale(105%);
}

.card:nth-child(1) {
  --_color: var(--clr-accent);
}
.card:nth-child(3) {
  --_color: #2196f3;
}

@media (hover: none) {
  .text {
    opacity: 1;
    color: var(--clr-text);
  }
  .title {
    padding-top: 9rem;
  }
}
</style>
