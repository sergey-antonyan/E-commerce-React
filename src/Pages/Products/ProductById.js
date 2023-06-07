import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchByPorductId, getAllProducts } from "../../feauters/productsSlice";
import { Image, Button, Rate  } from "antd";
import './productById.css'

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
        <div className="rate"><Rate disabled defaultValue={5} /></div>
        <p width={{width: "300px"}}>{product?.description}</p>
        <h4>Комплектация</h4>
        <ul style={{marginLeft: "15px"}}>
          <li>Аппарат</li>
          <li>Вольфрамовая нить 1 метр</li>
          <li>Педаль</li>
          <li>Ручка</li>
          <li>Гарантия 1 год</li>
        </ul>
        <h2>{product?.price}Rub</h2>
        <Button type="primary">Add to Cart </Button>
      </div>
    </div>
  );
};

export default Product;
