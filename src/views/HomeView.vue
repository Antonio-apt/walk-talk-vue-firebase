<script setup>
import LoginForm from '@/components/LoginForm.vue'
import UserStatus from '@/components/UserStatus.vue'
import UserProfile from '@/components/UserProfile.vue';
import ChatList from '@/components/ChatList.vue';
</script>

<template>
  <main>
    <UserStatus>
      <template #user="{ user }">
        <div v-if="user">
          <UserProfile :user="user"/>
          <ChatList :uid="user.uid" />
        </div>
        <LoginForm v-else/>
      </template>
    </UserStatus>
  </main>
</template>
