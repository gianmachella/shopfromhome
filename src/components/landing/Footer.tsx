'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative bg-[#1e293b] text-white py-16 px-6 overflow-hidden">
      {/* Background clay shapes */}
      <motion.div
        className="absolute -top-20 -left-20 w-72 h-72 bg-[#f97316] rounded-full blur-3xl opacity-20"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#14b8a6] rounded-full blur-3xl opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 z-10">
        {/* Logo + tagline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative w-40 h-14">
            <Image
              src="/images/icons/bag.png"
              alt="Shop From Home logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <p className="mt-4 text-sm text-gray-300">
            From their kitchen to yours.  
            Supporting local entrepreneurs every day.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="#benefits" className="hover:text-[#f97316] transition">
                Benefits
              </Link>
            </li>
            <li>
              <Link href="#howitworks" className="hover:text-[#f97316] transition">
                How it Works
              </Link>
            </li>
            <li>
              <Link href="#testimonials" className="hover:text-[#f97316] transition">
                Testimonials
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold text-lg mb-4 text-white">Contact</h3>
          <p className="text-gray-300">support@shopfromhome.com</p>
          <p className="text-gray-300">Princeton, TX</p>
          <div className="flex gap-4 mt-4">
            <motion.a
              href="https://facebook.com"
              target="_blank"
              whileHover={{ scale: 1.1, rotate: -3 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-[#f97316] transition"
            >
              Facebook
            </motion.a>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-[#f97316] transition"
            >
              Instagram
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        className="relative mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400 z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} Shop From Home. All rights reserved.
      </motion.div>
    </footer>
  );
}
