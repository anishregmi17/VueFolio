<script setup></script>

<template>
  <nav class="w-full bg-black py-4">
    <div
      class="navbar-container flex justify-between items-center max-w-7xl mx-auto px-4 lg:px-8"
    >
      <div class="brand text-white text-2xl font-bold">ANISH</div>
      <div class="links flex gap-8">
        <router-link
          to="/"
          class="text-gray-400 hover:text-white text-lg transition duration-300"
        >
          Home
        </router-link>
        <router-link
          to="/projects"
          class="text-gray-400 hover:text-white text-lg transition duration-300"
        >
          Projects
        </router-link>
        <router-link
          to="/contacts"
          class="text-gray-400 hover:text-white text-lg transition duration-300"
        >
          Contacts
        </router-link>
        <router-link
          to="/services"
          class="text-gray-400 hover:text-white text-lg transition duration-300"
        >
          Services
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
