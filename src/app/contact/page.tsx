'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <main className="bg-light text-navy overflow-hidden">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        <Image
          src="/images/contact/hero-contact.jpg"
          alt="Contact Shop From Home"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          >
            Let’s Connect
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-100">
            Have questions? We’d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-24 px-6 max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-orange">Send us a message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-orange text-white rounded-full font-medium shadow-lg hover:bg-orange/90 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src="/images/contact/info-contact.jpg"
            alt="Contact Info"
            width={1200}
            height={1200}
            className="object-cover"
          />
        </motion.div>
      </section>

      {/* Info */}
      <section className="bg-white py-16 px-6 text-center">
        <h3 className="text-2xl font-bold text-orange mb-4">Other ways to reach us</h3>
        <p className="text-lg text-navy/80 mb-2">support@shopfromhome.com</p>
        <p className="text-lg text-navy/80 mb-2">Princeton, TX</p>
        <div className="flex gap-6 justify-center mt-6">
          <Link href="https://facebook.com" className="hover:text-orange transition">Facebook</Link>
          <Link href="https://instagram.com" className="hover:text-orange transition">Instagram</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="relative h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="/images/contact/cta-contact.jpg"
          alt="Get in Touch"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-6">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold mb-6"
          >
            We’re here for you
          </motion.h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/explore"
              className="px-6 py-3 bg-white text-navy rounded-full font-medium shadow-lg hover:bg-gray-100 transition"
            >
              Explore Food
            </Link>
            <Link
              href="/signup"
              className="px-6 py-3 bg-orange text-white rounded-full font-medium shadow-lg hover:bg-orange/90 transition"
            >
              Start Selling
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
