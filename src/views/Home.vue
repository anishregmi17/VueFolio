<script setup>
import { ref } from "vue";
const title = ref("Hello !!!");
</script>

<template>
  <div class="home">
    <h1>{{ name }}</h1>
    <p>I'm Anish Regmi (Bsc. CSIT Student)</p>
    <router-link to="/projects">Check out my projects</router-link>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
}
</style>
