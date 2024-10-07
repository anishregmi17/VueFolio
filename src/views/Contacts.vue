<script setup>
import { ref } from "vue";

// contact page ko title
const title = ref("My Contact:");

// form ko state
const form = ref({
  name: "",
  email: "",
  message: "",
});

// form ko validation state
const errors = ref({
  name: "",
  email: "",
  message: "",
});

// Handling form submission ra resetting errors
const handleSubmit = () => {
  errors.value = { name: "", email: "", message: "" };

  // form ko lagi basic validations
  if (!form.value.name) {
    errors.value.name = "Name is required";
  }

  const emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(form.value.email)) {
    errors.value.email = "Valid email is required";
  }

  if (!form.value.message) {
    errors.value.message = "Message cannot be empty";
  }

  // valid xa vane then submit
  if (!errors.value.name && !errors.value.email && !errors.value.message) {
    console.log("Form submitted successfully:", form.value);
    alert("Thank you for contacting us!");
    // submit vayesi form clear garne
    form.value = { name: "", email: "", message: "" };
  }
};
</script>

<template>
  <div class="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <h1 class="text-2xl font-bold mb-6 text-center">{{ title }}</h1>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700"
          >Name</label
        >
        <input
          v-model="form.name"
          type="text"
          id="name"
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Your Name"
        />
        <span v-if="errors.name" class="text-red-500 text-sm">{{
          errors.name
        }}</span>
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Email</label
        >
        <input
          v-model="form.email"
          type="email"
          id="email"
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="you@example.com"
        />
        <span v-if="errors.email" class="text-red-500 text-sm">{{
          errors.email
        }}</span>
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-gray-700"
          >Message</label
        >
        <textarea
          v-model="form.message"
          id="message"
          rows="4"
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Your message here..."
        ></textarea>
        <span v-if="errors.message" class="text-red-500 text-sm">{{
          errors.message
        }}</span>
      </div>

      <div class="text-center">
        <button
          type="submit"
          class="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
        >
          Send Message
        </button>
      </div>
    </form>

    <div class="text-center mt-6">
      <p class="text-gray-600">
        Or reach us at: <span class="font-semibold">+977-9862118330</span>
      </p>
    </div>
  </div>
</template>

<style scoped></style>
