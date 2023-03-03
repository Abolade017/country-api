<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
<template>
  <div class="bg-white dark:bg-dark-blue shadow-lg h-20 w-full">
    <div class="mx-4 md:mx-24">
      <div class="flex justify-between pt-4">
        <div>
          <h1 class="text-lg md:text-3xl font-extrabold dark:text-white"> Where in the world?</h1>
        </div>
        <div>
          <button @click="toggleDark()" class="mt-2">
            <div class="flex space-x-2 items-center"> <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:text-white">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
              <p class="dark:text-white">Dark Mode</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400&display=swap');

h1 {
  font-family: 'Ubuntu', sans-serif;
}

/* .dark {
  background-color: black;
} */
</style>
