import { useNavigate } from "react-router-dom";
import { products } from "../mock-data/products";

export default function Products() {
  const navigate = useNavigate();

  return (
    <section className="products-page">
      <div className="page-heading">
        <h1 className="page-heading__title">Products</h1>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2 className="product-card__title">{product.name}</h2>
            <p className="product-card__description">{product.description}</p>
            <p className="product-card__price">${product.price.toFixed(2)}</p>

            <div className="product-card__actions">
              <button
                type="button"
                className="button button--primary"
                onClick={() => navigate(`/products/${product.id}`)}
              >
                View Details
              </button>
              <button type="button" className="button button--secondary">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
