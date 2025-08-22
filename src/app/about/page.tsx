'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

export default function AboutPage() {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();

  // Hero background parallax
  const yHero = useTransform(scrollY, [0, 500], ['0%', '20%']);

  // Texto en dirección opuesta + fade
  const yText = useTransform(scrollY, [0, 500], ['0%', '-10%']);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <main className="bg-light text-navy overflow-hidden">
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden"
      >
        {/* Imagen con parallax */}
        <motion.div style={{ y: yHero }} className="absolute inset-0 -z-10">
          <Image
            src="/images/about/hero-about.jpg"
            alt="About Shop From Home"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 -z-0" />

        {/* Texto con parallax invertido */}
        <motion.div
          style={{ y: yText, opacity: textOpacity }}
          className="relative z-10 max-w-3xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          >
            More Than Food, It’s Local Stories on Your Table
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-lg md:text-xl text-gray-100"
          >
            Every homemade dish carries the dream of an entrepreneur who wants to grow and share
            their passion.
          </motion.p>
        </motion.div>
      </section>

      {/* Mission */}
      <section className="w-full bg-light py-32 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-orange">Our Mission</h2>
            <p className="text-lg leading-relaxed text-navy/80">
              To connect people who love authentic homemade food with local entrepreneurs who
              prepare it with heart, right from their kitchens.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/about/mission-about.jpg"
              alt="Our Mission"
              width={1200}
              height={1200}
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="w-full bg-light py-32 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl order-2 md:order-1"
          >
            <Image
              src="/images/about/vision-about.jpg"
              alt="Our Vision"
              width={1200}
              height={1200}
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="text-3xl font-bold mb-4 text-orange">Our Vision</h2>
            <p className="text-lg leading-relaxed text-navy/80">
              A world where supporting your community is as easy as placing an order — and every meal
              helps a local dream grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why */}
      <section className="relative w-full bg-white py-32 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-orange mb-8"
          >
            Why We Exist
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
            className="text-lg leading-relaxed text-navy/80 mb-10"
          >
            Local entrepreneurs often struggle with visibility and bureaucracy. We give them a
            platform without upfront costs or legal hurdles. Every order directly supports a
            neighbor, a family, a dream.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/about/why-about.jpg"
              alt="Why We Exist"
              width={1600}
              height={900}
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

 {/* CTA */}
<section className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
  {/* Fondo */}
  <motion.div
    className="absolute inset-0 -z-10"
    style={{ scale: useTransform(scrollY, [0, 1000], [1, 1.1]) }} // 👈 zoom sutil en vez de mover y cortar
  >
    <Image
      src="/images/about/call-about.jpg"
      alt="Join the Movement"
      fill
      priority
      className="object-cover object-center"
    />
  </motion.div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Contenido */}
  <div className="relative z-10 max-w-3xl px-6">
    <motion.h2
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-extrabold mb-8"
    >
      Join the Movement
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 1 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto text-lg md:text-xl mb-10"
    >
      Whether you want to discover unique flavors or share your own kitchen with the world,
      Shop From Home is here to make it possible.
    </motion.p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link
        href="/explore"
        className="px-6 py-3 bg-white text-navy rounded-full font-medium shadow-lg hover:bg-gray-100 transition"
      >
        Explore Food
      </Link>
      <Link
        href="/start-selling"
        className="px-6 py-3 bg-navy text-white rounded-full font-medium shadow-lg hover:bg-navy/90 transition"
      >
        Start Selling
      </Link>
    </div>
  </div>
</section>


    </main>
  );
}
