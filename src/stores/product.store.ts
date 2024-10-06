import { defineStore } from 'pinia'
import axios from 'axios'
import { reactive, ref } from 'vue'
import { useNotify } from '@/composables/useNotify'
import { inRange } from '@/utils/math.util'
import { type Product, ProductFilter } from '@/model/product'

const PRODUCT_API = {
  ALL: '/products',
  CATEGORIES: '/products/categories'
}

export const useProductStore = defineStore('product', () => {

  const { addNotify } = useNotify()

  const products = ref<Product[]>([])
  const isProductsLoading = ref<boolean>(false)

  const getAllProducts = () => {
    isProductsLoading.value = true
    axios.get(import.meta.env.VITE_APP_API_URL + PRODUCT_API.ALL)
      .then((response) => {
        products.value = response.data
      })
      .catch((e) => {
        addNotify(e)
      })
      .finally(() => {
        isProductsLoading.value = false
      })
  }

  const filter = reactive<ProductFilter>(new ProductFilter())

  const applyFilter = () => {
    products.value = products.value.filter(product => {

      let passFilter = true

      if(filter.category !== ProductFilter.CATEGORY_ALL) {
        passFilter = passFilter && (product.category === filter.category)
      }

      passFilter = passFilter && inRange(product.price, filter.price.min ?? ProductFilter.MIN_PRICE, filter.price.max ?? ProductFilter.MAX_PRICE)

      return passFilter
    })
  }

  const clearFilter = () => {
    Object.assign(filter, ProductFilter.defaultState())
    getAllProducts()
  }

  const categories = ref<string[]>([])

  const getAllCategories = () => {
    axios.get(import.meta.env.VITE_APP_API_URL + PRODUCT_API.CATEGORIES)
      .then((response) => {
        categories.value = [ ...response.data, 'all' ]
      }).catch((e) => {
      addNotify(e)
    })
  }

  return {
    products,
    isProductsLoading,
    getAllProducts,

    filter,
    applyFilter,
    clearFilter,

    categories,
    getAllCategories
  }

})