<script setup>
import { ref, onMounted } from "vue";

const services = ref([]);

// json file fetch garna tarika using onMounted vue hook method
onMounted(async () => {
  try {
    const response = await fetch("/api/services.json");
    services.value = await response.json();
  } catch (error) {
    console.error("Error fetching services data:", error);
  }
});
</script>

<template>
  <div class="services-page py-10">
    <h1 class="text-4xl font-bold text-center mb-8">My Services</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="bg-white rounded-lg shadow-lg p-6"
      >
        <h2 class="text-xl font-semibold mb-4">{{ service.title }}</h2>
        <p class="text-gray-600">{{ service.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.services-page {
  text-align: center;
}
</style>
