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
  const bottomScale = 0.7 + progress * 1.5;
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

  const bagRotate = scrollDir === 'down' ? 180 : scrollDir === 'up' ? 0 : 0;

  return (
    <>
      <section className="md:hidden fixed top-0 left-0 w-full h-screen bg-white overflow-hidden flex flex-col items-center justify-center z-10">
        {/* Texto scroll en dos líneas */}
        <motion.div
          className="absolute top-[8%] text-center font-extrabold drop-shadow-[0_0_2px_#2563eb] z-20"
          style={{
            opacity: 1 - progress * 2,
            translateX: `-${progress * 40}%`,
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
                  <div className="flex flex-col mt-7 text-5xl text-orange-500">
            <span>Shop at</span>
            <span>a local business</span>
          </div>
        </motion.div>

        <motion.div
          className="absolute top-[8%] text-center font-extrabold drop-shadow-[0_0_2px_#2563eb] z-20"
          style={{
            opacity: progress > 0.5 ? (progress - 0.5) * 2 : 0,
            translateX: `${(1 - progress) * 40}%`,
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="flex flex-col mt-10 text-5xl text-orange-500">
            <span>And receive it</span>
            <span>at home</span>
          </div>
        </motion.div>

        {/* Casas */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between items-center py-10">
          <motion.div
            style={{ scale: topScale }}
            className="relative w-[260px] h-[260px] mt-28"
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
            className="relative w-[140px] h-[140px] mb-12"
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
    top: `calc(35vh + ${translateY}vh)`,
    left: '45%',
    transform: 'translateX(-50%)',
    opacity: bagOpacity,
    scale: bagScale,
    rotate: `${bagRotate}deg`,
  }}
  transition={{
    duration: 2,
    ease: 'easeInOut',
  }}
>
  <Image
    src="/images/hero/1.png"
    alt="Bolsa"
    fill
    className="object-contain"
  />
</motion.div>

      </section>

      <div className="h-[200vh] bg-transparent" />
    </>
  );
}
