import React, { useEffect, useState } from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import { Intro } from './components/Sections/Intro';
import { Practice } from './components/Sections/Practice';
import Quote from './components/Sections/Quote';
import Contact from './components/Sections/Contact';
import CustomCursor from './components/ui/CustomCursor';
import { motion, AnimatePresence } from 'framer-motion';

// Declare Lenis type for TypeScript
declare global {
  interface Window {
    Lenis: any;
  }
}

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new window.Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Loading timer
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-judiciary-black flex items-center justify-center flex-col"
          >
            {/* Scale Animation */}
            <div className="w-48 h-48 md:w-64 md:h-64 relative mb-12">
              <svg viewBox="0 0 200 200" className="w-full h-full stroke-judiciary-gold fill-none stroke-[1.5]">
                {/* Center Balance Beam */}
                <motion.path 
                  d="M100 20 L100 150" 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                {/* Horizontal Beam */}
                <motion.path 
                  d="M20 50 L180 50" 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                />
                
                {/* Left Pan Strings */}
                <motion.path 
                  d="M20 50 L10 100 L50 100 L40 50" 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                />
                 {/* Right Pan Strings */}
                <motion.path 
                  d="M160 50 L150 100 L190 100 L180 50" 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                />

                {/* Left Pan Base */}
                <motion.path 
                  d="M10 100 Q30 130 50 100" 
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
                />
                 {/* Right Pan Base */}
                 <motion.path 
                  d="M150 100 Q170 130 190 100" 
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
                />
              </svg>
            </div>

            <div className="overflow-hidden">
                <motion.h1 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 2.5, duration: 1, ease: [0.76, 0, 0.24, 1] }}
                    className="font-display text-4xl md:text-6xl text-judiciary-pearl tracking-widest font-bold"
                >
                    SIDDHI
                </motion.h1>
            </div>
            
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.2 }}
                className="mt-4 font-mono text-[9px] text-judiciary-gold tracking-[0.4em] uppercase"
            >
                Advocate & Solicitor
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`bg-judiciary-black min-h-screen w-full selection:bg-judiciary-gold selection:text-black ${loading ? 'h-screen overflow-hidden' : ''}`}>
        <CustomCursor />
        {!loading && <Navbar />}
        
        <main className="relative z-10 w-full">
          <Hero />
          <Intro />
          <Practice />
          <Quote />
          <Contact />
        </main>
      </div>
    </>
  );
};