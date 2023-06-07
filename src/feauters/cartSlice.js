import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"

const initialState = {
  status: 'idle',
  cart: [],
  error: null
}

export const fetchCart = createAsyncThunk('cart/fetchCart' , async ()=>{
  const response = await fetch('http://localhost:5000/cart')
  const data = await response.json()
  return data
})

export const fetchByCartId = createAsyncThunk("cart/fetchByCartId", async (id)=>{
  const response = await fetch(`http://localhost:5000/cart/${id}`)
  const data = await response.json()
  return data
})

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCart.fulfilled, (state, action) => { 
        state.status = "success";
        state.cart = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = "Error";
      })
      .addCase(fetchByCartId.fulfilled, (state, action)=>{
        state.status = 'success';
        state.cart = [action.payload]
    })
  }
  
})

export const getAllCart = (state)=> state.cart.cart
export default cartSlice.reducer;