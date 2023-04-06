<script setup>
  import { db } from '@/firebase'
  import { useCollection } from 'vuefire'
  import { collection, query, where, addDoc } from 'firebase/firestore'

  const props = defineProps({
    uid: {
      required: true
    }
  })
  
  const chatsCollection = collection(db, 'chats')
  const chatsQuery = query(chatsCollection, where('owner', '==', props.uid))
  const chats = useCollection(chatsQuery)

  const createChatRoom = async () => {
    try {
      await addDoc((chatsCollection), {
        createdAt: Date.now(),
        owner: props.uid,
        members: [props.uid]
      })
    } catch (error) {
      console.error(error)
    }
  }
</script>

<template>
  <div>
    <ul v-if="chats">
      <li v-for="chat of chats" :key="chat.uid">
        <router-link :to="{ name: 'chat', params: { id: chat.id } }">{{ chat.id }}</router-link>
      </li>
    </ul>

    <button @click="createChatRoom()"> Create New Chat Room </button>
  </div>
</template>
