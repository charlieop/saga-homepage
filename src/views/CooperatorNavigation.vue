<template>
    <div class="cooperatorNav">
        <MainNavigation></MainNavigation>
        <CooperatorLayout>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <button 
                    v-for="cooperator in cooperators" 
                    :key="cooperator.id"
                    @click="navigateToCooperator(cooperator)"
                    class="p-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition-all duration-300 text-lg font-medium"
                >
                    {{ cooperator.instituteName }}
                </button>
            </div>
        </CooperatorLayout>
        <Footer></Footer>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { cooperators } from '../assets/dataset/cooperator_list.js';
import MainNavigation from '@/components/MainNavigation.vue';
import Footer from '@/components/Footer.vue';
import CooperatorLayout from '@/components/Cooperator/CooperatorNavLayout.vue';

const router = useRouter();

const navigateToCooperator = (cooperator) => {
    router.push({
        name: 'CooperatorInfo',
        params: { id: cooperator.id },
        state: { cooperator }
    });
};
</script>