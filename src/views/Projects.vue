<script setup>
import { ref } from "vue";

const projects = ref([
  {
    name: "Online Forum",
    description: "A platform for discussions and sharing knowledge.",
  },
  {
    name: "PNC Food Park",
    description: "A simple restaurant management system for food ordering.",
  },
  {
    name: "Firefly Restro",
    description:
      "A responsive web application for managing restaurant operations.",
  },
  {
    name: "Book Store Management System",
    description: "An application for managing book sales and inventory.",
  },
]);
</script>

<template>
  <div class="projects py-12 bg-gray-50 mt-7">
    <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="border border-gray-300 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 h-64 flex flex-col justify-between"
      >
        <div class="p-4 flex flex-col flex-grow">
          <h2 class="text-xl font-bold mb-2">{{ project.name }}</h2>
          <p class="text-gray-700 mb-4 flex-grow">{{ project.description }}</p>
          <router-link
            to="#"
            class="mt-auto inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            View Project
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects {
  padding: 20px;
  text-align: center;
}
</style>
