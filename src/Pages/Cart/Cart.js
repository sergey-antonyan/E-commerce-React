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
  return (
    <div className="cartCont">
      <Row gutter={16}>
        {data?.map((cartItem) => (
          <Col span={8} key={cartItem.id}>
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
                <h2>{cartItem.quantity}</h2>
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
        ))}
      </Row>
    </div>
  );
};

export default Cart;
