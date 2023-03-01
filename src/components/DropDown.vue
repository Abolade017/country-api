<template>
  <div class="w-52">
    <Menu as="div" class="inline-block text-left w-full ">
      <div>
        <MenuButton
          class="flex space-x-4 rounded-md bg-white shadow-sm h-14  px-10 py-4 text-sm font-medium  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          Filter by Region
          <ChevronDownIcon class="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
        </MenuButton>
      </div>

      <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
        <MenuItems
          class=" mt-2  origin-top-right rounded-md bg-white shadow-sm ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div class="px-1 py-1" v-for="i in regions" :key="i.id">
            <MenuItem v-slot="{ active }">
            <button :class="[
              active ? 'bg-violet-500 text-white' : 'text-gray-900',
              'group flex w-full items-center rounded-md px-2 py-2 text-sm',
            ]" @click="getRegion(i.name)">
              {{ i.name }}
            </button>
            </MenuItem>
          </div>

        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script setup >
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { useCountriesStore } from '../stores/countries.ts'
import { ref, computed } from 'vue'
const store = useCountriesStore();
const regions = computed(() => store.allRegion);
const getRegion = (region) => {
  console.log(region)
  store.region = region;
  store.getRegion();
}
// const ref = ''

</script>

