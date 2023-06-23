import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCart,
  deleteCartProduct,
  decrement,
  increment,
} from "../../feauters/cartSlice";
import { decodeToken } from "react-jwt";
import { Card, Col, Row, Button } from "antd";

import "./cart.css";

const Cart = () => {
  const data = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [remove, setRemove] = useState(false);

  const token = localStorage.getItem("jwt");
  let decoded = decodeToken(token);
  console.log(decoded, "DEEEEEEECODE");

  useEffect(() => {
    dispatch(getCart(decoded.id));
  }, [dispatch]);

  function deleteCart(userId, productId) {
    dispatch(deleteCartProduct({ userId, productId }))
      .then(() => dispatch(getCart(decoded.id)))
      .then(() => setRemove(!remove));
  }

  console.log(data, "CartDAAAAAAATA");
  console.log();

  function incrementCartItem(productId) {
    const cartItem = data.find((item) => item.productId === productId);
    if (cartItem) {
      const newQuantity = cartItem.quantity + 1;
      dispatch(increment({ userId: decoded.id, productId, quantity: newQuantity }));
    }
  }
  
  

  function decrementCartItem(productId, quantity) {
    if (quantity < 1) {
      dispatch(deleteCartProduct({ productId }));
    } else {
      dispatch(decrement({ userId: decoded.id, productId }));
    }
  }

  return (
    <div className="cartCont">
      <div>
        <h3>Total Amount</h3>
      </div>
      <Row gutter={16}>
        {data?.map((cartItem) => (
          <div>
          <Col  span={8} key={cartItem.id}>
            {cartItem.product ? (
              <Card title={cartItem.product.product_name} bordered={false}>
                <img
                  className="prodImage"
                  src={`http://localhost:5000/${cartItem.product.image}`}
                  alt="photo"
                />
                <div className="productName">
                  {cartItem.product.product_name}
                </div>
                <br />
                <h3 className="productPrice">{cartItem.product.price} RUB</h3>
                <div className="countCnt">
                  <button
                    className="quantityBtn"
                    onClick={() =>
                      decrementCartItem(
                        cartItem?.productId,
                        cartItem?.quantity
                      )
                    }
                  >
                    -
                  </button>
                  <h2>{cartItem.quantity}</h2>
                  <button
                    className="quantityBtn btn2"
                    onClick={() => incrementCartItem(cartItem?.productId)}
                  >
                    +
                  </button>
                </div>
                <Button
                  onClick={() => deleteCart(decoded.id, cartItem.productId)}
                >
                  DELETE CART
                </Button>
              </Card>
            ) : (
              <Card title="Product Loading..." bordered={false}>
                <div>Loading...</div>
              </Card>
            )}
          </Col>
          </div>
        ))}
      </Row>
    </div>
  );
};

export default Cart;
