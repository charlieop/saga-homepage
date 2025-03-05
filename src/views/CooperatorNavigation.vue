<template>
    <div class="cooperatorNav">
        <MainNavigation></MainNavigation>
        <CooperatorNavLayout>
            <button 
                v-for="cooperator in cooperators" 
                :key="cooperator.id"
                @click="navigateToCooperator(cooperator)"
                class="coop-button"
            >
                {{ cooperator.instituteName }}
            </button>
        </CooperatorNavLayout>
        <Footer></Footer>
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