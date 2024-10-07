<script setup>
import { ref } from "vue";
const title = ref("Services :");
</script>

<template>
  <div class="services">
    <h1>{{ title }}</h1>
    <p>Web-Development</p>
  </div>
</template>

<style scoped>
.services {
  text-align: center;
}
</style>
