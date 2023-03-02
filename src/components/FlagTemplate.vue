<template>
    <div class="w-full md:w-1/4 bg-white rounded-md mt-10 cursor-pointer px-4" v-for="i in getCountries" :key="i.numericcode">
        <div class="w-full shadow-lg" @click="router.push({path:`/country/${i.numericcode}`})">
            <img :src="i.flags.png" alt="" class="h-40 w-full">
            <div class="pl-4 pt-4 pb-10">
                <div class="font-bold pb-4 text-lg pt-2">{{ i.name.common }}</div>
                <div class="text-LightMode-dark-gray"><span class=" text-DarkMode-mid-blue font-semibold">Population:</span>
                    {{ i.population }}
                </div>
                <div class="text-LightMode-dark-gray"> <span class=" text-DarkMode-mid-blue font-semibold">Region:</span> {{
                    i.continents ? i.continents[0] : '' }}</div>
                <div class="text-LightMode-dark-gray"> <span class=" text-DarkMode-mid-blue font-semibold">Capital:</span>
                    {{ i.capital ? i.capital[0] : '' }}
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useCountriesStore } from '../stores/countries';
import { computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
const store = useCountriesStore();
const getCountries = computed(() => store.allCountries);
onMounted(() => { store.getCountries() });
</script>