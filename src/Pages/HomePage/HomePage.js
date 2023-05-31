import React from "react";
import { HeaderSlider } from "../../Components/Slider/HeaderSlider";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts, getAllProducts } from "../../feauters/productsSlice";
import { Link } from "react-router-dom";
import './HomePage.css' 

const HomePage = () => {

  const data = useSelector(getAllProducts)
  const dispatch = useDispatch()
  const {id} = useParams();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const products = data.find((el) => el.id === Number(id))

  return (
    <div>
      <HeaderSlider />
      <div>
        <h1>ELECTROLYSIS MACHINES</h1>
        <div className="productCont">
        {data.map((product) => (
        <Link key={product.id} to={`/products/${product.id}`}>
          <div className="productDiv">{product.product_name}</div>
        </Link>
      ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
