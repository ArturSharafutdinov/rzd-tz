import { defineStore } from 'pinia'

export const useBucketStore = defineStore('bucket', {
  state: () => {
    return {
      bucketSize: 0
    }
  }
})