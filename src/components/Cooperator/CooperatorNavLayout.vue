<template>
    <div class="page-container">
        <div class="container mx-auto">
            <div class="grid-layout">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import backgroundImage from '@/assets/imgs/coop-nav-bg-web.jpg';
import buttonBgImage from '@/assets/imgs/logos/orangeStar.png';

const bgStyle = `url(${backgroundImage})`;
const buttonStyle = {backgroundImage: `url(${buttonBgImage})`};
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
    width: 100%;
    aspect-ratio: 1;
    padding: 0;
    border: none;
    background: none;
    background-image: url('../../assets/imgs/logos/orangeStar.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    font-size: 1.125rem;
    font-weight: 500;
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