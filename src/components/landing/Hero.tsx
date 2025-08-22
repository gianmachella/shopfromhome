'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center text-white overflow-hidden">
      {/* Fondo */}
      <Image
        src="/images/hero/hero-sfh.png"
        alt="Shop From Home"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay focalizado a la izquierda */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_-10%_90%,rgba(0,0,0,0.6),transparent_70%)]" />

      {/* Contenido a la izquierda */}
      <div className="relative z-10 max-w-2xl px-6 md:px-20 text-left">
        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
        >
          From Home Kitchens <br /> to Your Table
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-lg md:text-xl text-gray-100 drop-shadow"
        >
          Connecting local home chefs with neighbors who love authentic homemade food.
        </motion.p>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/explore"
            className="px-6 py-3 bg-orange rounded-full font-medium shadow-lg hover:bg-orange/90 transition"
          >
            Explore Food
          </Link>
          <Link
            href="/signup"
            className="px-6 py-3 bg-white text-navy rounded-full font-medium shadow-lg hover:bg-gray-100 transition"
          >
            Start Selling
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
