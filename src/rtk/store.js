import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slice/products-slice'
import cartSlice from './slice/cart-slice'



export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
  },
})

