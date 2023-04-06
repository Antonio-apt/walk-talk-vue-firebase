<script setup>
import { useModalStore } from "@/stores/modal";

const store = useModalStore();
</script>

<template>
  <header class="header">
    <h1 class="header__title">Vue 
      <span class="header__title--yellow">Firebase</span>
      Chat
    </h1>

    <button 
      @click="store.open()"
      class="btn"
    >
      Login / Register
    </button>
  </header>
</template>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  background-color: $bg-header;
  padding: 1rem;
  &__title {
    color: $clr-green;
    &--yellow {
      color: $clr-yellow;
    }
  }
}
</style>
