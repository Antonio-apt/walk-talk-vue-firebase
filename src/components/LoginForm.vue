<script setup>
import { ref } from 'vue'
import { auth } from '@/firebase'

const email = ref('')
const password = ref('')
const activeButton = ref(false)
const loading = ref(false)
const errorMessage = ref('')
const isNewUser = ref(false)

const signIn = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    await auth.signInWithEmailAndPassword(email.value, password.value)
  } catch (error) {
    errorMessage.value = error.message
  }
  loading.value = false
}

const signUp = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    await auth.createUserWithEmailAndPassword(email.value, password.value)
  } catch (error) {
    errorMessage.value = error.message
  }
  loading.value = false
}

const signInAnonymously = () => {
  activeButton.value = true
  auth.signInAnonymously()
}

const validateInput = () => {
  return email.value.trim() !== '' && password.value.trim() !== ''
}
</script>

<template>
  <aside class="section">
    <h3>Sign in Anonymously</h3>
    <button class="button" :class="{ 'is-loading': activeButton }" @click="signInAnonymously()">Sign In</button>

    <div v-if="isNewUser">
      <h3>Sign Up for a New Account</h3>
      <a href="#" @click="isNewUser = false">Returning User?</a>
    </div>

    <div v-else>
      <h3>Sign In with Email</h3>
      <a href="#" @click="isNewUser = true">New user?</a>
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
      @click="isNewUser ? signUp() : signIn()"
      :disabled="!validateInput()"
    >{{ isNewUser ? 'Sign Up' : 'Login'}}</button>

    <p class="has-text-danger" v-if="errorMessage">{{ errorMessage }}</p>
  </aside>
</template>
