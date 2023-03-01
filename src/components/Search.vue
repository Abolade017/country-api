<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
import { useCountriesStore } from '@/stores/countries';
import {ref} from 'vue'
const store=useCountriesStore();
const search=ref('');
const searchCountry= ()=>{
    console.log(search.value);
    store.name=search.value;
    store.getSearchCountry();
}
</script>

<template>
    <form @submit.prevent="searchCountry" class="">
        <div class="relative rounded-md shadow-lg">
            <div class="px-10">
                <div class="pointer-events-none absolute inset-y-0 left-4 flex items-center pl-3">
                    <MagnifyingGlassIcon class="h-5 w-5 text-gray-400 font-bold" aria-hidden="true" />
                </div>
                <input type="search" name="search" v-model="search"
                    class="block w-96 h-14 rounded-md pl-10 bg-field-purple focus:outline-none focus:ring-none"
                    placeholder="Search for a country..." />
            </div>
        </div>
    </form>
</template>