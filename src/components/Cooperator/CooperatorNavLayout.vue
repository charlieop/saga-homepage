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

defineProps({
    title: {
        type: String,
        default: '合作项目'
    }
});

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
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    padding: 2rem;
}
</style>