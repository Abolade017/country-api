<template>
    <div class="md:flex-row flex-col flex justify-between space-x-96 items-center mt-10">
        <div class="md:w-1/2">
            <img class="w-full" :src="country.flags.png" />
        </div>
        <div class="md:w-1/2 float-right">
            <h3 class="text-lg dark:text-white">{{ country.name.common }}</h3>
            <div class="flex justify-between">
                <div class="flex flex-col space-y-1">
                    <div>{{ country.name.nativeName.nld.common }}</div>
                    <div>{{ country.population }}</div>
                    <div>{{ country.region }}</div>
                    <div>{{ country.subregion }}</div>
                    <div>{{ country.capital[0] }}</div>
                </div>
                <div class="flex flex-col space-y-1">
                    <div>{{ country.tld[0] }}</div>
                    <div>{{ country.currencies.EUR.name }}</div>
                    <div>{{ country.languages.fra }}, {{ country.languages.deu }}, {{ country.languages.nld }}</div>
                </div>
            </div>
            <div><span>
                    <div class="flex justify-between">
                        <div class="text-white  bg-DarkMode-mid-blue rounded-sm h-4 w-10" v-for="i in country.borders"
                            :key="i">{{ i }}</div>
                    </div>
                </span></div>
        </div>
    </div>
</template>
<script setup lang="ts">

import { ref, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useCountriesStore } from '../stores/countries';

const route = useRoute();
const store = useCountriesStore();
const country = computed(() => store.getCountry);


onMounted(() => {
    store.getSearchCountry(route.params.name as string)
});

</script>