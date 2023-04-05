<script setup>
import LoginForm from '../components/LoginForm.vue'
import UserStatus from '../components/UserStatus.vue'
</script>

<template>
  <main>
    <UserStatus>
      <template v-slot:user="{ user }">
        <div v-if="user">
          logged in as {{ user.uid }}
        </div>
        <LoginForm v-else/>
      </template>
    </UserStatus>
  </main>
</template>
