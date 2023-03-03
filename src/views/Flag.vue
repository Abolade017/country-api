<template>
    <Header />
    <div class="md:ml-24 ml-6">
        <button class="h-10 shadow-lg w-28 rounded-md  dark:bg-dark-blue mt-10" @click="goBack">
            <div class="flex space-x-2 justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 dark:text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                <div class="pr-2 text-LightMode-dark-gray"> Back</div>
            </div>
        </button>
    </div>
    <div
        class="md:flex-row flex-col flex justify-start md:justify-between space-x-0 md:space-x-48 items-center mt-10 md:mx-24 mx-6">
        <div class="md:w-1/2 w-full">
            <img class="w-full" :src="country.flags.png" :alt="country.flags.alt" />
        </div>
        <div class="md:w-1/2 w-full ">
            <h3 class="text-2xl font-semibold pb-6 dark:text-white text-DarkMode-dark-blue pt-10 md:pt-0 ">{{
                country.name.common }}</h3>
            <div class="flex md:flex-row flex-col md:space-y-0 space-y-6 md:justify-between">
                <div class="flex flex-col space-y-2">
                    <div class="dark:text-LightMode-dark-gray text-sm"><span
                            class="text-sm dark:text-white text-DarkMode-dark-blue pr-2">Native Name:</span>{{
                                country.name.nativeName.nld.common }}</div>
                    <div class="dark:text-LightMode-dark-gray text-sm"><span
                            class="text-sm dark:text-white text-DarkMode-dark-blue pr-2">Population:</span>{{
                                country.population }}</div>
                    <div class="dark:text-LightMode-dark-gray text-sm"><span
                            class="text-sm dark:text-white text-DarkMode-dark-blue pr-2">Region:</span>{{ country.region }}
                    </div>
                    <div class="dark:text-LightMode-dark-gray text-sm"><span
                            class="text-sm dark:text-white text-DarkMode-dark-blue pr-2">Sub Region:</span>{{
                                country.subregion }}</div>
                    <div class="dark:text-LightMode-dark-gray text-sm"><span
                            class="text-sm dark:text-white text-DarkMode-dark-blue pr-2">Capital:</span>{{
                                country.capital[0] }}</div>
                </div>
                <div class="flex flex-col space-y-2">
                    <div class="dark:text-LightMode-dark-gray text-sm"><span
                            class="text-sm dark:text-white text-DarkMode-dark-blue pr-2">Top Leval Domain:</span>{{
                                country.tld[0] }}</div>
                    <div class="dark:text-LightMode-dark-gray text-sm"><span
                            class="text-sm dark:text-white text-DarkMode-dark-blue pr-2">Currencies:</span>{{
                                country.currencies.EUR.name }}</div>
                    <div class="dark:text-LightMode-dark-gray text-sm"><span
                            class="text-sm dark:text-white text-DarkMode-dark-blue pr-2">Languages:</span>{{
                                country.languages.fra }}, {{ country.languages.deu }}, {{ country.languages.nld }}</div>
                </div>
            </div>
            <div class="mt-6 md:flex-row flex-col flex ">
                <div class="text-sm dark:text-white text-DarkMode-dark-blue pr-2 md:pt-2 pt-0 ">Border Countries:</div>
                <div class="flex space-x-2 pt-2 pb-20">
                    <div class="text-LightMode-dark-gray  bg-white dark:text-white dark:bg-dark-blue rounded-sm text-xs shadow-md h-6 w-20 flex items-center justify-center"
                        v-for="i in country.borders" :key="i">{{ i }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import Header from '@/components/Header.vue';
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCountriesStore } from '../stores/countries';
const route = useRoute();
const router = useRouter();
const store = useCountriesStore();
const country = computed(() => store.getCountry);
const goBack = () => {
    router.go(-1);
}

onMounted(() => {
    store.getSearchCountry(route.params.name as string)
});

</script>