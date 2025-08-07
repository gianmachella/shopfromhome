'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const topY = useTransform(scrollYProgress, [0, 0.5], ['-100%', '0%']);
  const bottomY = useTransform(scrollYProgress, [0, 0.5], ['100%', '0%']);

  const opacityTitle = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const scaleTitle = useTransform(scrollYProgress, [0.4, 0.6], [0.95, 1]);

  const textOpacity = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.7, 0.85], [50, 0]);

  return (
    <section
      ref={ref}
      className="relative w-full h-screen overflow-hidden bg-white flex items-center justify-center"
    >
      {/* Franjas */}
      <motion.div className="absolute left-0 top-0 w-full h-1/2 bg-orange-500 z-10" style={{ y: topY }} />
      <motion.div className="absolute left-0 bottom-0 w-full h-1/2 bg-orange-500 z-10" style={{ y: bottomY }} />

      {/* Título */}
      <motion.h2
        className="absolute text-6xl font-extrabold text-white z-20 text-center"
        style={{ opacity: opacityTitle, scale: scaleTitle }}
      >
        Who We Are
      </motion.h2>

      {/* Texto objetivo */}
      <motion.p
        className="absolute bottom-[15%] max-w-4xl px-6 text-4xl text-white z-30 text-center leading-snug"
        style={{ opacity: textOpacity, y: textY }}
      >
        Our goal is to connect local entrepreneurs with nearby customers,
        offering a simple and fast way to shop and receive products from small businesses — all from home.
      </motion.p>
    </section>
  );
}
