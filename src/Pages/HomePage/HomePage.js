import React from "react";
import { HeaderSlider } from "../../Components/Slider/HeaderSlider";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts, getAllProducts } from "../../feauters/productsSlice";
import { Link } from "react-router-dom";
import Category from "../Category/Category";

import "./HomePage.css";

const HomePage = () => {
  const data = useSelector(getAllProducts);
  const dispatch = useDispatch();
  const { id } = useParams();
console.log(data, "nEWWWWWWWWWWWWWWDATA")
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const products = data.find((el) => el.id === Number(id));
  
  return (
    <div>
      <HeaderSlider />
      <div>
        <h1 className="pageTitle">ELECTROLYSIS MACHINES</h1>
        <div className="productCont">
          {data.map((product) => (
            <div  className="productDiv" key={product.id}>
              <Link to={`/products/${product.id}`}  className="productLink">
              <img className="prodImage" src={`http://localhost:5000/${product?.image}`} alt="image"/>
              
                <div className="productName">{product.product_name}</div>
                <br/>
                <h3 className="productPrice">{product.price} RUB</h3>
                </Link>
              
            </div>
          ))}
        </div>
        <div>
          <Category />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
