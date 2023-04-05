<script setup>
  import { auth } from '@/firebase'

  defineProps({
  user: {
    required: true
  }
})
</script>

<template>
  <div>
    Logged in as {{ user.uid }}
    <button @click="auth.signOut()"> Sign out </button>
  </div>
</template>