<script setup>
import { ref } from "vue";
const title = ref("My Projects");
const projects = ref(["Project 1", "Project 2", "Project 3"]);
</script>

<template>
  <div class="projects">
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="(project, index) in projects" :key="index">{{ project }}</li>
    </ul>
  </div>
</template>

<style scoped>
.projects {
  padding: 20px;
  text-align: center;
}
</style>
