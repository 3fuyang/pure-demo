import { defineStore } from "pinia"

export const useCounterPersist = defineStore({
  id: 'counterPersist',
  state: () => ({
    counterPersist: 0
  }),
  getters: {
    doubleCountPersist: (state) => 2 * state.counterPersist
  },
  actions: {
    increment () {
      this.counterPersist++
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'counterPersist',
        storage: sessionStorage
      }
    ]
  }
})