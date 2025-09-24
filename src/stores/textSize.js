import { defineStore } from 'pinia'

export const useTextSizeStore = defineStore('textSize', {
  state: () => ({ size: 'medium' }),
  getters: {
    sizeClass: (state) => {
      return state.size === 'small' ? 'text-small' : state.size === 'large' ? 'text-large' : 'text-medium'
    }
  },
  actions: {
    setSize(s) { if (['small','medium','large'].includes(s)) this.size = s }
  }
})