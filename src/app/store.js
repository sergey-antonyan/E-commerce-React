import { configureStore } from "@reduxjs/toolkit";
import productReduser from '../feauters/productsSlice'

export const store = configureStore({
  reducer:{
    products: productReduser
  }
})

export const  currentState = store.getState();
export  const  dispatch =  store.dispatch;
