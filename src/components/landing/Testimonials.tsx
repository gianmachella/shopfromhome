'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Maria Lopez',
    avatar: '/images/avatars/avatar1.png',
    quote:
      'I love supporting neighbors through this app. The food tastes like home and the service is amazing!',
  },
  {
    name: 'James Carter',
    avatar: '/images/avatars/avatar2.png',
    quote:
      'Ordering was super easy and pickup was fast. I’ll definitely order again soon!',
  },
  {
    name: 'Elena Rodriguez',
    avatar: '/images/avatars/avatar3.png',
    quote:
      'This platform helped me discover authentic homemade meals nearby. Highly recommended!',
  },
];

export default function Testimonials() {
  return (
    <section id='testimonials' className="relative bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b]">
          What our community says
        </h2>
        <p className="mt-4 text-lg text-[#1e293b]/70">
          Real stories from neighbors who love homemade food.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-[#f9fafb] rounded-2xl p-8 shadow-lg flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <div className="relative w-20 h-20 mb-6">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <p className="text-[#1e293b]/80 italic">“{t.quote}”</p>
              <h3 className="mt-4 font-semibold text-[#1e293b]">{t.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
