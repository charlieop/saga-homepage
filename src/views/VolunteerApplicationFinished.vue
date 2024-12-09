<template>
    <div :key="componentKey">
        <MainNavigation></MainNavigation>

        <section class="application-finish-notice">
            
            <div class="notice">
                <div class="greeting">
                    <img class="xiaoga" src="@/assets/imgs/xiaoga.jpg" alt="这是小嘎">
                    <h1>嗨，朋友！</h1>
                </div>
                <p>我是小嘎，感谢您一直以来对 <span>SAGA</span> 的关注和支持！</p>
                <p>很遗憾地告诉您，第五期的志愿者招募已经结束啦。</p>
                <p>不过别担心，SAGA 还有很多精彩的活动和项目等着您！记得关注我们的公众号哦，最新动态、志愿者故事、小嘎的日常，都会第一时间分享给您。</p>
                <p>如果有任何问题或者建议，欢迎随时给小嘎写信，<a href='mailto:support@saga-xingguang.com'>联系我们哦</a>！</p>
                <p>期待和您在未来的活动中再次相遇！一起成长、一起闪耀~</p>
            </div>
            <img class="qrcode" src="@/assets/imgs/qrCode.jpg" alt="QR Code for SAGE">
            <div class="redirect">
                <button class="mainpgbtn" v-on:click="router.push({ name: 'HomePage' })" >回到首页</button>
                <button class="checkvolunteer" v-on:click="router.push({ name: 'AcknowledgementsPage' })">查看志愿者</button>
            </div>
            
        </section>

        <Footer></Footer>
    </div>
</template>

<script setup>
import MainNavigation from "@/components/MainNavigation.vue";
import Footer from "@/components/Footer.vue";
import { onMounted, onUnmounted,  ref, inject } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

let isMobile = ref(window.innerWidth <= 700);
let snowflakes = [];
let resizeTimeout = null;

const updateIsMobile = () => {
  isMobile.value = window.innerWidth <= 700;
};

const updateSnowflakesPosition = () => {
  snowflakes.forEach((snowflake) => {
    const X_coord = Math.random() * window.innerWidth;
    snowflake.style.left = `${X_coord}px`;
  });
};

onMounted(() => {
  window.scrollTo(0, 0);
  window.addEventListener('resize', handleResize);

  const snowbackground = document.querySelector('.application-finish-notice');
  for (let i = 0; i < 200; i++) {
    makesnow(snowbackground);
  }
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

const handleResize = () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    updateIsMobile();
    updateSnowflakesPosition();
  }, 100);
};


function makesnow(snowbackground) {
    
    let speed = Math.random()*3 ;
    const snowflake = document.createElement('div');
    snowflake.classList.add('snow');
    let X_coord = Math.random() * window.innerWidth ;
    snowflake.style.left = X_coord + 'px';
    let Y_coord = Math.random() * snowbackground.offsetHeight ;
    snowflake.style.top = Y_coord + 'px';
    snowflake.style.opacity = Math.random();
    snowflake.style.transition = `opacity 1s ease-in-out`;
    function dropping(){
        Y_coord += speed;
        snowflake.style.top = Y_coord + 'px';
        if (Y_coord > snowbackground.offsetHeight) {
            Y_coord = -10;
        }
        requestAnimationFrame(dropping);
    }
    dropping();
    function sparkling(){
        setTimeout(()=> {
            snowflake.style.opacity = Math.random();
            requestAnimationFrame(sparkling);
        },100)
    }
    sparkling();
    snowbackground.appendChild(snowflake);
    snowflakes.push(snowflake);
}

</script>

<style>
.application-finish-notice {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 120vh;
    width: 100vw;
    gap: 3rem;
    background-color: var(--clr-background);
    padding: 9rem 4rem 0 4rem ;
}

.application-finish-notice .qrcode {
    aspect-ratio: 1/1;
    width: 15rem;
    border-radius: 10px;
    position: block;
}

.xiaoga {
    border-radius: 50%;
    aspect-ratio: 1/1;
    width: 5rem;
    position: relative;
}

.notice {
    font-family: var(--ff-accent);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    width: min(100%, 60rem);
}

.greeting {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    gap: 2rem;
    width: 100%;
}

.notice h1 {
    font-size: var(--fs-700);
    color: var(--clr-primary);
    font-weight: 500;
}

.notice span {
    color: var(--clr-text);
    font-size: var(--fs-500);
}

.notice p {
    font-size: var(--fs-500);
    color: var(--clr-text);
    margin-left: 7rem;
}

.notice a {
    color: var(--clr-primary);
}



.redirect {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 80%;
}


.redirect button {
    display: inline-block;
    padding: 1rem 1.25rem;
    background-color: var(--clr-primary);
    color: var(--clr-background);
    border-radius: 0.5rem;
    text-decoration: none;
    transition: 0.3s cubic-bezier(0.3, 0, 0, 1.3);
    border: none;
}

.redirect button:hover {
  transform: scale(105%);

}
/* adding some backgroudn snow effect: */
.snow {
    position: absolute;
    border-radius: 50%;
    opacity: .7;
    height:5px;
    width:5px;
}

@media (prefers-color-scheme: light) {
    .snow {
        background: var(--clr-primary);
    }

    
}

@media (prefers-color-scheme: dark) {
    .snow {
        background: var(--clr-text);
    }

   
}

@media screen and (max-width: 700px) {
    .application-finish-notice {
        width: 100vw;
        height: 150vh;
        padding: 7rem 4rem;
        background: var(--clr-background-muted);
    }

    .notice {
        width: 100%;
        padding: 2rem 0 0 0;
    }

    .xiaoga {
        width: 8rem;
    }

    .greeting {
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
        width: 100%;
    }

    .notice p {
        margin-left: 0;
    }

    .redirect {
        width: 100%;
        flex-direction: row;
        gap: 1rem;
    }

    .redirect button {
        width: 30%;
        padding: 1rem 0;
    }

    .application-finish-notice .qrcode {
        width: 12rem;
    }
    
    .snow {
        display: none;
    }

}


</style>