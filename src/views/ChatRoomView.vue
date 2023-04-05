<script setup>
import UserStatus from '@/components/UserStatus.vue'
import LoginForm from '@/components/LoginForm.vue'

import { collection, query, orderBy, limit } from 'firebase/firestore'
import { useCollection } from 'vuefire'

import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { db } from '@/firebase'

const newMessageText = ref('')
const loading = ref(false)

const messagesCollection = computed(() => {
  return db.doc(`chats/${chatId.value}`).collection('messages')
})

const chatId = computed(() => {
  return useRoute().params.id
})

const messages = useCollection(
  query(collection(db, 'chats', chatId.value, 'messages'), orderBy('createdAt'), limit(10))
)

const addMessage = async (uid) => {
  loading.value = true

  const { id: messageId } = messagesCollection.value.doc()

  await messagesCollection.value.doc(messageId).set({
    text: newMessageText.value,
    sender: uid,
    createdAt: Date.now()
  })
}
</script>

<template>
  <main class="section">
    <h3>Welcome to ChatRoom.vue {{ chatId }}</h3>

    <UserStatus>
      <template #user="{ user }">
        <div v-if="user">
          <ul>
            <li v-for="message of messages" :key="message.id">
              {{ message.text }}
            </li>
          </ul>

          <input v-model="newMessageText" class="input" />

          <button
            :disabled="!newMessageText || loading"
            class="button is-success"
            type="text"
            @click="addMessage(user.uid)"
          >
            Send
          </button>
        </div>

        <LoginForm v-else />
      </template>
    </UserStatus>
  </main>
</template>
