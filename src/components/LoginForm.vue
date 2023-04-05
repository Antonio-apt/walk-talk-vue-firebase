<script setup>
import { ref } from 'vue'
import { auth } from '@/firebase'
let activeButton = ref(false)
const signInAnonymously = () => {
  activeButton.value = true
  auth.signInAnonymously()
}
</script>

<template>
  <aside>
    <h3>Sign in anonymously</h3>
    <button @click="signInAnonymously()" :disabled="activeButton">Sign in</button>
  </aside>
</template>
