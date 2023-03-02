<template>
    <div class="flex justify-between items-center">
        <div><img src="" alt=""></div>
        <div>
            <img  class="w-100 h-48" :src="country.flags.png" />
            <h3 class="text-lg text-white">Nigeria</h3>
            <div class="flex justify-between">
                <div class="flex flex-col space-y-1">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div></div>
            </div>
            <div><span>
                    <div class="flex justify-between">
                        <div class="text-white bg-DarkMode-mid-blue rounded-sm h-4 w-10">nigeria</div>
                        <div class="text-white bg-DarkMode-mid-blue rounded-sm h-4 w-10">korea</div>
                        <div class="text-white bg-DarkMode-mid-blue rounded-sm h-4 w-10">england</div>
                    </div>
                </span></div>
        </div>
    </div>
</template>
<script setup lang="ts">

import {ref, computed, onMounted} from 'vue';
import { useRouter, useRoute } from 'vue-router';
import {useCountriesStore} from '../stores/countries';

const route = useRoute();
const store = useCountriesStore();
const country = computed(() => store.getCountry);


onMounted(() => { 
    store.getSearchCountry(route.params.name as string) 
}); 

</script>