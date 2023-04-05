<script setup>
  import { auth } from '@/firebase'
  import { onUnmounted, ref } from 'vue'

  const user = ref( null )
  const unsubscribe = auth.onAuthStateChanged( 
    firebaseUser => user.value = firebaseUser
  ) 

  onUnmounted( unsubscribe )
</script>

<template>
  <div>
    <slot name="user" :user="user"></slot>
  </div>
</template>
