<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <nav class="w-full bg-black py-4 shadow-lg">
    <div
      class="navbar-container flex justify-between items-center max-w-7xl mx-auto px-4 lg:px-8"
    >
      <div class="brand text-white text-3xl font-bold tracking-wider">
        ANISH
      </div>

      <div class="hidden md:flex gap-8">
        <router-link
          to="/"
          class="text-gray-400 hover:text-white text-lg transition-colors duration-300 ease-in-out"
        >
          Home
        </router-link>
        <router-link
          to="/projects"
          class="text-gray-400 hover:text-white text-lg transition-colors duration-300 ease-in-out"
        >
          Projects
        </router-link>
        <router-link
          to="/services"
          class="text-gray-400 hover:text-white text-lg transition-colors duration-300 ease-in-out"
        >
          Services
        </router-link>
        <router-link
          to="/contacts"
          class="text-gray-400 hover:text-white text-lg transition-colors duration-300 ease-in-out"
        >
          Contacts
        </router-link>
      </div>

      <div @click="toggleMenu" class="md:hidden text-white cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>
    </div>

    <div
      v-if="isMenuOpen"
      class="md:hidden bg-black flex flex-col gap-4 px-8 py-4"
    >
      <router-link
        to="/"
        class="text-gray-400 hover:text-white text-lg transition-colors duration-300 ease-in-out"
      >
        Home
      </router-link>
      <router-link
        to="/projects"
        class="text-gray-400 hover:text-white text-lg transition-colors duration-300 ease-in-out"
      >
        Projects
      </router-link>
      <router-link
        to="/services"
        class="text-gray-400 hover:text-white text-lg transition-colors duration-300 ease-in-out"
      >
        Services
      </router-link>
      <router-link
        to="/contacts"
        class="text-gray-400 hover:text-white text-lg transition-colors duration-300 ease-in-out"
      >
        Contacts
      </router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar-container {
  font-family: "Poppins", sans-serif;
}

.brand {
  font-size: 2rem;
  letter-spacing: 0.05em;
}

@media (max-width: 768px) {
  .hidden {
    display: none;
  }
}
</style>
