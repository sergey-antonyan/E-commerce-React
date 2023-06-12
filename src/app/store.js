import { configureStore } from "@reduxjs/toolkit";
import productReduser from '../feauters/productsSlice'
import categoryReduser from '../feauters/categorySlice'
import cartReduser from '../feauters/cartSlice'

export const store = configureStore({
  reducer:{
    products: productReduser,
    category: categoryReduser,
    cart: cartReduser
  }
})

export const  currentState = store.getState();
export  const  dispatch =  store.dispatch;
