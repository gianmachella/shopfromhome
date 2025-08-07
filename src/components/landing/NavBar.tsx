'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import Link from 'next/link';

const navItems = [
  { label: 'Explore', href: '/explore' },
  { label: 'About', href: '/about' },
  { label: 'Login', href: '/login' },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    else document.removeEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full bg-glass shadow-md px-6 py-4 z-50">
      <nav className="flex items-center justify-between max-w-7xl mx-auto relative">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <motion.img
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            src="/images/logos/logo-full.png"
            alt="Shop From Home"
            className="h-15 w-auto object-contain"
          />
        </Link>

        <ul className="hidden md:flex gap-8 text-navy font-medium">
          {navItems.map(({ label, href }) => (
            <motion.li
              key={label}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link href={href} className="hover:text-orange transition-colors">
                {label}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-navy"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={dropdownRef}
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full -right-3 mt-3 w-48 bg-white shadow-lg rounded-lg py-4 px-4 flex flex-col gap-4 text-navy font-medium md:hidden z-[999]"
            >
              {navItems.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-orange transition-colors"
                >
                  {label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}