export default function CartSidebar({
  cartCount,
  cartItems,
  cartTotal,
  isOpen,
  onClose,
  onIncrease,
  onDecrease,
  onRemove,
  onClear,
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="cart-drawer" aria-modal="true" role="dialog">
      <button
        type="button"
        className="cart-drawer__overlay"
        aria-label="Close cart"
        onClick={onClose}
      />

      <aside className="cart-sidebar">
        <header className="cart-sidebar__header">
          <h2 className="cart-sidebar__title">Cart ({cartCount})</h2>
          <button
            type="button"
            className="cart-sidebar__close"
            aria-label="Close cart"
            onClick={onClose}
          >
            x
          </button>
        </header>

        <div className="cart-sidebar__content">
          {cartItems.length === 0 ? (
            <p className="cart-sidebar__empty">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <article key={item.id} className="cart-item">
                <div className="cart-item__summary">
                  <div>
                    <h3 className="cart-item__name">{item.name}</h3>
                    <p className="cart-item__unit">
                      ${item.price.toFixed(2)} each
                    </p>
                  </div>
                  <div className="cart-item__price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>

                <div className="cart-item__actions">
                  <div className="cart-item__quantity">
                    <button
                      type="button"
                      className="cart-item__quantity-button"
                      aria-label={`Decrease ${item.name} quantity`}
                      onClick={() => onDecrease(item.id)}
                    >
                      -
                    </button>
                    <span className="cart-item__count">{item.quantity}</span>
                    <button
                      type="button"
                      className="cart-item__quantity-button"
                      aria-label={`Increase ${item.name} quantity`}
                      onClick={() => onIncrease(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className="cart-item__remove"
                    onClick={() => onRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </article>
            ))
          )}
        </div>

        <footer className="cart-sidebar__footer">
          <div className="cart-sidebar__total">
            <span>Total</span>
            <strong>${cartTotal.toFixed(2)}</strong>
          </div>
          <button
            type="button"
            className="button button--primary cart-sidebar__checkout"
            disabled={cartItems.length === 0}
          >
            Checkout
          </button>
          <button
            type="button"
            className="cart-sidebar__clear"
            disabled={cartItems.length === 0}
            onClick={onClear}
          >
            Clear cart
          </button>
        </footer>
      </aside>
    </div>
  );
}
