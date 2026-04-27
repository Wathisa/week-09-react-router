import { useNavigate } from "react-router-dom";
import { products } from "../mock-data/products";

export default function Products() {
  const navigate = useNavigate();
  const handleViewDetails = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-md hover:shadow-lg transition flex flex-col"
          >
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-teal-600 font-semibold mb-4">
              ${product.price.toFixed(2)}
            </p>
            <div className="flex gap-2 mt-auto">
              <button
                onClick={() => handleViewDetails(product.id)}
                className="text-white bg-teal-500 px-4 py-2 rounded-md hover:bg-teal-700 transition"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
