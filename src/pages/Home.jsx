import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/about");
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>
      <button
        className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-700"
        onClick={handleNavigate}
      >
        Go to About
      </button>
      <Link to="/about">Go to About</Link>
    </div>
  );
}
