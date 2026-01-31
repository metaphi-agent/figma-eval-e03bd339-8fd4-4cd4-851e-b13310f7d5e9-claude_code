import React from 'react';

const features = [
  {
    icon: './assets/icons/trophy.svg',
    title: 'High Quality',
    description: 'crafted from top materials',
  },
  {
    icon: './assets/icons/guarantee.svg',
    title: 'Warranty Protection',
    description: 'Over 2 years',
  },
  {
    icon: './assets/icons/shipping.svg',
    title: 'Free Shipping',
    description: 'Order over 150 $',
  },
  {
    icon: './assets/icons/support.svg',
    title: '24 / 7 Support',
    description: 'Dedicated support',
  },
];

export function FeaturesBar() {
  return (
    <section className="bg-[--color-features-bg] py-[100px]">
      <div className="max-w-[1334px] mx-auto px-4">
        <div className="flex items-center justify-between">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2.5">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-[60px] h-[60px]"
              />
              <div>
                <h3 className="font-semibold text-[25px] text-[--color-gray-1]">
                  {feature.title}
                </h3>
                <p className="text-xl text-[--color-text-muted]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
