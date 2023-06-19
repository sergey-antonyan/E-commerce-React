import React from "react";
import { HeaderSlider } from "../../Components/Slider/HeaderSlider";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts, getAllProducts } from "../../feauters/productsSlice";
import { Link } from "react-router-dom";
import Category from "../Category/Category";
import {HiOutlineReceiptRefund} from "react-icons/hi"
import {RiSecurePaymentLine, RiCustomerService2Fill} from "react-icons/ri"
import {TbTruckDelivery} from "react-icons/tb"

import "./HomePage.css";

const HomePage = () => {
  const data = useSelector(getAllProducts);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(data, "nEWWWWWWWWWWWWWWDATA");
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const products = data.find((el) => el.id === Number(id));
  const iconStyle = {
    cursor: 'pointer',
  };

  return (
    <div>
      <HeaderSlider />
      <div>
        <h1 className="pageTitle">ELECTROLYSIS MACHINES</h1>
        <div className="productCont">
          {data.map((product) => (
            <div className="productDiv" key={product.id}>
              <Link to={`/products/${product.id}`} className="productLink">
                <img
                  className="prodImage"
                  src={`http://localhost:5000/${product?.image}`}
                  alt="image"
                />

                <div className="productName">{product.product_name}</div>
                <br />
                <h3 className="productPrice">{product.price} RUB</h3>
              </Link>
            </div>
          ))}
        </div>
        <div>
          <Category />
        </div>
        <div>
        <div className="homeAll">
        <div>
        <HiOutlineReceiptRefund size={50} style={iconStyle}/>
          <p>БЕСПЛАТНЫЕ И ПРОСТЫЕ ВОЗВРАТЫ</p>
        </div>
        <div>
          <RiSecurePaymentLine size={50} style={iconStyle}/>
          <p>БЕЗОПАСНАЯ ОПЛАТА</p>
        </div>
        <div>
          <TbTruckDelivery size={50} style={iconStyle}/>
          <p>ДОСТАВКА НА СЛЕДУЮЩИЙ ДЕНЬ</p>
        </div>
        <div>
          <RiCustomerService2Fill size={50} style={iconStyle}/>
          <p>ОБСЛУЖИВАНИЕ КЛИЕНТОВ</p>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
