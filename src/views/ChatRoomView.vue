<script setup>
import UserStatus from '@/components/UserStatus.vue'
import LoginForm from '@/components/LoginForm.vue'
import ChatMessage from '@/components/ChatMessage.vue'

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
  loading.value = false
  newMessageText.value = ''
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
              <ChatMessage 
                :message="message"
                :owner="message.sender === user.uid"
              />
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

<style scoped>

ul {
  list-style-type: none;
  margin: 0;
  display: flex;
  flex-direction: column;
  min-width: 500px;
  background-color: #efefef;
  padding: 10px;
  border: 0;
}

li {
  display: flex;
}

</style>
