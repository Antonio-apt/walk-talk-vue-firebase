<script setup>
import { computed } from "vue";
import { useRoute } from 'vue-router'


const chatId = computed(() => {
  return useRoute().params.id;
});
</script>

<template>
  <main class="section">
    <h3>Welcome to ChatRoom.vue {{ chatId }}</h3>

    <router-link to="/">Back</router-link>

  </main>
</template>