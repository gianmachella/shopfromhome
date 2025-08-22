'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function StartSelling() {
  return (
    <main className="bg-light text-navy overflow-hidden">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        <Image
          src="/images/selling/hero-selling.jpg"
          alt="Start Selling"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          >
            Turn Your Kitchen into a Business
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-lg md:text-xl text-gray-100 mb-8"
          >
            Share your homemade recipes with neighbors, grow your brand, and start earning — all without monthly fees.
          </motion.p>
          <Link
            href="/signup"
            className="px-6 py-3 bg-orange text-white rounded-full font-medium shadow-lg hover:bg-orange/90 transition"
          >
            Start Now
          </Link>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-orange mb-16">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {[
            {
              title: 'Create Your Profile',
              desc: 'Sign up and tell your story. Let people know who you are and what makes your food unique.',
              img: '/images/selling/step1.jpg',
            },
            {
              title: 'Add Your Dishes',
              desc: 'Upload photos, set prices, and describe your homemade meals in minutes.',
              img: '/images/selling/step2.jpg',
            },
            {
              title: 'Receive Orders',
              desc: 'Get notified when someone places an order and connect directly to arrange payment & delivery.',
              img: '/images/selling/step3.jpg',
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white shadow-lg overflow-hidden"
            >
              <Image
                src={step.img}
                alt={step.title}
                width={500}
                height={300}
                className="object-cover w-full h-48"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-navy/80">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-orange mb-12">
            Why Sell with Shop From Home?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'No Monthly Fees',
                desc: 'Start for free, pay nothing upfront. Only a small order fee applies.',
              },
              {
                title: 'Local Visibility',
                desc: 'Reach neighbors who love homemade food and support local businesses.',
              },
              {
                title: 'Grow Your Brand',
                desc: 'Tell your story, share your dishes, and build loyal customers.',
              },
            ].map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-light p-6 rounded-2xl shadow-md"
              >
                <h3 className="font-bold text-xl mb-2 text-navy">{b.title}</h3>
                <p className="text-navy/80">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="/images/selling/cta-selling.jpg"
          alt="Start Selling CTA"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl font-extrabold mb-6"
          >
            Ready to Start Your Journey?
          </motion.h2>
          <Link
            href="/signup"
            className="px-6 py-3 bg-orange text-white rounded-full font-medium shadow-lg hover:bg-orange/90 transition"
          >
            Sign Up & Start Selling
          </Link>
        </div>
      </section>
    </main>
  );
}
