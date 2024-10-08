<script setup></script>

<template>
  <div
    class="min-h-screen bg-gray-100 flex flex-col justify-center items-center relative"
  >
    <div class="flex flex-col items-center space-y-4">
      <img
        src="../assets/anish2.jpg"
        alt="Profile"
        class="rounded-full w-56 h-56 object-cover shadow-2xl transition-transform duration-300 hover:scale-105"
      />

      <div id="about" class="text-center">
        <h2 class="text-3xl font-semibold text-gray-800">
          Hi, I'm Anish Regmi
        </h2>
        <p class="mt-2 text-gray-600 text-lg">CS Student and Tech Enthusiast</p>
      </div>
      <a
        class="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 px-4 py-2 rounded-lg"
      >
        <router-link to="/projects" class="block"> Projects </router-link>
      </a>
    </div>
  </div>
</template>

<style scoped>
.min-h-screen {
  min-height: calc(100vh - 4rem - 4rem);
}
</style>
