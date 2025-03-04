<template>
    <div class="coorporatorInfo">
        <MainNavigation></MainNavigation>
        <div class="coorporatorContainer">
            <div class="starsContainer"></div>
            <CoorporatorBlock 
                v-for="coorporator in coorporatorList"
                :key="coorporator.id"
                :coorporator="coorporator"
                :id = "'coorp-' + coorporator.id"
            />
        </div>
        <Footer></Footer>
    </div>
</template>

<script setup>
import MainNavigation from '@/components/MainNavigation.vue';
import Footer from '@/components/Footer.vue';
import CoorporatorBlock from '@/components/Coorporator/CoorporatorBlock.vue';
import { coorporators } from '@/assets/dataset/coorporator_list'
import { onMounted, ref, onUnmounted, nextTick} from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute();
const coorporatorList = ref(coorporators);
const coorpContainer = document.querySelector('.coorporatorContainer');
const starColors = ["var(--clr-primary)","lightblue", "pink"]

let isMobile = ref(window.innerWidth <= 700);
let starContainer = [];
let resizeTimeout = null;


const updateIsMobile = () => {
  isMobile.value = window.innerWidth <= 700;
};

const updateStarsPosition = () => {
    starContainer.forEach((singleStar) => {
    const X_coord = Math.random() * window.innerWidth;
    singleStar.style.left = `${X_coord}px`;
  });
};

onMounted(async () => {
  window.scrollTo(0, 0);
  window.addEventListener('resize', handleResize);

  const starBackground = document.querySelector('.coorporatorContainer');
  for (let i = 0; i < 50; i++) {
    makeStar(starBackground);
  }

  // 等待 DOM 渲染后读取URL参数然后跳转
  await nextTick();
  scrollToCoorporator();
}
);

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  starContainer.forEach(snow => snow.remove());
});

// 窗口改变时更新星星位置
const handleResize = () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    updateIsMobile();
    updateStarsPosition();
  }, 100);
};

// 跳转函数
function scrollToCoorporator() {
  const coorpId = route.query.id || window.location.hash.replace('#', ''); // 获取id参数
  if (coorpId) {
    const targetElement = document.getElementById(`coorp-${coorpId}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}

// 星星颜色会用到
function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * starColors.length);
  return starColors[randomIndex];
}

// 创建星星下落动效
function makeStar(starBackground) {
    
    let speed = Math.random()*3 ;
    const singleStar = document.createElement('div');
    singleStar.classList.add('star');
    singleStar.innerHTML = `<svg class="star-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>`;

    const randomColor = getRandomColor();
    singleStar.querySelector('.star-svg').style.fill = randomColor;

    let X_coord = Math.random() * window.innerWidth ;
    singleStar.style.left = X_coord + 'px';
    let Y_coord = Math.random() * starBackground.offsetHeight ;
    singleStar.style.top = Y_coord + 'px';
    singleStar.style.opacity = Math.random();
    singleStar.style.transition = `opacity 1s ease-in-out`;
    function dropping(){
        Y_coord += speed;
        singleStar.style.top = Y_coord + 'px';
        if (Y_coord > starBackground.offsetHeight) {
            Y_coord = -10;
        }
        requestAnimationFrame(dropping);
    }
    dropping();
    function sparkling(){
        setTimeout(()=> {
            singleStar.style.opacity = Math.random();
            requestAnimationFrame(sparkling);
        },100)
    }
    sparkling();
    starBackground.appendChild(singleStar);
    starContainer.push(singleStar);
}

</script>

<style>
.coorporatorContainer {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: auto;
    padding-top: 8rem;
    padding-bottom: 100px;
    gap: 20px;
}


.star {
    position: absolute;
    aspect-ratio: 1/1;
    opacity: .7;
    animation: rotate 10s linear infinite, breathing 3s linear infinite;
    z-index: -1;
}

.star:nth-child(2n) {
    animation: inverserotate 10s linear infinite, breathing 3s linear infinite;
}

.star-svg {
    position: relative;
    height: 100%;
    aspect-ratio: 1/1;
    opacity: .7;
}




@keyframes rotate {
    0% {
        transform: rotate(0deg);
        
    }
    50% {
        transform: rotate(180deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes inverserotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(-360deg);
    }
}

@keyframes breathing {
    0% {
        height: 50px;

    }
    50% {
        height: 60px;
    }
    100% {
        height: 50px;

    }
}




</style>