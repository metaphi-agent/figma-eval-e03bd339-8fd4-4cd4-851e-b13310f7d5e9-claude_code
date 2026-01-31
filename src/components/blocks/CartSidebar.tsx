import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../data/products';

export function CartSidebar() {
  const { items, isCartOpen, closeCart, removeFromCart, subtotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={closeCart}
      />

      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-[417px] bg-white z-50 shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-7 py-7 border-b border-[--color-border]">
          <h2 className="font-semibold text-2xl">Shopping Cart</h2>
          <button
            onClick={closeCart}
            className="text-[--color-text-muted] hover:text-[--color-text] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-7 py-5">
          {items.length === 0 ? (
            <p className="text-center text-[--color-text-muted] py-8">
              Your cart is empty
            </p>
          ) : (
            <div className="flex flex-col gap-5">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-8 items-center">
                  <div className="w-[105px] h-[105px] bg-[--color-card-bg] rounded-[10px] overflow-hidden flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-normal text-base text-black">
                      {item.product.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-base">{item.quantity}</span>
                      <span className="text-xs text-black">X</span>
                      <span className="text-xs font-medium text-[--color-primary]">
                        {formatPrice(item.product.price)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-[--color-text-muted] hover:text-[--color-red-accent] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[--color-border] px-7 py-6">
            <div className="flex items-center justify-between mb-6">
              <span className="text-base">Subtotal</span>
              <span className="text-base font-semibold text-[--color-primary]">
                {formatPrice(subtotal)}
              </span>
            </div>

            <div className="flex gap-3.5">
              <Link
                to="/cart"
                onClick={closeCart}
                className="flex-1 py-1.5 text-center text-xs border border-black rounded-[50px] hover:bg-black hover:text-white transition-colors"
              >
                Cart
              </Link>
              <Link
                to="/checkout"
                onClick={closeCart}
                className="flex-1 py-1.5 text-center text-xs border border-black rounded-[50px] hover:bg-black hover:text-white transition-colors"
              >
                Checkout
              </Link>
              <Link
                to="/comparison"
                onClick={closeCart}
                className="flex-1 py-1.5 text-center text-xs border border-black rounded-[50px] hover:bg-black hover:text-white transition-colors"
              >
                Comparison
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
