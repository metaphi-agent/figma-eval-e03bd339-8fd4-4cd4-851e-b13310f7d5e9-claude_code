import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product, formatPrice } from '../../data/products';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        {/* Product Image */}
        <div className="relative bg-[--color-card-bg] aspect-[285/301]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />

          {/* Badge */}
          {product.badge && (
            <span
              className={`absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center text-white text-base font-medium ${
                product.badge === 'sale'
                  ? 'bg-[--color-red-accent]'
                  : 'bg-[--color-green-accent]'
              }`}
            >
              {product.badge === 'sale' ? `-${product.discount}%` : 'New'}
            </span>
          )}

          {/* Hover Overlay */}
          <div
            className={`absolute inset-0 bg-[--color-text-dark]/70 flex flex-col items-center justify-center gap-6 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <button
              onClick={handleAddToCart}
              className="bg-white text-[--color-primary] font-semibold px-14 py-3 hover:bg-[--color-primary] hover:text-white transition-colors"
            >
              Add to cart
            </button>

            <div className="flex items-center gap-5 text-white">
              <button className="flex items-center gap-1 text-base font-semibold hover:text-[--color-primary] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share
              </button>
              <button className="flex items-center gap-1 text-base font-semibold hover:text-[--color-primary] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                Compare
              </button>
              <button className="flex items-center gap-1 text-base font-semibold hover:text-[--color-primary] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Like
              </button>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="bg-[--color-card-bg] px-4 py-4 pt-4 pb-8">
          <h3 className="font-semibold text-2xl text-[--color-gray-1] mb-2">
            {product.name}
          </h3>
          <p className="text-[--color-text-muted] text-base mb-2">
            {product.description}
          </p>
          <div className="flex items-center gap-4">
            <span className="font-semibold text-xl text-[--color-gray-1]">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-[--color-text-muted] line-through text-base">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
