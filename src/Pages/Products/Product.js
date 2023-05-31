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
      <h1>Helllllllllllo</h1>
      {data.map((product) => (
        <Link key={product.id} to={`/products/${product.id}`}>
          <div>{product.product_name}</div>
        </Link>
      ))}
      
    </div>
  );
};

export default Product;