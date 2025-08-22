'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const stores = [
  {
    id: 1,
    name: "Maria's Kitchen",
    tagline: 'Authentic homemade Italian food',
    image: '/images/explore/store-maria.jpg',
    location: 'Dallas, TX',
  },
  {
    id: 2,
    name: 'Baked with Love',
    tagline: 'Fresh artisan breads & pastries',
    image: '/images/explore/store-bakery.jpg',
    location: 'Plano, TX',
  },
  {
    id: 3,
    name: 'Green Bites',
    tagline: 'Delicious vegan & plant-based meals',
    image: '/images/explore/store-vegan.jpg',
    location: 'McKinney, TX',
  },
  {
    id: 4,
    name: 'Sweet Treats',
    tagline: 'Cakes & desserts for every occasion',
    image: '/images/explore/store-sweets.jpg',
    location: 'Frisco, TX',
  },
];

export default function ExplorePage() {
  return (
    <main className="bg-light text-navy overflow-hidden">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        <Image
          src="/images/explore/hero-explore.jpg"
          alt="Explore local stores"
          fill
          priority
          unoptimized
          className="object-cover -z-10"
        />
        <div className="absolute inset-0 bg-black/40 -z-0" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Discover Local Stores
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Support passionate entrepreneurs bringing their kitchens to your table.
          </p>
        </motion.div>
      </section>

      {/* Stores Grid */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-3xl font-bold text-orange mb-12 text-center">
          Featured Stores
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {stores.map((s, i) => {
            const thumb = s.image.replace('.jpg', '-1.1.jpg');
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={thumb}
                    alt={s.name}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold mb-1">{s.name}</h3>
                  <p className="text-sm text-navy/70">{s.tagline}</p>
                  <p className="text-xs text-gray-500 mb-4">{s.location}</p>
                  <Link
                    href={`/store/${s.id}`}
                    className="mt-auto inline-block text-center px-4 py-2 bg-navy text-white rounded-full font-medium hover:bg-navy/90 transition"
                  >
                    Visit Store
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative h-screen flex items-center justify-center text-center text-white px-6 overflow-hidden">
        <Image
          src="/images/explore/cta-explore.jpg"
          alt="Start Selling"
          fill
          unoptimized
          className="object-cover -z-10"
        />
        <div className="absolute inset-0 bg-black/50 -z-0" />
        <div className="relative z-10 max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl font-extrabold mb-6"
          >
            Want to share your homemade food?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-lg md:text-xl mb-8"
          >
            Join our community and let the world taste your passion.
          </motion.p>
          <Link
            href="/start-selling"
            className="px-6 py-3 bg-orange text-white rounded-full font-medium shadow-lg hover:bg-orange/90 transition"
          >
            Start Selling
          </Link>
        </div>
      </section>
    </main>
  );
}
