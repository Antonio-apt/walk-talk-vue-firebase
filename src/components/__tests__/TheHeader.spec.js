import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { useModalStore } from '@/stores/modal'
import TheHeader from '@/components/TheHeader.vue'

describe('TheHeader', () => {
  it('renders the title correctly', () => {
    const wrapper = mount(TheHeader)
    expect(wrapper.find('.header__title').text()).toBe('Vue Firebase Chat')
  })

  it('opens the modal when the button is clicked', async () => {
    const wrapper = mount(TheHeader)
    const store = useModalStore()

    expect(store.isOpen.value).toBe(false)

    await wrapper.find('.btn').trigger('click')

    expect(store.isOpen.value).toBe(true)
  })
})
