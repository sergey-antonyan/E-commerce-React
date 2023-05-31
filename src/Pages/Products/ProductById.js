import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchByPorductId, getAllProducts } from "../../feauters/productsSlice";

const Product = () => {
  const data = useSelector(getAllProducts);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchByPorductId(id));
  }, [dispatch, id]);

  console.log(data, "newwwwwwww");

  const product = data?.find((product) => product.id === parseInt(id));

  console.log(product, "65656565");

  return (
    <div>
      <div>{product?.product_name}</div>
      <div>{product?.price}</div>
      <img src={`http://localhost:5000/${product?.image}`} alt="Photo one" />
      <button>Add to Cart </button>
    </div>
  );
};

export default Product;
