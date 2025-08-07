'use client';

import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const lastScrollY = useRef(0);
  const [scrollDir, setScrollDir] = useState<'down' | 'up' | 'none'>('none');

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const onScroll = () => {
      const currentY = window.scrollY;
      setScrollY(currentY);

      if (currentY > lastScrollY.current) {
        setScrollDir('down');
      } else if (currentY < lastScrollY.current) {
        setScrollDir('up');
      }

      lastScrollY.current = currentY;

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setScrollDir('none');
      }, 100);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const progress = Math.min(scrollY / 600, 1);
  const leftScale = 1 - progress * 0.7;
  const rightScale = 0.7 + progress * 3;
  const translateX = progress * 34;

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

  let bagRotate = 0;
  if (scrollDir === 'down') bagRotate = 15;
  else if (scrollDir === 'up') bagRotate = -15;

  return (
    <>
      {/* Hero fijo */}
         <section className="hidden md:flex fixed top-0 left-0 w-full h-screen bg-white overflow-hidden items-center justify-center z-10">

{/* Textos */}
<motion.div
  className="absolute top-[15%] right-[5%] text-6xl font-extrabold text-orange-500 drop-shadow-[0_0_2px_#2563eb]"
  style={{
    opacity: 1 - progress * 2,
      translateX: `-${progress * 40}%`,
    fontFamily: 'Inter, sans-serif'
  }}
  transition={{ duration: 0.5, ease: 'easeInOut' }}
>
  <div className="flex flex-col text-8xl text-orange-500 stroke-text">
  <span>Shop at</span>
  <span>a local business</span>
</div>

</motion.div>

<motion.div
  className="absolute top-[15%] left-[10%] text-5xl font-extrabold text-orange-500 drop-shadow-[0_0_2px_#2563eb]"
  style={{
    opacity: progress > 0.5 ? (progress - 0.5) * 2 : 0,
      translateX: `${(1 - progress) * 40}%`,
    fontFamily: 'Inter, sans-serif'
  }}
  transition={{ duration: 0.5, ease: 'easeInOut' }}
>
    <div className="flex flex-col text-8xl text-orange-500 stroke-text">
  <span>And receive it</span>
  <span>at home</span>
</div>
</motion.div>


        {/* Casas */}
        <div className="absolute w-full max-w-7xl mx-auto flex items-center justify-between pl-20 pr-0">
          <motion.div style={{ scale: leftScale }} className="relative w-[660px] h-[660px]">
            <Image src="/images/hero/2.png" alt="Casa Izquierda" fill className="object-contain" />
          </motion.div>

          <motion.div style={{ scale: rightScale }} className="relative w-[200px] h-[200px] mr-60">
            <Image src="/images/hero/3.png" alt="Casa Derecha" fill className="object-contain" />
          </motion.div>
        </div>

        {/* Bolsa */}
   <motion.div
  className="absolute w-[50px] h-[50px]"
  style={{
    top: 'calc(60% - 35px)',
    left: `calc(33vw + ${translateX}vw)`,
    opacity: bagOpacity,
    scale: bagScale,
    rotate: `${bagRotate}deg`,
  }}
  transition={{ duration: 0.6, ease: 'easeInOut' }} // más lenta y suave
>
  <Image src="/images/hero/1.png" alt="Bolsa" fill className="object-contain" />
</motion.div>

      </section>

      {/* Scroll trigger area */}
      <div className="h-[200vh] bg-transparent" />
    </>
  );
}
