<template>
  <section class="name-intro">
    <div class="name-intro__sticky-area">
      <h2 class="name-intro__header">
        什么是&nbsp;
        <span class="name-intro__title-letter">S</span>
        <span class="name-intro__title-letter">A</span>
        <span class="name-intro__title-letter">G</span>
        <span class="name-intro__title-letter">A</span>
        ?
      </h2>
    </div>
    <div class="name-intro__scrolling-area">
      <article class="name-intro__article" data-index="-1">
        <h3 class="name-intro__word">
          <img class="name-intro__img" src="@/assets/imgs/intro.png" alt="">
        </h3>
        <div class="name-intro__desc">
          <p class="name-intro__title">简介</p>
          <p class="name-intro__detail">
            SAGA是一个社会公益组织，专注于为因患有白血病而需要长期住院的儿童提供线上课堂服务，旨在保障这些无法正常上学的儿童的教育。
          </p>
        </div>
      </article>
      <article class="name-intro__article" data-index="0">
        <h3 class="name-intro__word">
          <span class="name-intro__initial">S</span>ense
        </h3>
        <div class="name-intro__desc">
          <p class="name-intro__title">共情</p>
          <p class="name-intro__detail">
            我们关注白血病儿童的身心健康，倾听他们的故事，感受他们的情感，并希望以此与孩子产生共鸣。
          </p>
        </div>
      </article>
      <article class="name-intro__article" data-index="1">
        <h3 class="name-intro__word">
          <span class="name-intro__initial">A</span>ccompany
        </h3>
        <div class="name-intro__desc">
          <p class="name-intro__title">陪伴</p>
          <p class="name-intro__detail">
            我们希望与孩子们建立亦师亦友的关系，在他们的成长道路上给予了学习和生活上的陪伴。
          </p>
        </div>
      </article>
      <article class="name-intro__article" data-index="2">
        <h3 class="name-intro__word">
          <span class="name-intro__initial">G</span>uide
        </h3>
        <div class="name-intro__desc">
          <p class="name-intro__title">引导</p>
          <p class="name-intro__detail">
            我们希望引导孩子们探索未知的世界，挑战自我，克服困难，并在这个过程中建立信心。
          </p>
        </div>
      </article>
      <article class="name-intro__article" data-index="3">
        <h3 class="name-intro__word">
          <span class="name-intro__initial">A</span>dventure
        </h3>
        <div class="name-intro__desc">
          <p class="name-intro__title">共赴冒险</p>
          <p class="name-intro__detail">
            我们认为人生是一场冒险，我们希望与孩子们一起共赴冒险旅程，并在这个过程中分享感动瞬间，感受成长带来的快乐。
          </p>
        </div>
      </article>
      <div class="place_holder"></div>

      <!-- <div class="name-intro__article--placeholder"></div> -->
      <div class="decoration1"></div>
      <div class="decoration2"></div>
      <div class="decoration3"></div>
    </div>
    <svg class="arrow-down" x="0px" y="0px" viewBox="0 20 100 60">
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M94.675,40.841c-2.487-4.476-5.408-8.566-8.823-12.381c-1.748-1.953-5.262,0.504-3.77,2.758      c1.17,1.768,2.34,3.537,3.509,5.305c-8.517-3.195-17.708-5.38-26.487-4.241c-0.032-0.039-0.06-0.081-0.092-0.12      C50.136,21.4,33.229,21.455,22.436,29.055C9.538,38.137-0.33,61.035,8.181,75.852c0.535,0.932,2.009,0.374,1.754-0.687      c-3.299-13.77,1.573-30.487,12.148-40.09c8.329-7.563,23.392-9.812,31.863-1.702c-2.649,0.787-5.24,1.927-7.737,3.507      c-5.011,3.169-9.76,8.704-9.076,15.041c0.686,6.35,6.985,10.084,13.007,9.429c12.392-1.348,15.882-14.82,11.597-24.687      c7.591-0.498,15.526,1.609,22.777,4.409c-2.37,0.508-4.711,1.152-7.039,1.965c-2.86,0.999-1.731,5.607,1.15,4.597      c4.441-1.556,8.868-2.577,13.563-3.001c0.622-0.056,1.237-0.359,1.697-0.798C94.847,43.263,95.384,42.116,94.675,40.841z       M52.073,56.082c-4.214,1.656-10.324,0.037-10.378-5.404c-0.038-3.813,3.188-7.295,6.097-9.309      c2.919-2.021,6.029-3.314,9.245-4.041C60.738,43.761,59.687,53.089,52.073,56.082z"
      />
    </svg>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const articles = document.querySelectorAll(".name-intro__article");

  const screenWidth = window.innerWidth;
  let rootMargin = "200% 1000% -10% 1000%";
  if (screenWidth < 700) {
    rootMargin = "200% 1000% 30% 1000%";
  }

  // Create the IntersectionObserver with updated rootMargin
  let observer = new IntersectionObserver(handleIntersection, {
    rootMargin,
    threshold: 0.7,
  });

  articles.forEach((article) => {
    observer.observe(article);
  });
  setTimeout(() => {
    setActive(-1);
  }, 100);
});

function handleIntersection(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // console.log(entry.target.dataset.index);
      setActive(entry.target.dataset.index);
      setDisappear(entry.target.dataset.index);
    } else {
      setAppear(entry.target.dataset.index);
      setActive(entry.target.dataset.index - 1);
    }
  });
}

function setActive(i) {
  if (i == undefined) {
    console.log("nono");
    return;
  }
  const letters = document.querySelectorAll(".name-intro__title-letter");
  letters.forEach((letter) => {
    letter.classList.remove("name-intro__title-letter--active");
  });
  letters[i]?.classList.add("name-intro__title-letter--active");
}

function setDisappear(i) {
  const articles = document.querySelectorAll(".name-intro__article");
  articles[i]?.classList.add("name-intro__article--disappear");
}

function setAppear(i) {
  const articles = document.querySelectorAll(".name-intro__article");
  articles[i]?.classList.remove("name-intro__article--disappear");
}
</script>

<style scoped>
.name-intro {
  --_bg-clr: var(--clr-background-muted);
  background-color: var(--_bg-clr);
  border-radius: 0 0 10vw 10vw;
  position: relative;
  margin-bottom: 20svh;
}

.name-intro__sticky-area {
  --_header_height: 6rem;
  position: sticky;
  top: 0;
  padding-top: 3rem;
  padding-bottom: 33svh;
}

.name-intro__sticky-area::after {
  content: "";
  position: absolute;
  transform: translateY(1rem);
  left: 20%;
  right: 20%;
  height: 0.2rem;
  border-radius: 100rem;
  background-color: var(--clr-background);
}

.name-intro__header {
  font-size: var(--fs-800);
  font-weight: 700;
  text-align: center;
  font-family: var(--ff-accent);
  height: var(--_header_height);
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.1ch;
}

.name-intro__img {
  width: 90%;
  object-fit: cover;
}

.name-intro__title-letter {
  transition: all 0.3s ease-in-out;
  font-size: 1.25em;
  color: var(--clr-text-muted);
}

.name-intro__title-letter--active {
  font-size: 1.8em;
  color: var(--clr-primary);
  transition: all 0.3s ease-in-out;
}

.name-intro__scrolling-area {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: var(--page-padding-inline);
  gap: 40vh;
  padding-bottom: 2rem;
  contain: paint;
}
.name-intro__article {
  position: sticky;
  top: 15rem;
  margin-bottom: 2rem;
  background-color: var(--_bg-clr);
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  transition: all 0.5s ease-in-out;
}

.name-intro__article--disappear {
  opacity: 0;
  transform: translateX(5%);
}

.name-intro__word {
  font-size: var(--fs-800);
  letter-spacing: 0.1ch;
}

.name-intro__initial {
  font-size: 1.5em;
  color: var(--clr-primary);
}

.name-intro__desc {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: var(--fs-400);
  padding-inline: 1rem;
}
.name-intro__title {
  font-size: var(--fs-800);
  font-family: var(--ff-accent);
}
.name-intro__detail {
  font-size: var(--fs-400);
  line-height: 1.5;
}

.decoration1 {
  width: 25rem;
  height: 10rem;
  background-color: var(--clr-primary);
  position: absolute;
  z-index: 10;
  transform: rotate(-45deg);
  top: 40svh;
  left: -10rem;
}
.decoration2 {
  width: 25rem;
  height: 15rem;
  background-color: var(--clr-accent);
  position: absolute;
  z-index: 10;
  transform: rotate(60deg);
  top: 110svh;
  right: -13rem;
}

.decoration3 {
  width: 25rem;
  height: 20rem;
  background-color: var(--clr-text-muted);
  position: absolute;
  border-radius: 5rem;
  z-index: 10;
  top: 170svh;
  left: -15rem;
}

.arrow-down {
  --_width: 13rem;
  transform: rotate(110deg) scale(1.3);
  position: absolute;
  bottom: calc(var(--_width) * -0.7);
  left: calc(50% - var(--_width) / 2);
  width: var(--_width);
  fill: var(--clr-accent);
}

@media (max-width: 1200px) {
  .decoration1 {
    left: calc(-22rem + 10vw);
  }
  .decoration2 {
    right: calc(-18rem);
  }
  .decoration3 {
    left: calc(-19rem);
  }
  .name-intro__sticky-area {
    padding-top: 1rem;
    padding-bottom: 30svh;
  }
  .name-intro__scrolling-area {
    gap: 32vh;
  }
  .name-intro__article {
    top: calc(5rem + 15vh);
  }
}

@media (max-width: 700px) {
  .decoration1 {
    top: 75svh;
    left: calc(-25rem + 10vw);
  }
  .decoration2 {
    top: 160svh;
    right: calc(-25rem + 10vw);
  }
  .decoration3 {
    height: 10rem;
    border-radius: 2rem;
    width: 21rem;
    top: 250svh;
    left: calc(-19rem);
  }
  .name-intro__sticky-area {
    padding-bottom: 20svh;
  }
  .name-intro__article {
    top: 10rem;
    margin-bottom: 2rem;
    gap: 1rem;
    grid-template-rows: 20svh 30svh;
    grid-template-columns: 1fr;
    padding: 0 10svw;
  }
  .name-intro__scrolling-area {
    gap: 35vh;
  }
}
</style>
