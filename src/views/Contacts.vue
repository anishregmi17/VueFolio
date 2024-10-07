<script setup>
import { ref } from "vue";
const title = ref("My Contact :");
</script>

<template>
  <div class="contacts">
    <h1>{{ title }}</h1>
    <p>+977-9862118330</p>
  </div>
</template>

<style scoped>
.contacts {
  text-align: center;
}
</style>
