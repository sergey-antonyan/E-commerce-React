import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"

const initialState = {
  status: 'idle',
  category: [],
  error: null
}

export const fetchCategory = createAsyncThunk('category/fetchCategory' , async ()=>{
  const response = await fetch('http://localhost:5000/category')
  const data = await response.json()
  return data
})

export const fetchByCategoryId = createAsyncThunk("category/fetchByCategoryId", async (id)=>{
  const response = await fetch(`http://localhost:5000/category/${id}`)
  const data = await response.json()
  return data
})

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCategory.fulfilled, (state, action) => { 
        state.status = "success";
        state.category = action.payload;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.status = "Error";
      })
      .addCase(fetchByCategoryId.fulfilled, (state, action)=>{
        state.status = 'success';
        state.category = [action.payload]
    })
  }
  
})

export const getAllCategory = (state)=> state.category.category
export default categorySlice.reducer;