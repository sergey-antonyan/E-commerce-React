import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts, getAllProducts } from "../../feauters/productsSlice";
import { Link } from "react-router-dom";

const Product = () => {
  const data = useSelector(getAllProducts);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log(data, "newwwwwwww");

  const products = data.find((product) => product.id === Number(id));
  console.log(products, "65656565");

  return (
    <div>
    <h1 className="pageTitle">ELECTROLYSIS MACHINES</h1>
    <div className="productCont">
      {data.map((product) => (
        <div  className="productDiv" key={product.id}>
          <Link to={`/products/${product.id}`}  className="productLink">
          <img className="prodImage" src={`http://localhost:5000/${product?.image}`} alt="photo"/>
          {/*  */}
            <div className="productName">{product.product_name}</div>
            <br/>
            <h3 className="productPrice">{product.price} RUB</h3>
            </Link>
          {/* </Link> */}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Product;