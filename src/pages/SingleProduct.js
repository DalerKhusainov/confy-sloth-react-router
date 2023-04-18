import { Link, useParams } from "react-router-dom";
import Products from "./Products";

const SingleProduct = () => {
  const { productId } = useParams();

  return (
    <section className="section product">
      <h4>{productId}</h4>
      <Link to="/products">Go to products</Link>
    </section>
  );
};

export default SingleProduct;
