import { defineStore } from 'pinia'
import type { Product } from '@/model/product'

export const useBasketStore = defineStore('basket', {
  state: () => {
    return {
      basketSize: 0,
      basket: new Map<Product, number>()
    }
  },
  getters: {
    totalPrice(state) {

      let total = 0

      state.basket.forEach((count, product) => {
        total += product.price * count
      })

      return total
    }
  },
  actions: {
    addToBasket(product: Product) {

      if(!product) {
        return false
      }

      if(this.basket.has(product)) {
        this.basket.set(product, (this.basket.get(product) ?? 0) + 1)
      } else {
        this.basket.set(product, 1)
      }

      this.basketSize++

      return true
    },
    removeFromBasket(product: Product) {

      if(!product) {
        return false
      }

      if(!this.basket.has(product)) {
        return false
      }

      const productCount = this.basket.get(product) ?? 0

      if(productCount === 1) {
        this.basket.delete(product)
      } else {
        this.basket.set(product, productCount - 1)
      }

      this.basketSize--

      return true
    },
    clearBasket() {
      this.basket.clear()
      this.basketSize = 0
    }
  }
})