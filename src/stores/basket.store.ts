import { defineStore } from 'pinia'
import type { Product } from '@/model/product'

export const useBasketStore = defineStore('basket', {
  state: () => {
    return {
      basketSize: 0,
      basket: new Map<Product, number>()
    }
  },
  actions: {
    addToBasket(product: Product) {

      if(!product) {
        return false
      }

      if(this.basket.has(product)) {
        this.basket.set(product, this.basket.get(product) + 1)
      } else {
        this.basket.set(product, 0)
      }

      this.basketSize++

      return true
    }
  }
})