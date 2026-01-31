import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductCard } from '../components/blocks/ProductCard';
import { products, formatPrice } from '../data/products';
import { useCart } from '../context/CartContext';

export function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === Number(id)) || products[0];

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || 'L');
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  // Product images (simulate multiple images)
  const productImages = [product.image, product.image, product.image, product.image];

  // Related products (exclude current product)
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
  };

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <nav className="bg-[#F9F1E7] py-9">
        <div className="max-w-[1240px] mx-auto px-4 flex items-center gap-6 text-base">
          <Link to="/" className="text-[--color-text-muted]">Home</Link>
          <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link to="/shop" className="text-[--color-text-muted]">Shop</Link>
          <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="h-9 w-px bg-[--color-text-muted] mx-4"></span>
          <span className="text-black">{product.name}</span>
        </div>
      </nav>

      {/* Product Section */}
      <section className="py-9">
        <div className="max-w-[1240px] mx-auto px-4">
          <div className="flex gap-[100px]">
            {/* Product Images */}
            <div className="flex gap-8">
              {/* Thumbnails */}
              <div className="flex flex-col gap-8">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-[76px] h-[80px] rounded-[10px] bg-[#F9F1E7] overflow-hidden ${
                      selectedImage === index ? 'ring-2 ring-[--color-primary]' : ''
                    }`}
                  >
                    <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
              {/* Main Image */}
              <div className="w-[423px] h-[500px] rounded-[10px] bg-[#F9F1E7] overflow-hidden">
                <img
                  src={productImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="flex-1">
              <h1 className="text-[42px] text-black">{product.name}</h1>
              <p className="mt-2 text-2xl text-[--color-text-muted]">
                {formatPrice(product.price)}
              </p>

              {/* Rating */}
              <div className="mt-4 flex items-center gap-5">
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-5 h-5 ${star <= 4 ? 'text-[#FFC700]' : 'text-[#FFC700]/50'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="h-7 w-px bg-[--color-text-muted]"></span>
                <span className="text-sm text-[--color-text-muted]">5 Customer Review</span>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm text-black leading-5 max-w-[424px]">
                Setting the bar as one of the loudest speakers in its class, the {product.name} is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
              </p>

              {/* Size Selection */}
              <div className="mt-5">
                <span className="text-sm text-[--color-text-muted]">Size</span>
                <div className="mt-3 flex gap-4">
                  {product.sizes?.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-[30px] h-[30px] rounded-[5px] text-sm ${
                        selectedSize === size
                          ? 'bg-[--color-primary] text-white'
                          : 'bg-[#F9F1E7] text-black hover:bg-[--color-primary] hover:text-white'
                      } transition-colors`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="mt-5">
                <span className="text-sm text-[--color-text-muted]">Color</span>
                <div className="mt-3 flex gap-4">
                  {product.colors?.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-[30px] h-[30px] rounded-full ${
                        selectedColor === color ? 'ring-2 ring-offset-2 ring-[--color-primary]' : ''
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* Add to Cart */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex items-center border border-[--color-text-muted] rounded-[10px]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-4 text-base hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-4 text-base font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-4 text-base hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="px-12 py-4 border border-black rounded-[15px] text-xl hover:bg-black hover:text-white transition-colors"
                >
                  Add To Cart
                </button>
                <button className="px-12 py-4 border border-black rounded-[15px] text-xl hover:bg-black hover:text-white transition-colors">
                  + Compare
                </button>
              </div>

              {/* Product Meta */}
              <div className="mt-10 pt-10 border-t border-[--color-border]">
                <div className="flex gap-3 text-base text-[--color-text-muted]">
                  <span className="w-[85px]">SKU</span>
                  <span className="text-[--color-text-muted]">:</span>
                  <span>{product.sku}</span>
                </div>
                <div className="mt-3 flex gap-3 text-base text-[--color-text-muted]">
                  <span className="w-[85px]">Category</span>
                  <span className="text-[--color-text-muted]">:</span>
                  <span>{product.category}</span>
                </div>
                <div className="mt-3 flex gap-3 text-base text-[--color-text-muted]">
                  <span className="w-[85px]">Tags</span>
                  <span className="text-[--color-text-muted]">:</span>
                  <span>{product.tags.join(', ')}</span>
                </div>
                <div className="mt-3 flex items-center gap-3 text-base text-[--color-text-muted]">
                  <span className="w-[85px]">Share</span>
                  <span className="text-[--color-text-muted]">:</span>
                  <div className="flex items-center gap-6">
                    <a href="#" className="hover:text-[--color-primary]">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a href="#" className="hover:text-[--color-primary]">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a href="#" className="hover:text-[--color-primary]">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="border-t border-[--color-border] py-12">
        <div className="max-w-[1240px] mx-auto px-4">
          {/* Tab Headers */}
          <div className="flex items-center justify-center gap-12 border-b border-[--color-border]">
            {['description', 'additional', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-5 text-2xl ${
                  activeTab === tab
                    ? 'text-black border-b-2 border-black'
                    : 'text-[--color-text-muted] hover:text-black'
                } transition-colors`}
              >
                {tab === 'description' && 'Description'}
                {tab === 'additional' && 'Additional Information'}
                {tab === 'reviews' && 'Reviews [5]'}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-9 max-w-[1026px] mx-auto">
            {activeTab === 'description' && (
              <div className="text-base text-[--color-text-muted] space-y-7">
                <p>
                  Embodying the raw, wayward spirit of rock 'n' roll, the {product.name} portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
                </p>
                <p>
                  Weighing in under 7 pounds, the {product.name} is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the {product.name} is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
                </p>
              </div>
            )}

            {/* Additional Images */}
            <div className="mt-9 flex gap-7">
              <div className="flex-1 h-[348px] rounded-[10px] bg-[#F9F1E7] overflow-hidden">
                <img src={product.image} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 h-[348px] rounded-[10px] bg-[#F9F1E7] overflow-hidden">
                <img src={product.image} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="border-t border-[--color-border] py-14">
        <div className="max-w-[1240px] mx-auto px-4">
          <h2 className="text-center text-4xl font-medium text-[--color-gray-1]">
            Related Products
          </h2>

          <div className="mt-8 grid grid-cols-4 gap-8">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-11 text-center">
            <Link
              to="/shop"
              className="inline-block border border-[--color-primary] text-[--color-primary] font-semibold px-[74px] py-3 hover:bg-[--color-primary] hover:text-white transition-colors"
            >
              Show More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
