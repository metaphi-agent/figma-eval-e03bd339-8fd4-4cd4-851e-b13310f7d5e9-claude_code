import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/blocks/ProductCard';
import { products } from '../data/products';

// Category data
const categories = [
  { name: 'Dining', image: './assets/images/category-dining.png' },
  { name: 'Living', image: './assets/images/category-living.png' },
  { name: 'Bedroom', image: './assets/images/category-bedroom.png' },
];

// Instagram/share images
const shareImages = [
  './assets/images/product-1.png',
  './assets/images/product-2.png',
  './assets/images/product-3.png',
  './assets/images/product-4.png',
  './assets/images/product-5.png',
  './assets/images/product-6.png',
  './assets/images/product-7.png',
  './assets/images/product-8.png',
];

export function Home() {
  // Get first 8 products for display
  const displayProducts = products.slice(0, 8);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[716px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(./assets/images/hero-bg.png)' }}
        />
        <div className="relative z-10 max-w-[1440px] mx-auto px-[54px] flex items-center min-h-[716px]">
          <div className="ml-auto w-[643px]">
            <div className="bg-[#FFF3E3] rounded-[10px] p-10 pl-10">
              <span className="text-base font-semibold tracking-[3px] text-[--color-text-dark]">
                New Arrival
              </span>
              <h1 className="mt-1 text-[52px] font-bold leading-[65px] text-[--color-primary]">
                Discover Our<br />New Collection
              </h1>
              <p className="mt-4 text-lg font-medium text-[--color-text-dark] leading-6 max-w-[546px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
              </p>
              <Link
                to="/shop"
                className="mt-11 inline-block bg-[--color-primary] text-white font-bold text-base uppercase px-[72px] py-[25px] hover:bg-[--color-primary-hover] transition-colors"
              >
                BUY Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Browse The Range Section */}
      <section className="py-14 text-center">
        <h2 className="text-[32px] font-bold text-[--color-gray-1]">
          Browse The Range
        </h2>
        <p className="mt-2 text-xl text-[--color-text-muted]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="mt-16 max-w-[1183px] mx-auto px-4 grid grid-cols-3 gap-5">
          {categories.map((category) => (
            <Link
              key={category.name}
              to="/shop"
              className="group block"
            >
              <div className="overflow-hidden rounded-lg aspect-[381/480]">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-8 text-2xl font-semibold text-[--color-text-dark]">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-14">
        <h2 className="text-center text-[40px] font-bold text-[--color-gray-1]">
          Our Products
        </h2>

        <div className="mt-8 max-w-[1236px] mx-auto px-4">
          <div className="grid grid-cols-4 gap-8">
            {displayProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/shop"
            className="inline-block border border-[--color-primary] text-[--color-primary] font-semibold px-[74px] py-3 hover:bg-[--color-primary] hover:text-white transition-colors"
          >
            Show More
          </Link>
        </div>
      </section>

      {/* 50+ Beautiful Rooms Inspiration Section */}
      <section className="bg-[#FCF8F3] py-11">
        <div className="flex items-center gap-6 max-w-[1760px] mx-auto">
          {/* Left Content */}
          <div className="w-[422px] flex-shrink-0 pl-[100px]">
            <h2 className="text-[40px] font-bold text-[--color-gray-1] leading-[48px]">
              50+ Beautiful rooms inspiration
            </h2>
            <p className="mt-2 text-base font-medium text-[--color-text-light]">
              Our designer already made a lot of beautiful prototipe of rooms that inspire you
            </p>
            <Link
              to="/shop"
              className="mt-6 inline-block bg-[--color-primary] text-white font-semibold px-9 py-3 hover:bg-[--color-primary-hover] transition-colors"
            >
              Explore More
            </Link>
          </div>

          {/* Right Images */}
          <div className="flex-1 flex items-center gap-6 overflow-hidden">
            {/* Main Featured Image */}
            <div className="relative w-[404px] h-[582px] flex-shrink-0">
              <img
                src="./assets/images/product-4.png"
                alt="Featured Room"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6">
                <div className="bg-white/70 backdrop-blur-sm px-8 py-8">
                  <div className="flex items-center gap-2 text-base text-[--color-text-muted]">
                    <span>01</span>
                    <span className="w-[27px] h-px bg-[--color-text-muted]"></span>
                    <span>Bed Room</span>
                  </div>
                  <h3 className="mt-2 text-[28px] font-semibold text-[--color-gray-1]">
                    Inner Peace
                  </h3>
                </div>
                <button className="absolute -right-12 bottom-0 w-12 h-12 bg-[--color-primary] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Other Images */}
            <div className="flex flex-col gap-6">
              <div className="w-[372px] h-[486px]">
                <img
                  src="./assets/images/product-5.png"
                  alt="Room 2"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="w-[372px] h-[486px]">
                <img
                  src="./assets/images/product-6.png"
                  alt="Room 3"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-5">
            <button className="w-[27px] h-[27px] rounded-full border border-[--color-primary] flex items-center justify-center">
              <span className="w-[11px] h-[11px] rounded-full bg-[--color-primary]"></span>
            </button>
            <button className="w-[11px] h-[11px] rounded-full bg-[--color-gray-5]"></button>
            <button className="w-[11px] h-[11px] rounded-full bg-[--color-gray-5]"></button>
            <button className="w-[11px] h-[11px] rounded-full bg-[--color-gray-5]"></button>
          </div>
        </div>
      </section>

      {/* Share Your Setup Section */}
      <section className="py-16">
        <div className="text-center mb-8">
          <p className="text-xl font-semibold text-[--color-text-light]">
            Share your setup with
          </p>
          <h2 className="text-[40px] font-bold text-[--color-gray-1]">
            #FuniroFurniture
          </h2>
        </div>

        {/* Image Grid - Instagram style mosaic */}
        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center gap-4 flex-wrap max-w-[1799px] mx-auto">
            {shareImages.map((image, index) => (
              <div
                key={index}
                className={`overflow-hidden ${
                  index % 4 === 0 ? 'w-[274px] h-[382px]' :
                  index % 4 === 1 ? 'w-[451px] h-[312px]' :
                  index % 4 === 2 ? 'w-[295px] h-[392px]' :
                  'w-[290px] h-[348px]'
                }`}
              >
                <img
                  src={image}
                  alt={`User setup ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
