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
    <h1 class="text-4xl font-bold text-center mb-10">My Services</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 lg:px-32">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="bg-white border border-gray-300 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
      >
        <h2 class="text-2xl font-semibold mb-4 text-black">
          {{ service.title }}
        </h2>
        <p class="text-gray-600 mb-6">{{ service.description }}</p>
        <button
          class="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
        >
          <router-link to="/contacts">contact for more</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.services-page {
  text-align: center;
}
</style>
