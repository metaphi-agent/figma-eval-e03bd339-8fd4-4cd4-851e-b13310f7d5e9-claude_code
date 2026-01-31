import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export function Header() {
  const location = useLocation();
  const { totalItems, toggleCart } = useCart();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/shop', label: 'Shop' },
    { path: '/blog', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-white h-[100px] flex items-center">
      <div className="w-full max-w-[1440px] mx-auto px-[54px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-[5px]">
          <img
            src="./assets/icons/logo.svg"
            alt="Furniro Logo"
            className="h-8 w-auto"
          />
          <span className="font-['Montserrat'] font-bold text-[34px] text-black">
            Furniro
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-[75px]">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-base font-medium transition-colors ${
                isActive(link.path)
                  ? 'text-[--color-primary]'
                  : 'text-black hover:text-[--color-primary]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-[45px]">
          <button className="hover:opacity-70 transition-opacity">
            <img src="./assets/icons/account.svg" alt="Account" className="w-7 h-7" />
          </button>
          <button className="hover:opacity-70 transition-opacity">
            <img src="./assets/icons/search.svg" alt="Search" className="w-7 h-7" />
          </button>
          <button className="hover:opacity-70 transition-opacity">
            <img src="./assets/icons/heart.svg" alt="Wishlist" className="w-7 h-7" />
          </button>
          <button
            onClick={toggleCart}
            className="hover:opacity-70 transition-opacity relative"
          >
            <img src="./assets/icons/cart.svg" alt="Cart" className="w-7 h-7" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-[--color-primary] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
