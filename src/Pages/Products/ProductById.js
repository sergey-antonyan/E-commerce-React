import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchByPorductId, getAllProducts } from "../../feauters/productsSlice";
import { createCart } from "../../feauters/cartSlice";
import { Image, Button, Rate } from "antd";
import "./productById.css";
import { decodeToken } from "react-jwt";

const Product = () => {
  const data = useSelector(getAllProducts);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [count, setCount] = useState(1);

  useEffect(() => {
    dispatch(fetchByPorductId(id));
  }, [dispatch, id]);

  console.log(data, "newwwwwwww");

  const product = data?.find((product) => product.id === parseInt(id));

  console.log(product, "65656565");

  function addToCart(id) {
    if (id) {
      const token = localStorage.getItem("jwt");
      if (token) {
        let decoded = decodeToken(token);
        console.log(decoded,"DECODE");
        dispatch(
          createCart({userId: decoded.id, productId: id,  quantity: count })
        );
      }
    }
  }
  

  return (
    <div className="productByIdCont">
      <div className="contFirst">
        <Image
          width={400}
          src={`http://localhost:5000/${product?.image}`}
          alt="Photo one"
        />
      </div>
      <div className="contSecond">
        <h1>{product?.product_name}</h1>
        <div className="rate">
          <Rate disabled defaultValue={5} />
        </div>
        <p width={{ width: "300px" }}>{product?.description}</p>
        {product?.categoryId === 2 && (
          <>
            <h4>Комплектация</h4>
            <ul style={{ marginLeft: "15px" }}>
              <li>Аппарат</li>
              <li>Вольфрамовая нить 1 метр</li>
              <li>Педаль</li>
              <li>Ручка</li>
              <li>Гарантия 1 год</li>
            </ul>
          </>
        )}
        <h2>{product?.price}Rub</h2>
        <div style={{ display: "flex" }}>
          <button className="quantityBtn"
            onClick={() => {
              if (count <= 1) {
                setCount(1);
              } else {
                setCount(count - 1);
              }
            }}
          > - </button>
          <p className="quantityPrint">{count}</p>
          <button className="quantityBtn btn2" onClick={()=>setCount(count+1)}>+</button>
        </div>
        <Button type="primary" onClick={() => addToCart(product.id)}>
          Add to Cart{" "}
        </Button>
      </div>
    </div>
  );
};

export default Product;
