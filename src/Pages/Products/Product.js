import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts, getAllProducts } from "../../feauters/productsSlice";
import { Link } from "react-router-dom";


const Product = () => {
  const data = useSelector(getAllProducts);
  const dispatch = useDispatch();
  const { categoryId } = useParams();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const products = data.filter((product) => product.Category.id === Number(categoryId));

  return (
    <div>
      <h1 className="pageTitle">Все продукты</h1>
      <div className="productCont">
        {products.map((product) => (
          <div className="productDiv" key={product.id}>
            <Link to={`/products/${product.id}`} className="productLink">
              <img
                className="prodImage"
                src={`http://localhost:5000/${product?.image}`}
                alt="photo"
              />
              <div className="productName">{product.product_name}</div>
              <br />
              <h3 className="productPrice">{product.price} RUB</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};



export default Product;