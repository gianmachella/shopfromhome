'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function MobileHero() {
  const [scrollY, setScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDir, setScrollDir] = useState<'down' | 'up' | 'none'>('none');

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      setScrollY(currentY);

      if (currentY > lastScrollY) setScrollDir('down');
      else if (currentY < lastScrollY) setScrollDir('up');
      else setScrollDir('none');

      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const progress = Math.min(scrollY / 600, 1);

  const topScale = 1 - progress * 0.7;
  const bottomScale = 0.7 + progress * 3;

  const translateY = progress * 50;

  const bagOpacity =
    progress < 0.1
      ? progress * 10
      : progress > 0.9
      ? 1 - (progress - 0.9) * 10
      : 1;

  const bagScale =
    progress < 0.5
      ? 1 + progress * 2
      : 2.2 - (progress - 0.5) * 2;

  const bagRotate =
    scrollDir === 'down' ? 180 :
    scrollDir === 'up' ? 0 : 0;

  return (
    <>
      {/* Hero mobile fijo */}
      <section className="fixed top-0 left-0 w-full h-screen bg-white overflow-hidden flex flex-col items-center justify-between z-10">
        {/* Texto arriba */}
        <motion.div
          className="absolute top-[10%] text-center text-2xl font-bold text-orange-500"
          style={{
            opacity: progress < 0.5 ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }}
        >
          Buy from a local business
        </motion.div>

        {/* Texto abajo */}
        <motion.div
          className="absolute bottom-[10%] text-center text-2xl font-bold text-orange-500"
          style={{
            opacity: progress > 0.5 ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }}
        >
          And get it delivered home
        </motion.div>

        {/* Casas */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between items-center py-10">
          <motion.div
            style={{ scale: topScale }}
            className="relative w-[300px] h-[300px]"
          >
            <Image
              src="/images/hero/2.png"
              alt="Casa Arriba"
              fill
              className="object-contain"
            />
          </motion.div>

          <motion.div
            style={{ scale: bottomScale }}
            className="relative w-[160px] h-[160px]"
          >
            <Image
              src="/images/hero/3.png"
              alt="Casa Abajo"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* Bolsa */}
        <motion.div
          className="absolute w-[50px] h-[50px]"
          style={{
            top: `calc(20vh + ${translateY}vh)`,
            left: '50%',
            transform: 'translateX(-50%)',
            opacity: bagOpacity,
            scale: bagScale,
            rotate: `${bagRotate}deg`,
          }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <Image
            src="/images/hero/1.png"
            alt="Bolsa"
            fill
            className="object-contain"
          />
        </motion.div>
      </section>

      {/* Scroll area */}
      <div className="h-[200vh] bg-transparent" />
    </>
  );
}
