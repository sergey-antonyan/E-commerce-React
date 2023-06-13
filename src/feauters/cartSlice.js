import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createCart = createAsyncThunk(
  'cart/createCart',
  async ({ productId, userId }, { getState }) => {
    const { cart } = getState().cart;
    
    // Check if prod already exists in the cart
    const existingCartItem = cart.find(item => item.productId === productId);
    if (existingCartItem) {
      throw new Error('Product already exists in the cart.');
    }

    const res = await fetch('http://localhost:5000/cart', {
      method: 'POST',
      body: JSON.stringify({
        productId,
        userId,
        quantity: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    const json = await res.json();
    return json;
  }
);


export const getCart = createAsyncThunk("cart/getCart", async (userId) => {
  const res = await fetch(`http://localhost:5000/cart/${userId}`);
  const json = await res.json();
  const cartItemsWithProductInfo = await Promise.all(
    json.map(async (cartItem) => {
      const productRes = await fetch(`http://localhost:5000/products/${cartItem.productId}`);
      const productJson = await productRes.json();
      return {
        ...cartItem,
        product: productJson
      };
    })
  );
  return cartItemsWithProductInfo;
});


// export const getCart = createAsyncThunk("cart/getCart", async (userId) => {
//   const res = await fetch(`http://localhost:5000/cart/${userId}`);
//   const json = await res.json();
//   return json;
// });

export const deleteCartProduct = createAsyncThunk(
  "cart/deleteCartProducts",
  async ({userId , productId}) => {
    const res = await fetch(`http://localhost:5000/cart/${userId}/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
    });
    const json = await res.json();
    return json;
  }
);

export const decrement = createAsyncThunk('cart/decrement', async (id) => {
  const res = await fetch(`http://localhost:5000/cart/decrement/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      quantity: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
  });
  const json = await res.json();
  return json;
});

export const increment = createAsyncThunk('cart/increment', async (id) => {
  const res = await fetch(`http://localhost:5000/cart/increment/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      quantity: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
  });
  const json = await res.json();
  return json;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    status: 'idle',
    cart: [],
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (action.payload) {
          state.cart.push(action.payload);
        }
      })
      .addCase(createCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cart = action.payload;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteCartProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteCartProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (action.payload.cartItem) {
          state.cart.push(action.payload.cartItem);
        }
      })
      .addCase(deleteCartProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(decrement.pending, (state) => {
        state.status = "loading";
      })
      .addCase(decrement.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Perform the necessary logic based on the response from the server
        // Update the cart state accordingly
      })
      .addCase(decrement.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(increment.pending, (state) => {
        state.status = "loading";
      })
      .addCase(increment.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Perform the necessary logic based on the response from the server
        // Update the cart state accordingly
      })
      .addCase(increment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  }
});

export const selectCart = (state) => state.cart.cart;
export const selectCartStatus = (state) => state.cart.status;
export const selectCartError = (state) => state.cart.error;

export default cartSlice.reducer;




// import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"


// const initialState = {
//   status: 'success',
//   cart: [],
//   error: null
// }

// export const createCart = createAsyncThunk('cart/createCart', async({productId, userId})=>{
//   const res = await fetch('http://localhost:5000/cart',{
//       method:'Post',
//       body:JSON.stringify({
//           productId,
//           userId,
//           quantity:1
//       }),
//       headers:{
//           "Content-type":"application/json; charset=UTF-8"
//       }
//   })
//   const json = res.json()
//   return json
// })

// export const getCart = createAsyncThunk("cart/getCart", async(id)=>{
//   const res = await fetch(`http://localhost:5000/cart/${id}`)
//   const json =  await res.json()
//   return json
// })


// export const deleteCartProduct = createAsyncThunk("cart/deleteCartProducts", async(id)=>{
//   const res = await fetch(`http://localhost:5000/cart/${id}`,{
//       method:"DELETE",
//       headers:{
//           "Content-type":"application/json; charset=UTF-8"
//       },
//   })
//   const json = res.json()
//   return json
// })

// export const decrement = createAsyncThunk('cart/decrement', async(id)=>{
//   const res = await fetch(`http://localhost:5000/cart/decrement/${id}`,{
//       method:"PUT",
//       body:JSON.stringify({
//           quantity:1
//       }),
//       headers:{
//           "Content-type":"application/json; charset=UTF-8"
//       },
//   })
//   const json = res.json()
//   return json
// })

// export const increment= createAsyncThunk('cart/increment', async(id)=>{
//   const res = await fetch(`http://localhost:5000/cart/increment/${id}`,{
//       method:"PUT",
//       body:JSON.stringify({
//           quantity:1
//       }),
//       headers:{
//           "Content-type":"application/json; charset=UTF-8"
//       },
//   })
//   const json = res.json()
//   return json
// })

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(createCart.fulfilled, (state, action) => {
//         state.status = "success";
//         if(action.payload){
//             state.cart.push(action.payload)
//         }
//         state.cart = action.payload
//       }) 
//       .addCase(getCart.fulfilled, (state, action) => { 
//         state.status = "success";
//         state.cart = action.payload;
//       })
//       .addCase(deleteCartProduct.fulfilled,(state, {payload})=>{
//         state.status = 'success'
//         if(payload.cartItem){
//             state.cart.push(payload.cartItem)
//         }
//     })
//     .addCase(decrement.fulfilled, (state, {payload})=>{
//       state.status = 'success'
//       let productId = payload.
//     })

//   }
  
// })

// export const getCartProducts = (state)=> state.cart.cart
// export default cartSlice.reducer;