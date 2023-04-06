import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const _isOpen = ref(false)

  function _open() {
    _isOpen.value = true
  }

  function _close() {
    _isOpen.value = false
  }

  return {
    get isOpen() {
      return _isOpen.value
    },
    set isOpen(value) {
      if (value) {
        _open()
      } else {
        _close()
      }
    },
  }
})
