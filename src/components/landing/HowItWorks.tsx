'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: '/images/icons/search.png',
    title: 'Discover Local Food',
    description: 'Find homemade meals prepared with love by local entrepreneurs.',
  },
  {
    icon: '/images/icons/mobile.png',
    title: 'Order Easily',
    description: 'Place your order in just a few taps, hassle-free.',
  },
  {
    icon: '/images/icons/home-bag.png',
    title: 'Receive or Pickup',
    description: 'Choose delivery to your door or pickup directly from the cook.',
  },
];

export default function HowItWorks() {
  return (
    <section id='howitworks' className="relative bg-[#f9fafb] scroll-mt-22  py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b]">
          How it Works
        </h2>
        <p className="mt-4 text-lg text-[#1e293b]/70">
          3 simple steps to enjoy homemade food from your community.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <div className="w-28 h-28 mb-6 relative">
                <Image
                  src={step.icon}
                  alt={step.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#1e293b]">
                {step.title}
              </h3>
              <p className="mt-3 text-[#1e293b]/70">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="bg-[#f97316] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-[#ea580c] transition">
            Start Exploring Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
