<template>
  <div class="cooperatorNav">
    <MainNavigation />
    <CooperatorNavLayout v-slot="{ starStyles, navigateToCard }">
      <button 
        v-for="(cooperator, index) in cooperators" 
        :key="cooperator.id"
        class="coop-button"
        :style="starStyles[index + 1]"
        @click="navigateToCard(cooperator.id)"
      >
        <span>{{ cooperator.instituteName }}</span>
      </button>
    </CooperatorNavLayout>
    <Footer />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { cooperators } from '../assets/dataset/cooperator_list.js';
import MainNavigation from '@/components/MainNavigation.vue';
import Footer from '@/components/Footer.vue';
import CooperatorNavLayout from '@/components/Cooperator/CooperatorNavLayout.vue';

const router = useRouter();

const navigateToCooperator = (cooperator) => {
    router.push({
        name: 'CooperatorInfo',
        params: { id: cooperator.id },
        state: { cooperator }
    });
};
</script>