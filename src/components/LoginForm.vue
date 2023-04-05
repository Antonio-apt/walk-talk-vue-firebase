<script setup>
import { ref } from 'vue'
import { auth } from '@/firebase'

let email = ref('')
let password = ref('')
let activeButton = ref(false)
let loading = ref(false)
let errorMessage = ref('')
let newUser = ref(false)

const signInOrCreateUser = async () => {
 
 loading.value = true;
 errorMessage.value = '';
 try {
   if (newUser.value) {
     await auth.createUserWithEmailAndPassword(email.value, password.value)
   } else {
     await auth.signInWithEmailAndPassword(email.value, password.value)
   }
 } catch (error) {
     errorMessage.value = error.message;
 }

 loading.value= false;
}


const signInAnonymously = () => {
  activeButton.value = true
  auth.signInAnonymously()
}
</script>

<template>
  <aside class="section">
    <h3>Sign in Anonymously</h3>
    <button class="button" @click="signInAnonymously()">Sign In</button>

    <div v-if="newUser">
      <h3>Sign Up for a New Account</h3>
      <a href="#" @click="newUser = false">Returning User?</a>
    </div>

    <div v-else>
      <h3>Sign In with Email</h3>
      <a href="#" @click="newUser = true">New user?</a>
    </div>

    <label for="email">Email</label>
    <br />
    <input v-model="email" placeholder="email" type="email" class="input" />
    <br />

    <label for="password">Password</label>
    <br />
    <input v-model="password" type="password" class="input" />

    <br />

    <button
      class="button is-info"
      :class="{ 'is-loading': loading }"
      @click="signInOrCreateUser()"
    >{{ newUser ? 'Sign Up' : 'Login'}}</button>

    <p class="has-text-danger" v-if="errorMessage">{{ errorMessage }}</p>
  </aside>
</template>
