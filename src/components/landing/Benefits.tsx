'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const benefits = [
  {
    icon: '/images/benefits/house.png',
    title: 'Support Local Entrepreneurs',
    description:
      'Every order helps a neighbor grow their home business and support their family.',
  },
  {
    icon: '/images/benefits/heart.png',
    title: 'Authentic Homemade Flavors',
    description:
      'Enjoy food prepared with love, just like home, from local kitchens near you.',
  },
  {
    icon: '/images/benefits/cart.png',
    title: 'Easy Ordering',
    description:
      'Fast and simple checkout with delivery or pickup options tailored to your needs.',
  },
  {
    icon: '/images/benefits/bag.png',
    title: 'No Monthly Fees',
    description:
      'Sellers can start their journey with zero risk — only pay a small fee per order.',
  },
];

export default function Benefits() {
  return (
    <section className="py-20 bg-[color:var(--color-light)] text-[color:var(--color-navy)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Why Shop From Home?
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map(({ icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-8 rounded-2xl shadow-md bg-white hover:shadow-xl transition relative overflow-hidden"
            >
              {/* Icon (Image instead of Lucide) */}
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 flex items-center justify-center mb-6"
              >
                <Image
                  src={icon}
                  alt={title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </motion.div>

              {/* Text */}
              <h3 className="text-xl font-semibold mb-2 relative z-10">
                {title}
              </h3>
              <p className="text-gray-600 text-sm relative z-10">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decorative shapes */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute -top-20 -left-20 w-60 h-60 bg-[color:var(--color-orange)]/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute bottom-0 -right-20 w-72 h-72 bg-[color:var(--color-teal)]/20 rounded-full blur-3xl"
      />
    </section>
  );
}
