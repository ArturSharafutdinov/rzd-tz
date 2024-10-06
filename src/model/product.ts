export class Rating {
  rate: number
  count: number
}

export class Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

export class Price {
  min: number
  max: number
}

export class ProductFilter {
  category = 'all'
  price: Price

  constructor() {
    this.price = new Price()
  }

  static MIN_PRICE = 0
  static MAX_PRICE = 1000000
  static CATEGORY_ALL = 'all'

  static defaultState = (): ProductFilter => {
    return new ProductFilter()
  }
}