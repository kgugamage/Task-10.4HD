import { defineStore } from 'pinia'

export const useFeedbackStore = defineStore('feedback', {
  state: () => ({
    message: '',
    submitted: false
  }),
  getters: {
    charCount: (state) => state.message.length
  },
  actions: {
    submit(message) {
      this.message = message
      this.submitted = true
    },
    reset() {
      this.message = ''
      this.submitted = false
    }
  }
})