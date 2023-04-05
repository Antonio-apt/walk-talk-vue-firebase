<script setup>
  import { db } from '@/firebase'
  // import { ref } from 'vue'
  import { useCollection } from 'vuefire'
  import { collection, query, where, addDoc } from 'firebase/firestore'

  const props = defineProps({
    uid: {
      required: true
    }
  })
  
  const chatsCollection = collection(db, 'chats')
  const chats = useCollection((query(chatsCollection, where('owner', '==', props.uid))))

  const createChatRoom = async () => {
     await addDoc((chatsCollection), {
      createdAt: Date.now(),
      owner: props.uid,
      members: [props.uid]
    })
  }

</script>

<template>
  <div>
    <ul v-if="chats">
      <li v-for="chat of chats" :key="chat.uid">
        {{ chat.id }}
      </li>
    </ul>

    <button @click="createChatRoom()"> Create New Chat Room </button>
  </div>
</template>
