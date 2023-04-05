<script setup>
import LoginForm from '../components/LoginForm.vue'
import UserStatus from '../components/UserStatus.vue'
import UserProfile from '../components/UserProfile.vue';
</script>

<template>
  <main>
    <UserStatus>
      <template v-slot:user="{ user }">
        <div v-if="user">
          <UserProfile :user="user"/>
        </div>
        <LoginForm v-else/>
      </template>
    </UserStatus>
  </main>
</template>
