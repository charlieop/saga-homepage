<template>
    <div class="page-container">
        <div class="container mx-auto px-4 py-8">
            <h1 class="text-3xl font-bold text-center mb-8 text-white">{{ title }}</h1>
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import backgroundImage from '@/assets/imgs/coop-nav-bg-web.jpg';

const bgStyle = `url(${backgroundImage})`;
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
}

/* Button styling */
.coop-button {
    padding: 1rem 1.5rem;
    background-color: rgba(255, 255, 255, 0.9);
    color: #1f2937;
    border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    font-size: 1.125rem;
    font-weight: 500;
    border: 2px solid transparent;
    transition: all 0.3s ease;
}

.coop-button:hover {
    background-color: rgba(255, 255, 255, 1);
    border-color: #3b82f6;
    transform: translateY(-2px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
</style>