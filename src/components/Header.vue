<script setup lang="ts">
</script>
<template>
  <div class="bg-white shadow-lg h-20 w-full">
    <div class="mx-4 md:mx-24">
      <div class="flex justify-between pt-4">
        <div>
          <h1 class="text-lg md:text-3xl font-extrabold dark:text-white"> Where in the world?</h1>
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
