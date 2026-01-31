import React from 'react';
import { Link } from 'react-router-dom';

interface PageBannerProps {
  title: string;
  breadcrumbs?: { label: string; path?: string }[];
}

export function PageBanner({ title, breadcrumbs = [] }: PageBannerProps) {
  const defaultBreadcrumbs = [
    { label: 'Home', path: '/' },
    { label: title },
  ];

  const crumbs = breadcrumbs.length > 0 ? breadcrumbs : defaultBreadcrumbs;

  return (
    <div className="relative h-[316px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(./assets/images/page-banner.png)',
          filter: 'blur(3px)',
          opacity: 0.5,
        }}
      />
      <div className="absolute inset-0 bg-white/30" />

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Logo */}
        <img
          src="./assets/icons/logo.svg"
          alt="Furniro"
          className="w-[77px] h-[77px] mx-auto mb-2 object-contain"
        />

        {/* Title */}
        <h1 className="text-5xl font-medium text-black mb-3">{title}</h1>

        {/* Breadcrumbs */}
        <nav className="flex items-center justify-center gap-2 text-base">
          {crumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              {crumb.path ? (
                <Link
                  to={crumb.path}
                  className="font-medium text-black hover:text-[--color-primary] transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-light text-black">{crumb.label}</span>
              )}
              {index < crumbs.length - 1 && (
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
}
