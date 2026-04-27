import { Link } from "react-router-dom";

export default function Navbar() {
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
      </div>
    </header>
  );
}
