import { Outlet } from "react-router-dom";
import { useMemo, useState } from "react";
import Navbar from "./Navbar";
import CartSidebar from "./CartSidebar";

export default function Layout() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const cartTotal = useMemo(
    () =>
      cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      ),
    [cartItems],
  );

  function addToCart(product) {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id);

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...currentItems, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  }

  function increaseQuantity(productId) {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  function decreaseQuantity(productId) {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function removeFromCart(productId) {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId),
    );
  }

  function clearCart() {
    setCartItems([]);
  }

  return (
    <div className="app-shell">
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
      />
      <main className="page-shell">
        <Outlet context={{ addToCart }} />
      </main>
      <CartSidebar
        cartCount={cartCount}
        cartItems={cartItems}
        cartTotal={cartTotal}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
        onRemove={removeFromCart}
        onClear={clearCart}
      />
    </div>
  );
}
