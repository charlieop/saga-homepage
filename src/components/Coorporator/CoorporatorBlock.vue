<template>
    <div class="mainCard">
      <div class="partnerImg">
        <img :src="coorporator.logo" alt="partner logo" class="partnerlogo">
      </div>
      <div class="partnerIntro">
        <h1 class="className">{{ coorporator.className }}</h1>
        <h2 class="partnerName">{{ coorporator.instituteName }}</h2>
        <h2 class="coorpTime">{{ coorporator.period }}</h2>
        <p class="details">{{ coorporator.programmeDetails }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
    defineProps({
        coorporator: {
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
        box-shadow: 2px 2px 10px lightgray;
    }

    .partnerIntro {
        grid-area: partnerIntro;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        padding: 10px 20px;
        box-shadow: 1px 0 5px lightgray;
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
        font-size: var(--fs-300);
    }

    .coorpTime, .partnerName, .details {
        font-family: var(--ff-primary);
        font-size: var(--fs-200);
    }

    @media (prefers-color-scheme: light) {
       .mainCard {
        background-color: var(--clr-background-muted);
       } 

       .partnerIntro {
        background-color: hsl(30, 100%, 87%) ;
       }

       .className {
           color: var(--clr-text);
       }

       .partnerName {
           color: var(--clr-text);
       }

       .coorpTime {
           color: var(--clr-primary);
       }

       .details {
           color: var(--clr-text);
       }

    
}

@media (prefers-color-scheme: dark) {
    .mainCard {
        background-color: var(--clr-background-muted);
       } 

       .partnerIntro {
        background-color: hsl(30, 100%, 87%) ;
       }

       .className {
           color: var(--clr-text);
       }

       .partnerName {
           color: var(--clr-text);
       }

       .coorpTime {
           color: var(--clr-primary);
       }

       .details {
           color: var(--clr-text);
       }
   
}

@media (max-width: 1200px) {
    .mainCard {
        width: 60vw;
    }
}

</style>