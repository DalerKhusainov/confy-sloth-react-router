import { Link } from "react-router-dom";
import products from "../data";

const Products = () => {
  return (
    <section className="section">
      <div className="products">
        {products.map((product) => {
          return (
            <article className="card-list" key={product.id}>
              {/* <img
                className="card-list__img"
                src={product.image}
                alt={product.name}
              /> */}
              <h5>{product.name}</h5>
              <Link to={`/products/${product.id}`}>more info</Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
