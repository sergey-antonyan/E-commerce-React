import { createSlice , createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
  status: "idle",
  products: [],
  error: null,
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async()=>{
  const response = await fetch('http://localhost:5000/products');
  const data = await response.json();
  return data
})

export const fetchByPorductId = createAsyncThunk('products/fetchByPorductId', async(id)=>{
  const response = await fetch(`http://localhost:5000/products/${id}`);
  const data = await response.json();
  return data
})

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => { 
        state.status = "success";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "Error";
      })
      .addCase(fetchByPorductId.fulfilled, (state, action)=>{
        state.status = 'success';
        state.products = [action.payload]
    })
  }
  
})

export const getAllProducts = (state)=> state.products.products
export default productSlice.reducer;

