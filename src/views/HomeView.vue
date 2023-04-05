<script setup>
import LoginForm from '@/components/LoginForm.vue'
import UserStatus from '@/components/UserStatus.vue'
import UserProfile from '@/components/UserProfile.vue';
import ChatList from '@/components/ChatList.vue';
import LoginModal from '@/components/LoginModal.vue';
import { useModalStore } from "@/stores/modal";

const store = useModalStore();
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
    <LoginModal v-if="store.isOpen"/>
  </main>
</template>
