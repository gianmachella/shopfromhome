'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// 👇 el truco: params es un Promise<{ id: string }>
export default async function StorePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // 👈 desestructuramos con await

  // Mock de data según id
  const store = {
    id,
    name: "Maria's Kitchen",
    description:
      'Authentic homemade dishes made with love. From lasagna to empanadas, discover comfort food straight from my kitchen.',
    location: 'Princeton, TX',
    banner: '/images/store/store-hero.jpg',
    products: [
      {
        id: 1,
        name: 'Homemade Lasagna',
        price: '$12',
        image: '/images/store/lasagna.jpg',
      },
      {
        id: 2,
        name: 'Empanadas',
        price: '$3 each',
        image: '/images/store/empanadas.jpg',
      },
      {
        id: 3,
        name: 'Fresh Pasta',
        price: '$10',
        image: '/images/store/pasta.jpg',
      },
    ],
  };

  return (
    <main className="bg-light text-navy overflow-hidden">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center text-center px-6 overflow-hidden">
        <Image
          src={store.banner}
          alt={store.name}
          fill
          priority
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
            {store.name}
          </h1>
          <p className="text-lg md:text-xl text-gray-200">{store.location}</p>
        </motion.div>
      </section>

      {/* About Store */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-lg leading-relaxed text-navy/80 mb-8"
        >
          {store.description}
        </motion.p>
      </section>

      {/* Products */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-orange mb-10 text-center">
          Menu
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {store.products.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-48">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-1">{p.name}</h3>
                <p className="text-orange font-bold">{p.price}</p>
                <Link
                  href={`/order/${p.id}`}
                  className="mt-auto inline-block text-center px-4 py-2 bg-navy text-white rounded-full font-medium hover:bg-navy/90 transition"
                >
                  Order Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative h-[50vh] flex items-center justify-center text-center text-white px-6 overflow-hidden">
        <Image
          src="/images/store/store-cta.jpg"
          alt="Support local"
          fill
          className="object-cover -z-10"
        />
        <div className="absolute inset-0 bg-black/50 -z-0" />
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Support Local, Taste the Difference
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Every order helps a dream grow. Thank you for supporting local
            entrepreneurs.
          </p>
        </div>
      </section>
    </main>
  );
}
