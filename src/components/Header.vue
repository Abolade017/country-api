<script setup lang="ts">


// console.log('https://restcountries.com')
</script>

<template>
  <div class="bg-white shadow-lg h-20 w-full">
    <div class="mx-24">
      <div class="flex justify-between pt-4">
        <div>
          <h1 class="text-3xl font-extrabold"> Where in the world?</h1>
        </div>
        <div>
          <slot></slot>
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

.dark {
  background-color: black;
}
</style>
