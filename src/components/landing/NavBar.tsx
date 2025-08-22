'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '#home' },          // 👈 ahora Home apunta a #home
  { label: 'Benefits', href: '#benefits' },
  { label: 'How it Works', href: '#howitworks' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '/contact' },
  { label: 'Explore', href: '/explore' },
  { label: 'About', href: '/about' },
  { label: 'Login', href: '/login' },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Detect click outside dropdown
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

  // Detect scroll for background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Observe sections in viewport
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      } px-6 py-4`}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto relative">
        {/* Logo */}
        <Link href="/" onClick={() => setIsOpen(false)}>
          <motion.img
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            src={scrolled ? '/images/logos/logo-full.png' : '/images/logos/logo-full-white.png'}
            alt="Shop From Home"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop */}
        <ul
          className={`hidden md:flex gap-8 font-medium ${
            scrolled ? 'text-[#1e293b]' : 'text-white'
          }`}
        >
          {navItems.map(({ label, href }) => {
            const isActive =
              pathname === href || (href.startsWith('#') && activeSection === href);

            return (
              <motion.li
                key={label}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative group"
              >
                <Link
                  href={href}
                  className={`transition-colors pb-1 ${
                    isActive
                      ? 'text-[#f97316]'
                      : scrolled
                      ? 'hover:text-[#f97316]'
                      : 'hover:text-[#f97316]'
                  }`}
                >
                  {label}
                </Link>
                <span
                  className={`absolute left-0 -bottom-0.5 h-[2px] w-full transition-all duration-300 ${
                    isActive
                      ? 'bg-[#f97316] opacity-100'
                      : 'bg-[#f97316] opacity-0 group-hover:opacity-100'
                  }`}
                />
              </motion.li>
            );
          })}
        </ul>

        {/* Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden ${scrolled ? 'text-[#1e293b]' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={dropdownRef}
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full -right-3 mt-3 w-48 bg-white shadow-lg rounded-lg py-4 px-4 flex flex-col gap-4 font-medium md:hidden z-[999]"
            >
              {navItems.map(({ label, href }) => {
                const isActive =
                  pathname === href || (href.startsWith('#') && activeSection === href);

                return (
                  <Link
                    key={label}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={`hover:text-[#f97316] transition-colors ${
                      isActive
                        ? 'border-b-2 border-[#f97316] text-[#f97316]'
                        : 'text-[#1e293b]'
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
