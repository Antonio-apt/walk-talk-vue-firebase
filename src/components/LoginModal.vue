<script setup>
import { useModalStore } from "@/stores/modal";

const store = useModalStore();
</script>

<template>
  <div class="modal-overlay">
    <div class="modal">
    </div>
    <div class="modal-close">
      <img @click="store.isOpen(false)" class="modal-close__close-img" src="@/assets/close-icon.svg" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: $bg-overlay;
  .modal {
    text-align: center;
    background-color: $clr-white;
    height: 500px;
    width: 500px;
    margin-top: 7%;
    padding: 60px 0;
    border-radius: 20px;
  }
  .modal-close {
    margin: 7% 0 0 16px;
    &__close-img {
      cursor: pointer;
      width: 25px;
    }
  }
}
</style>