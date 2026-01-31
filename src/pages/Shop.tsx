import React, { useState } from 'react';
import { PageBanner } from '../components/blocks/PageBanner';
import { ProductCard } from '../components/blocks/ProductCard';
import { FeaturesBar } from '../components/blocks/FeaturesBar';
import { products } from '../data/products';

export function Shop() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('default');
  const [showCount, setShowCount] = useState(16);

  const itemsPerPage = showCount;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Sort products
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  // Paginate products
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Extend products array for demo (repeat to fill grid)
  const extendedProducts = [
    ...paginatedProducts,
    ...paginatedProducts,
    ...paginatedProducts,
    ...paginatedProducts,
  ].slice(0, itemsPerPage);

  return (
    <div>
      <PageBanner title="Shop" />

      {/* Filter Bar */}
      <section className="bg-[#F9F1E7] py-6">
        <div className="max-w-[1440px] mx-auto px-[100px] flex items-center justify-between">
          {/* Left - Filter & View */}
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              <span className="text-xl">Filter</span>
            </button>
            <button className="p-1">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="3" width="7" height="7" rx="1" strokeWidth={2} />
                <rect x="14" y="3" width="7" height="7" rx="1" strokeWidth={2} />
                <rect x="3" y="14" width="7" height="7" rx="1" strokeWidth={2} />
                <rect x="14" y="14" width="7" height="7" rx="1" strokeWidth={2} />
              </svg>
            </button>
            <button className="p-1">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </button>
            <div className="h-9 w-px bg-[--color-text-muted]"></div>
            <span className="text-base">
              Showing 1–{Math.min(itemsPerPage, extendedProducts.length)} of{' '}
              {products.length * 4} results
            </span>
          </div>

          {/* Right - Show & Sort */}
          <div className="flex items-center gap-7">
            <div className="flex items-center gap-4">
              <span className="text-xl">Show</span>
              <select
                value={showCount}
                onChange={(e) => setShowCount(Number(e.target.value))}
                className="w-[55px] h-[55px] bg-white text-[--color-text-muted] text-xl text-center appearance-none cursor-pointer"
              >
                <option value={8}>8</option>
                <option value={16}>16</option>
                <option value={32}>32</option>
              </select>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xl">Short by</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="h-[55px] bg-white text-[--color-text-muted] text-xl px-7 appearance-none cursor-pointer"
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-[1240px] mx-auto px-4">
          <div className="grid grid-cols-4 gap-8">
            {extendedProducts.map((product, index) => (
              <ProductCard key={`${product.id}-${index}`} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-16 flex items-center justify-center gap-[38px]">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-[60px] h-[60px] rounded-[10px] text-xl ${
                  currentPage === page
                    ? 'bg-[--color-primary] text-white'
                    : 'bg-[#F9F1E7] text-black hover:bg-[--color-primary] hover:text-white'
                } transition-colors`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              className="h-[60px] px-7 rounded-[10px] bg-[#F9F1E7] text-xl text-black hover:bg-[--color-primary] hover:text-white transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </section>

      <FeaturesBar />
    </div>
  );
}
