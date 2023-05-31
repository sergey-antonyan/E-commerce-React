import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"

const initialState = {
  status: 'idle',
  category: [],
  error: null
}

export const fetchCategory = createAsyncThunk('category/fetchCategory' , async ()=>{
  response = await fetch('http://localhost:5000/category')
  const data = await response.json()
  return data
})