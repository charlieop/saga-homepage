<template>
  <section class="landing">
    <div class="decoration">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 210">
        <path
          d="M0,256L60,229.3C120,203,240,149,360,138.7C480,128,600,160,720,192C840,224,960,256,1080,250.7C1200,245,1320,203,1380,181.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
    <div class="landing__headings">
      <h2 class="landing__sub-heading">
        与我们一同
        <ul class="landing__keywords">
          <li class="landing__keyword" data-display-curr>关怀</li>
          <li class="landing__keyword" data-display-next>成长</li>
          <li class="landing__keyword" data-display-null>探索</li>
          <li class="landing__keyword" data-display-prev>前行</li>
        </ul>
      </h2>
      <h1 class="landing__main-heading">SAGA星光公益课堂</h1>
    </div>
      <img class="landing__img" src="@/assets/imgs/hero.jpg" alt="hero image" />
  </section>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  clearInterval(displayNextWord);
  setInterval(displayNextWord, 3000);
});

function displayNextWord() {
  const keywords = document.querySelectorAll(".landing__keyword");
  const curr = document.querySelector("[data-display-curr]");
  const next = document.querySelector("[data-display-next]");
  const prev = document.querySelector("[data-display-prev]");
  let nextup = next?.nextElementSibling || keywords[0];
  curr?.removeAttribute("data-display-curr");
  curr?.setAttribute("data-display-prev", "");
  next?.removeAttribute("data-display-next");
  next?.setAttribute("data-display-curr", "");
  prev?.removeAttribute("data-display-prev");
  prev?.setAttribute("data-display-null", "");
  nextup?.removeAttribute("data-display-null");
  nextup?.setAttribute("data-display-next", "");
}
</script>

<style scoped>
.landing {
  height: 100svh;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}
.landing__headings {
  padding-left: 5vw;
  font-family: var(--ff-accent);
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: end;
  z-index: 10;
}
.landing__main-heading {
  font-size: var(--fs-900);
}
.landing__sub-heading {
  font-size: var(--fs-800);
  padding-right: 3.7ch;
  position: relative;
  contain: paint;
}
.landing__keywords {
  color: var(--clr-primary);
}
.landing__keyword {
  --_color: #e85d75;
  position: absolute;
  right: 0;
  top: 0;
  transition: transform 0.7s ease-in-out, text-shadow 0.7s linear;
}
.landing__keyword[data-display-null] {
  opacity: 0;
}
.landing__keyword[data-display-prev] {
  transform: translateY(-100%);
  text-shadow: 0px 7px 2px var(--_color);
}
.landing__keyword[data-display-curr] {
  text-shadow: 0px 0px 0px var(--_color);
}
.landing__keyword[data-display-next] {
  transform: translateY(100%);
  opacity: 0;
  text-shadow: 0px 7px 2px var(--_color);
}
.landing__img {
  place-self: center;
  width: 80%;
  border-radius: 3rem;
  object-fit: contain;
}

.decoration {
  fill: var(--clr-background-muted);
  position: absolute;
  inset: auto 0 0 0;
}
.decoration svg {
  display: block;
}
@media (max-width: 700px) {
  
  .landing{
    padding: 15svh 0.5rem;
    display: flex;
    flex-direction: column;
  }
  .landing__headings{
    padding: 0px;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
  .landing__main-heading{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align:center;
    font-size: 3em;
    text-wrap: balance;
    
  }
  .landing__img{
    width: 80%;
  }
}
</style>
