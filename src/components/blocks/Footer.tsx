import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe:', email);
    setEmail('');
  };

  return (
    <footer className="bg-white border-t border-black/[0.17]">
      <div className="max-w-[1240px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="flex flex-col gap-12">
            <h3 className="font-bold text-2xl text-black">Funiro.</h3>
            <p className="text-[--color-text-muted] leading-relaxed">
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-12">
            <h4 className="text-[--color-text-muted] font-medium">Links</h4>
            <nav className="flex flex-col gap-8">
              <Link
                to="/"
                className="font-medium text-black hover:text-[--color-primary] transition-colors"
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="font-medium text-black hover:text-[--color-primary] transition-colors"
              >
                Shop
              </Link>
              <Link
                to="/blog"
                className="font-medium text-black hover:text-[--color-primary] transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="font-medium text-black hover:text-[--color-primary] transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Help */}
          <div className="flex flex-col gap-12">
            <h4 className="text-[--color-text-muted] font-medium">Help</h4>
            <nav className="flex flex-col gap-8">
              <a
                href="#"
                className="font-medium text-black hover:text-[--color-primary] transition-colors"
              >
                Payment Options
              </a>
              <a
                href="#"
                className="font-medium text-black hover:text-[--color-primary] transition-colors"
              >
                Returns
              </a>
              <a
                href="#"
                className="font-medium text-black hover:text-[--color-primary] transition-colors"
              >
                Privacy Policies
              </a>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-12">
            <h4 className="text-[--color-text-muted] font-medium">Newsletter</h4>
            <form onSubmit={handleSubscribe} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email Address"
                className="flex-1 border-b border-black pb-1 bg-transparent text-sm placeholder:text-[--color-text-muted] focus:outline-none focus:border-[--color-primary]"
              />
              <button
                type="submit"
                className="text-sm font-medium text-black border-b border-black pb-1 hover:text-[--color-primary] hover:border-[--color-primary] transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[--color-border] mt-12 pt-9">
          <p className="text-black">2023 furino. All rights reverved</p>
        </div>
      </div>
    </footer>
  );
}
