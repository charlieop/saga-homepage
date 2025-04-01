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
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        grid-template-areas: "partnerImg partnerImg partnerIntro partnerIntro partnerIntro";
        border-radius: 10px;
        width: 45vw;
        height: max-content;
        box-shadow: 1px 1px 6px lightgray;
    }

    .partnerIntro {
        grid-area: partnerIntro;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        padding: 20px 20px;
        box-shadow: 0px 1px 10px rgb(213, 213, 213);
        border-radius: 0 5px 5px 0;
        gap: 15px;
    }

    .partnerImg {
        grid-area: partnerImg;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
    }

    .partnerlogo {
        width: 100%;
        aspect-ratio: auto;
        border-radius: 10px;
    }

    .className {
        font-family: var(--ff-primary);
        font-size: var(--fs-500);
    }

    .coorpTime::before {
        position: absolute;
        content: '';
        width: 102%;
        height: 3px;
        left: -2px;
        bottom: -2px;
        background-image: linear-gradient(to Right, #ffa837, #dd7643);
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

@media (prefers-color-scheme: dark) {
    .mainCard {
        background-color: #f4bc64;
       } 

       .partnerIntro {
        background-color: #feefce ;
       }

       .className {
           color: #25211e;
       }

       .partnerName {
           color: #25211e;
       }

       .coorpTime {
           color: #cd5921;
       }

       .details {
           color: #25211e;
       }
   
}

@media (max-width: 1200px) {
    .mainCard {
        width: 70vw;
    }
}
</style>