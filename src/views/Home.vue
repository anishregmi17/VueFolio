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
        href="#projects"
        class="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-medium hover:bg-blue-600 transition duration-300 shadow-md"
      >
        Check out my Projects
      </a>
    </div>
  </div>
</template>

<style scoped>
.min-h-screen {
  min-height: calc(100vh - 4rem - 4rem);
}
</style>
