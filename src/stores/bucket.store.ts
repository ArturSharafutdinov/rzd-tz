import { defineStore } from 'pinia'
import type { Product } from '@/model/product'

export const useBucketStore = defineStore('bucket', {
  state: () => {
    return {
      bucketSize: 0,
      bucket: new Map<Product, number>()
    }
  },
  actions: {
    addToBucket(product: Product) {

      if(!product) {
        return false
      }

      if(this.bucket.has(product)) {
        this.bucket.set(product, this.bucket.get(product) + 1)
      } else {
        this.bucket.set(product, 0)
      }

      this.bucketSize++

      return true
    }
  }
})