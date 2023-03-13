<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
import { useCountriesStore } from '@/stores/countries';
import { ref } from 'vue';

const store = useCountriesStore();
const search = ref('');
const searchCountry = () => {
    store.getSearchCountry(search.value);
    store.getCountry;
}
</script>

<template>
    <form @submit.prevent="searchCountry" class="">
        <div class="w-96">
            <input type="search" name="search" v-model="search"
                class="relative w-full md:w-100 h-14 rounded-md shadow-lg  pl-10 bg-field-purple focus:outline-none focus:ring-none placeholder:pl-10 placeholder:text-LightMode-dark-gray dark:placeholder:text-white dark:bg-dark-blue dark:text-white"
                placeholder="Search for a country..." />
            <div class="px-10">
                <div class="pointer-events-none absolute top-36 pt-3 left-8 md:left-20 flex items-center pl-0 md:pl-10 pr-5">
                    <MagnifyingGlassIcon class="h-5 w-5 text-gray-400 font-bold dark:text-white" aria-hidden="true" />
                </div>
            </div>
        </div>
    </form>
</template>