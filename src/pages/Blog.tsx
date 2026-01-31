import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageBanner } from '../components/blocks/PageBanner';
import { FeaturesBar } from '../components/blocks/FeaturesBar';

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'Going all-in with millennial design',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
    image: './assets/images/product-1.png',
    author: 'Admin',
    date: '14 Oct 2022',
    category: 'Wood',
  },
  {
    id: 2,
    title: 'Exploring new ways of decorating',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat.',
    image: './assets/images/product-2.png',
    author: 'Admin',
    date: '14 Oct 2022',
    category: 'Handmade',
  },
  {
    id: 3,
    title: 'Handmade pieces that took time to make',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat.',
    image: './assets/images/product-3.png',
    author: 'Admin',
    date: '14 Oct 2022',
    category: 'Wood',
  },
];

const categories = [
  { name: 'Crafts', count: 2 },
  { name: 'Design', count: 8 },
  { name: 'Handmade', count: 7 },
  { name: 'Interior', count: 1 },
  { name: 'Wood', count: 6 },
];

const recentPosts = [
  { title: 'Going all-in with millennial design', date: '03 Aug 2022', image: './assets/images/product-5.png' },
  { title: 'Exploring new ways of decorating', date: '03 Aug 2022', image: './assets/images/product-6.png' },
  { title: 'Handmade pieces that took time to make', date: '03 Aug 2022', image: './assets/images/product-7.png' },
  { title: 'Modern home in Milan', date: '03 Aug 2022', image: './assets/images/product-8.png' },
  { title: 'Colorful office redesign', date: '03 Aug 2022', image: './assets/images/product-1.png' },
];

export function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <PageBanner title="Blog" />

      <section className="py-[106px]">
        <div className="max-w-[1440px] mx-auto px-[100px] flex gap-[85px]">
          {/* Main Content */}
          <div className="flex-1 space-y-[73px]">
            {blogPosts.map((post) => (
              <article key={post.id}>
                {/* Featured Image */}
                <div className="h-[500px] rounded-[10px] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Meta */}
                <div className="mt-4 flex items-center gap-9 text-base text-[--color-text-muted]">
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {post.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="mt-4 text-[30px] font-medium text-black">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="mt-3 text-base text-[--color-text-muted] leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <Link
                  to={`/blog/${post.id}`}
                  className="mt-7 inline-block text-base text-black border-b border-black pb-3 hover:text-[--color-primary] hover:border-[--color-primary] transition-colors"
                >
                  Read more
                </Link>
              </article>
            ))}

            {/* Pagination */}
            <div className="flex items-center justify-center gap-[38px]">
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
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="h-[60px] px-7 rounded-[10px] bg-[#F9F1E7] text-xl text-black hover:bg-[--color-primary] hover:text-white transition-colors"
              >
                Next
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-[393px]">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-[--color-text-muted] rounded-[10px] py-4 px-5 pr-14"
                placeholder=""
              />
              <button className="absolute right-5 top-1/2 -translate-y-1/2">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* Categories */}
            <div className="mt-10">
              <h3 className="text-2xl font-medium text-black mb-8">Categories</h3>
              <ul className="space-y-10">
                {categories.map((category) => (
                  <li key={category.name}>
                    <a
                      href="#"
                      className="flex items-center justify-between text-base text-[--color-text-muted] hover:text-[--color-primary] transition-colors"
                    >
                      <span>{category.name}</span>
                      <span>{category.count}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="mt-14">
              <h3 className="text-2xl font-medium text-black mb-8">Recent Posts</h3>
              <div className="space-y-10">
                {recentPosts.map((post, index) => (
                  <a key={index} href="#" className="flex items-center gap-3 group">
                    <div className="w-20 h-20 rounded-[10px] overflow-hidden flex-shrink-0">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm text-black group-hover:text-[--color-primary] transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="mt-1 text-xs text-[--color-text-muted]">{post.date}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <FeaturesBar />
    </div>
  );
}
