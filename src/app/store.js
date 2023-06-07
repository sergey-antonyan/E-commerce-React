import { configureStore } from "@reduxjs/toolkit";
import productReduser from '../feauters/productsSlice'
import categoryReduser from '../feauters/categorySlice'

export const store = configureStore({
  reducer:{
    products: productReduser,
    category: categoryReduser
  }
})

export const  currentState = store.getState();
export  const  dispatch =  store.dispatch;
