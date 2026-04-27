import { useParams } from "react-router-dom";
import { products } from "../mock-data/products";

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="p-6 bg-white rounded-md shadow-md max-w-lg">
      <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-teal-600 font-bold text-2xl mb-6">
        ${product.price.toFixed(2)}
      </p>
      <p className="text-gray-400 text-sm mt-4">Product ID: {product.id}</p>
    </div>
  );
}
