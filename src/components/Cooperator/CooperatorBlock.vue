<template>
    <div class="mainCard">
      <div class="partnerImg">
        <img :src="cooperator.logo" alt="partner logo" class="partnerlogo">
      </div>
      <div class="partnerIntro">
        <h1 class="className">{{ cooperator.className }}</h1>
        <h2 class="partnerName">{{ cooperator.instituteName }}</h2>
        <h2 class="coorpTime">{{ cooperator.period }}</h2>
        <p class="details">{{ cooperator.programmeDetails }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
    defineProps({
        cooperator: {
        type: Object,
        required: true
        }
    });
    
  </script>

<style scoped>
    .mainCard {
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        grid-template-areas: "partnerImg partnerImg partnerIntro partnerIntro partnerIntro";
        border-radius: 10px;
        width: 40vw;
        height: max-content;
        box-shadow: 1px 1px 6px lightgray;
        cursor: pointer;
    }

    .partnerIntro {
        grid-area: partnerIntro;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        padding: 20px 20px;
        box-shadow: 0px 1px 10px rgb(213, 213, 213);
        border-radius: 0 10px 10px 0;
        gap: 15px;
    }

    .partnerImg {
        grid-area: partnerImg;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        overflow: hidden;
    }

    .partnerlogo {
        width: 100%;
        aspect-ratio: auto;
        border-radius: 10px;
    }

    .className {
        position: relative;
        font-family: var(--ff-primary);
        font-size: var(--fs-500);
    }

    .coorpTime, .partnerName {
        position: relative;
        font-family: var(--ff-primary);
        font-size: var(--fs-400);
    }

    .details {
        font-family: var(--ff-primary);
        font-size: var(--fs-300);
    }

    .partnerName::before {
        position: absolute;
        content: '';
        width: var(--pseudo-width, 0%);
        height: 3px;
        left: -2px;
        bottom: -2px;
        background-image: linear-gradient(to Right, #ffa837, #eb5020);
    }

    .className::before {
        content: '';
        position: absolute;
        width: var(--pseudo-width, 0%);
        height: 3px;
        left: -2px;
        bottom: -2px;
        background-image: linear-gradient(to Right, #ffa837, #eb5020);
    }

    .enlarge {
        transform: scale(1.1);
    }

    .moveup {
        transform: translateY(-40px);
        position: relative;
        opacity: .8;
    }

    .movedown {
        transform: translateY(40px);
        position: relative;
        opacity: .8;
    }

    .mainCard, .className::before, .partnerName::before {
        --animation-duration: .5s;
        transition: all var(--animation-duration) ease-in-out;
    }

    @media (prefers-color-scheme: light) {
       .mainCard {
        background-color: #ffefcd;
       } 

       .partnerIntro {
        background-color: #fccb9d ;
       }

       .className {
           color: #161823;
       }

       .partnerName {
           color: #161823;
       }

       .coorpTime {
           color: #f89418;
       }

       .details {
           color: #161823;
       } 
}

    .mainCard:nth-of-type(odd):before {
        content: '';
        position: absolute;
        background: url('/src/assets/imgs/cooperator/狮子.png');
        aspect-ratio: 1/1;
        width: 25%;
        left: -18%;
        bottom: -15%;
        display: block;
        z-index: 1;
        background-size: cover;
        transform: rotate(-20deg);
        filter: drop-shadow(-2px -2px 4px #59553dc1);

    }

    .mainCard:nth-of-type(4n-2):before {
        content: '';
        position: absolute;
        background: url('/src/assets/imgs/cooperator/大鹅.png');
        aspect-ratio: 1/1;
        width: 25%;
        right: -14%;
        bottom: -10%;
        display: block;
        z-index: 1;
        background-size: cover;
        transform: rotate(20deg);
        filter: drop-shadow(-2px 2px 4px #59553dc1);
    }

    .mainCard:nth-of-type(4n):before {
        content: '';
        position: absolute;
        background: url('/src/assets/imgs/cooperator/熊猫.png');
        aspect-ratio: 1/1;
        width: 25%;
        right: -12%;
        bottom: -15%;
        display: block;
        z-index: 1;
        background-size: cover;
        transform: rotate(15deg);
        filter: drop-shadow(-2px 2px 4px #59553dc1);
    }

@media (prefers-color-scheme: dark) {
    .mainCard {
        background-color: #f4bc64;
       } 

       .partnerIntro {
        background-color: #feefce ;
       }

       .className {
           color: #161823;
       }

       .partnerName {
           color: #161823;
       }

       .coorpTime {
           color: #cd5921;
       }

       .details {
           color: #161823;
       }
   
}

@media (max-width: 1200px) {
    .mainCard {
        width: 70vw;
    }
}
</style>