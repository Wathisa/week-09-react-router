import { Link } from "react-router-dom";

export default function Navbar({ cartCount, onCartClick }) {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand">
          ShopFront
        </Link>

        <nav className="navbar__nav" aria-label="Main navigation">
          <Link to="/" className="navbar__link">
            Home
          </Link>
          <Link to="/about" className="navbar__link">
            About
          </Link>
          <Link to="/contact" className="navbar__link">
            Contact
          </Link>
          <Link to="/products" className="navbar__link">
            Products
          </Link>
        </nav>

        <button
          type="button"
          className="navbar__cart"
          aria-label={`Open cart with ${cartCount} items`}
          onClick={onCartClick}
        >
          <svg
            className="navbar__cart-icon"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.5a2 2 0 0 0 1.9-1.4L21 8H6.2"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M10 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
              fill="currentColor"
            />
          </svg>
          {cartCount > 0 && <span className="navbar__cart-badge">{cartCount}</span>}
        </button>
      </div>
    </header>
  );
}
