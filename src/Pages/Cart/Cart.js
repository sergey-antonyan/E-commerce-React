import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getCart, deleteCartProduct , decrement , increment} from "../../feauters/cartSlice"
import { Link } from 'react-router-dom';
import { decodeToken } from "react-jwt";
import './cart.css'


const Cart = () => {

  const data = useSelector((state)=> {
   return state.cart.cart
  })
  const dispatch = useDispatch()
 
  const token = localStorage.getItem("jwt");
  let decoded = decodeToken(token);
  console.log(decoded, "DEEEEEEECODE")
  useEffect(() => {
    dispatch(getCart(decoded.id)); 
  }, [dispatch]);

  console.log(data, "CartDAAAAAAATA")

  // const cartItems = data.find((cartItem) => cartItem.userId === Number(userId))
  // console.log(cartItems)



  return (
    <div className='cartCont'>
         {data.map((product) => (
        <div  className="productDiv" key={product.id}>
          <Link to={`/cart/${product.id}`}  className="productLink">
          <img className="prodImage" src={`http://localhost:5000/${product?.image}`} alt="photo"/>
            <div className="productName">{product.product_name}</div>
            <br/>
            <h3 className="productPrice">{product.price} RUB</h3>
            </Link>
        </div>
      ))}
    </div>
  )
}

export default Cart
