import { Link, useParams } from "react-router-dom";
import { products } from "../mock-data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <section className="detail-page">
        <div className="detail-card">
          <h1 className="detail-card__title">Product not found.</h1>
          <p className="detail-card__text">
            We could not find a product for ID: {id}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="detail-page">
      <div className="detail-card">
        <Link to="/products" className="detail-card__back-link">
          Back to Products
        </Link>
        <h1 className="detail-card__title">{product.name}</h1>
        <p className="detail-card__text">{product.description}</p>
        <p className="detail-card__price">${product.price.toFixed(2)}</p>
        <button type="button" className="button button--primary detail-card__button">
          Add to Cart
        </button>
        <p className="detail-card__meta">Product ID: {product.id}</p>
      </div>
    </section>
  );
}
