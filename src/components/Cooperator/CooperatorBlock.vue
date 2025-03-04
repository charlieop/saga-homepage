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
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        grid-template-areas: "partnerImg partnerIntro partnerIntro";
        border-radius: 10px;
        width: 40vw;
        height: 300px;
        box-shadow: 1px 1px 6px lightgray;
    }

    .partnerIntro {
        grid-area: partnerIntro;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        padding: 10px 20px;
        box-shadow: 0px 1px 10px rgb(213, 213, 213);
        border-radius: 5px;
    }

    .partnerImg {
        grid-area: partnerImg;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
    }

    .partnerlogo {
        width: 90%;
        aspect-ratio: 1/1;
        border-radius: 10px;
    }

    .className {
        font-family: var(--ff-primary);
        font-size: var(--fs-400);
    }

    .coorpTime, .partnerName {
        font-family: var(--ff-primary);
        font-size: var(--fs-300);
    }

    .details {
        font-family: var(--ff-primary);
        font-size: var(--fs-200);
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
        width: 60vw;
    }
}
</style>