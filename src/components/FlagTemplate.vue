<template>
    <Header />
    <div class="dark:bg-DarkMode-mid-blue">
        <div class="mx-4 md:mx-24 pt-14 flex flex-col md:flex-row md:justify-between">
            <div>
                <Search />
            </div>
            <div>
                <DropDown />
            </div>
        </div>
    </div>
    <div class="mt-10 mx-4 md:mx-16">
        <div class="flex flex-col md:flex-row flex-wrap w-full">
            <div class="w-full md:w-1/4  mt-10 cursor-pointer px-8" v-for="country in getCountries" :key="country.ccn3">
                <div class="w-full shadow-lg dark:bg-dark-blue rounded-b-md" @click="goToCountry(country.name.common)">
                    <img :src="country.flags.png" alt="" class="h-40 w-full rounded-t-md">
                    <div class="pl-4 pt-4 pb-10">
                        <div class="font-bold pb-4 text-lg pt-2 dark:text-white">{{ country.name.common }}</div>
                        <div class="text-LightMode-dark-gray dark:text-white"><span
                                class=" text-DarkMode-mid-blue dark:text-white font-semibold">Population:</span>
                            {{ country.population }}
                        </div>
                        <div class="text-LightMode-dark-gray dark:text-white"> <span
                                class=" text-DarkMode-mid-blue dark:text-white font-semibold">Region:</span> {{
                                    country.continents ? country.continents[0] : '' }}</div>
                        <div class="text-LightMode-dark-gray dark:text-white"> <span
                                class=" text-DarkMode-mid-blue dark:text-white font-semibold">Capital:</span>
                            {{ country.capital ? country.capital[0] : '' }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import Header from '../components/Header.vue';
import Search from '../components/Search.vue';
import DropDown from '../components/DropDown.vue';
import { useCountriesStore } from '../stores/countries';
import { computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
// const route = useRoute();
const Props = defineProps({
    country: String
})
const goToCountry = (country: string) => {
    router.push({
        name: 'flag',
        params: {
            name: country
        }
    });
}
const store = useCountriesStore();
const getCountries = computed(() => store.allCountries);
onMounted(() => { store.getCountries() });
</script>