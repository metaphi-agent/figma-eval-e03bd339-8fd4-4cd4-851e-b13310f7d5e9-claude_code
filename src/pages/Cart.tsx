import React from 'react';
import { Link } from 'react-router-dom';
import { PageBanner } from '../components/blocks/PageBanner';
import { FeaturesBar } from '../components/blocks/FeaturesBar';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/products';

export function Cart() {
  const { items, removeFromCart, updateQuantity, subtotal } = useCart();

  return (
    <div>
      <PageBanner title="Cart" />

      <section className="py-[72px]">
        <div className="max-w-[1240px] mx-auto px-4 flex gap-[30px]">
          {/* Cart Table */}
          <div className="flex-1">
            {/* Table Header */}
            <div className="grid grid-cols-[1fr_1fr_1fr_1fr_auto] gap-4 bg-[#F9F1E7] py-4 px-36">
              <span className="font-medium text-base">Product</span>
              <span className="font-medium text-base">Price</span>
              <span className="font-medium text-base">Quantity</span>
              <span className="font-medium text-base">Subtotal</span>
              <span className="w-7"></span>
            </div>

            {/* Cart Items */}
            {items.length === 0 ? (
              <div className="py-20 text-center">
                <p className="text-[--color-text-muted] text-lg">Your cart is empty</p>
                <Link
                  to="/shop"
                  className="mt-6 inline-block bg-[--color-primary] text-white font-semibold px-12 py-3 hover:bg-[--color-primary-hover] transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="mt-14 space-y-14">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="grid grid-cols-[1fr_1fr_1fr_1fr_auto] gap-4 items-center"
                  >
                    {/* Product */}
                    <div className="flex items-center gap-9">
                      <div className="w-[105px] h-[105px] bg-[#F9F1E7] rounded-[10px] overflow-hidden">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-base text-[--color-text-muted]">
                        {item.product.name}
                      </span>
                    </div>

                    {/* Price */}
                    <span className="text-base text-[--color-text-muted]">
                      {formatPrice(item.product.price)}
                    </span>

                    {/* Quantity */}
                    <div>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.product.id, parseInt(e.target.value) || 1)
                        }
                        className="w-8 h-8 text-center border border-[--color-text-muted] rounded-[5px]"
                      />
                    </div>

                    {/* Subtotal */}
                    <span className="text-base text-black">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>

                    {/* Delete */}
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-[--color-primary] hover:text-[--color-red-accent] transition-colors"
                    >
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart Totals */}
          <div className="w-[393px] bg-[#F9F1E7] px-[75px] py-4 text-center">
            <h2 className="text-[32px] font-semibold text-black">Cart Totals</h2>

            <div className="mt-16 space-y-8">
              <div className="flex items-center justify-between">
                <span className="text-base font-medium text-black">Subtotal</span>
                <span className="text-base text-[--color-text-muted]">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-base font-medium text-black">Total</span>
                <span className="text-xl font-medium text-[--color-primary]">
                  {formatPrice(subtotal)}
                </span>
              </div>
            </div>

            <Link
              to="/checkout"
              className="mt-10 inline-block border border-black rounded-[15px] px-[58px] py-[14px] text-xl text-black hover:bg-black hover:text-white transition-colors"
            >
              Check Out
            </Link>
          </div>
        </div>
      </section>

      <FeaturesBar />
    </div>
  );
}
