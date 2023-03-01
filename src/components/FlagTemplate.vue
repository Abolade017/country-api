<template>
    <div class="relative">
    <div class="flex flex-wrap space-x-24">
        <div class="w-1/5 rounded-md bg-white shadow-lg mt-10 " v-for="i in getCountries" :key="i">
            <div class="">
                <img :src="i.flags.png" alt="" class="flex-shrink-0 h-40 w-full">
                <div class="pl-4 pt-4 pb-10">
                <div class="font-bold pb-4 text-lg pt-2">{{ i.name.common }}</div>
                <div class="text-lightMode-dark-gray"> <span class=" font-semibold">Population:</span> {{ i.population }}</div>
                <div class="text-lightMode-dark-gray"> <span class=" font-semibold">Region:</span> {{ i.continents }}</div>
                <div class="text-lightMode-dark-gray"> <span class=" font-semibold">Capital:</span> {{ i.capital }}</div>
            </div>
            </div>
        </div>
    </div>
</div>
</template>
<script setup>
import { useCountriesStore } from '../stores/countries.ts'
import { computed, onMounted } from 'vue'
const store = useCountriesStore()
const getCountries = computed(() => store.allCountries)
const capital=computed(()=>store.allCountries.capital.toString())
onMounted(() => { store.getCountries() })
</script>