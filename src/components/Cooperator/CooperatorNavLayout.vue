<template>
  <div class="page-container" :style="bgStyle">
    <div class="container mx-auto">
      <div class="grid-layout">
        <!-- Modify the slot to pass the navigation function -->
        <slot :starStyles="starStyles" :navigateToCard="navigateToCard"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import backgroundImage from '@/assets/imgs/coop-nav-bg-web.jpg';
import buttonBgImage from '@/assets/imgs/logos/orangeStar.png';

const router = useRouter();

const bgStyle = `url(${backgroundImage})`;
const buttonStyle = {backgroundImage: `url(${buttonBgImage})`};

const navigateToCard = (id) => {
  router.push({
    path: '/cooperator-info',
    hash: `#coorp-${id}`
  });
};

const starStyles = {
  1: { transform: 'rotate(-30deg) scale(1.05)',
    position: 'relative',
    top: '20px',
    left: '-40px' },
  2: { transform: 'rotate(-15deg) scale(0.9)',
    position: 'relative',
    top: '-40px',
    left: '-40px' },
  3: { transform: 'rotate(15deg) scale(0.95)',
    position: 'relative',
    top: '-25px',
    left: '-15px' },
  4: { transform: 'rotate(30deg) scale(1)',
    position: 'relative',
    top: '10px',
    left: '30px'},
  5: { transform: 'rotate(-25deg) scale(0.9)',
    position: 'relative',
    top: '-25px',
    left: '-30px' },
  6: { transform: 'rotate(-28deg) scale(0.95)',
    position: 'relative',
    top: '-65px',
    left: '-40px' },
  7: { transform: 'rotate(28deg) scale(0.95)',
    position: 'relative',
    top: '-65px'},
  8: { transform: 'rotate(25deg) scale(0.9)',
    position: 'relative',
    top: '5px'}
};
</script>

<style>
.page-container {
    min-height: 100vh;
    background-image: v-bind(bgStyle);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    padding: 2rem;
    width: 70%;
    max-width: 1400px;
    margin-top: -10rem;
}

.grid-layout {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 3rem;
    padding: 3rem;
}

/* Button styling */
.coop-button {
    width: 95%;
    aspect-ratio: 1;
    padding: 1.6rem;
    border: none;
    background: none;
    background-image: url('../../assets/imgs/logos/orangeStar.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Noto Sans', sans-serif;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    cursor: pointer;
    background-color: transparent !important;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    box-shadow: none;
}


.coop-button:hover {
    transform: scale(1.05);
    filter: brightness(1.1);
}

/* Remove any background color on hover/focus/active states */
.coop-button:hover,
.coop-button:focus,
.coop-button:active {
    background-color: transparent !important;
    outline: none;
}

/* Responsive design */
@media (max-width: 1024px) {
    .grid-layout {
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 1.5rem;
    }
}

@media (max-width: 640px) {
    .grid-layout {
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 1rem;
    }
    
    .coop-button {
        padding: 1rem;
        min-height: 80px;
        font-size: 1rem;
    }
}
</style>