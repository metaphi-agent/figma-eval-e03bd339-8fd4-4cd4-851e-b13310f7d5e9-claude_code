import React, { useState } from 'react';
import { PageBanner } from '../components/blocks/PageBanner';
import { FeaturesBar } from '../components/blocks/FeaturesBar';
import { Input, Textarea } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div>
      <PageBanner title="Contact" />

      <section className="py-24">
        <div className="max-w-[1058px] mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold text-black">Get In Touch With Us</h2>
          <p className="mt-2 text-base text-[--color-text-muted] max-w-[644px] mx-auto">
            For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        <div className="mt-[133px] max-w-[1058px] mx-auto px-4 flex gap-[30px]">
          {/* Contact Info */}
          <div className="w-[393px] flex-shrink-0">
            {/* Address */}
            <div className="flex gap-[30px]">
              <div className="w-[22px] h-[28px] flex-shrink-0 mt-1">
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-black">Address</h3>
                <p className="mt-1 text-base text-black">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="mt-11 flex gap-[30px]">
              <div className="w-[22px] h-[28px] flex-shrink-0 mt-1">
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-black">Phone</h3>
                <p className="mt-1 text-base text-black">
                  Mobile: +(84) 546-6789
                </p>
                <p className="text-base text-black">
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            {/* Working Time */}
            <div className="mt-11 flex gap-[30px]">
              <div className="w-[22px] h-[28px] flex-shrink-0 mt-1">
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-black">Working Time</h3>
                <p className="mt-1 text-base text-black">
                  Monday-Friday: 9:00 - 22:00
                </p>
                <p className="text-base text-black">
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="space-y-9">
              <Input
                label="Your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Abc"
                required
              />

              <Input
                label="Email address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Abc@def.com"
                required
              />

              <Input
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="This is an optional"
              />

              <Textarea
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi! I'd like to ask about"
                rows={5}
                required
              />

              <Button
                type="submit"
                variant="primary"
                size="md"
                isLoading={isSubmitting}
                className="rounded-[5px] mt-4"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>

      <FeaturesBar />
    </div>
  );
}
