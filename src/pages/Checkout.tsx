import React, { useState } from 'react';
import { PageBanner } from '../components/blocks/PageBanner';
import { FeaturesBar } from '../components/blocks/FeaturesBar';
import { Input, Select, Textarea } from '../components/ui/Input';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/products';

export function Checkout() {
  const { items, subtotal } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('bank');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate order placement
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert('Order placed successfully!');
    setIsSubmitting(false);
  };

  const countryOptions = [
    { value: '', label: 'Select Country' },
    { value: 'SL', label: 'Sri Lanka' },
    { value: 'US', label: 'United States' },
    { value: 'UK', label: 'United Kingdom' },
    { value: 'IN', label: 'India' },
  ];

  const provinceOptions = [
    { value: '', label: 'Select Province' },
    { value: 'western', label: 'Western Province' },
    { value: 'central', label: 'Central Province' },
    { value: 'southern', label: 'Southern Province' },
  ];

  return (
    <div>
      <PageBanner title="Checkout" />

      <section className="py-16">
        <div className="max-w-[1240px] mx-auto px-4">
          <form onSubmit={handleSubmit} className="flex gap-[30px]">
            {/* Billing Details */}
            <div className="flex-1">
              <h2 className="text-4xl font-semibold text-black mb-9">Billing details</h2>

              <div className="space-y-9">
                {/* Name Row */}
                <div className="flex gap-8">
                  <div className="flex-1">
                    <Input label="First Name" required />
                  </div>
                  <div className="flex-1">
                    <Input label="Last Name" required />
                  </div>
                </div>

                <Input label="Company Name (Optional)" />

                <Select
                  label="Country / Region"
                  options={countryOptions}
                  required
                />

                <Input label="Street address" required />

                <Input label="Town / City" required />

                <Select
                  label="Province"
                  options={provinceOptions}
                  required
                />

                <Input label="ZIP code" required />

                <Input label="Phone" type="tel" required />

                <Input label="Email address" type="email" required />

                <Textarea
                  placeholder="Additional information"
                  rows={4}
                />
              </div>
            </div>

            {/* Order Summary */}
            <div className="w-[608px]">
              <div className="space-y-6">
                {/* Products */}
                <div className="flex items-center justify-between text-2xl font-medium">
                  <span>Product</span>
                  <span>Subtotal</span>
                </div>

                {items.map((item) => (
                  <div key={item.product.id} className="flex items-center justify-between">
                    <span className="text-base text-[--color-text-muted]">
                      {item.product.name}{' '}
                      <span className="text-xs text-black">X {item.quantity}</span>
                    </span>
                    <span className="text-base font-light">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                ))}

                <div className="flex items-center justify-between">
                  <span className="text-base">Subtotal</span>
                  <span className="text-base font-light">{formatPrice(subtotal)}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-base">Total</span>
                  <span className="text-2xl font-bold text-[--color-primary]">
                    {formatPrice(subtotal)}
                  </span>
                </div>

                {/* Divider */}
                <div className="border-t border-[--color-border] pt-6">
                  {/* Payment Methods */}
                  <div className="space-y-4">
                    <label className="flex items-center gap-4 cursor-pointer">
                      <input
                        type="radio"
                        name="payment"
                        value="bank"
                        checked={paymentMethod === 'bank'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-[14px] h-[14px] accent-black"
                      />
                      <span className="text-base font-medium text-black">
                        Direct Bank Transfer
                      </span>
                    </label>

                    {paymentMethod === 'bank' && (
                      <p className="text-base font-light text-[--color-text-muted] ml-7">
                        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                      </p>
                    )}

                    <label className="flex items-center gap-4 cursor-pointer">
                      <input
                        type="radio"
                        name="payment"
                        value="bank2"
                        checked={paymentMethod === 'bank2'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-[14px] h-[14px] accent-black"
                      />
                      <span className="text-base font-medium text-[--color-text-muted]">
                        Direct Bank Transfer
                      </span>
                    </label>

                    <label className="flex items-center gap-4 cursor-pointer">
                      <input
                        type="radio"
                        name="payment"
                        value="cod"
                        checked={paymentMethod === 'cod'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-[14px] h-[14px] accent-black"
                      />
                      <span className="text-base font-medium text-[--color-text-muted]">
                        Cash On Delivery
                      </span>
                    </label>
                  </div>

                  {/* Privacy Policy */}
                  <p className="mt-6 text-base font-light text-black">
                    Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{' '}
                    <a href="#" className="font-semibold">
                      privacy policy
                    </a>
                    .
                  </p>

                  {/* Place Order Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || items.length === 0}
                    className="mt-10 w-full border border-black rounded-[15px] py-4 text-xl text-black hover:bg-black hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Processing...' : 'Place order'}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      <FeaturesBar />
    </div>
  );
}
