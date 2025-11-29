import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SplitText } from '../ui/SplitText';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  // Optimized Pillar Effect
  const pillarY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={containerRef} className="relative h-[110vh] w-full flex flex-col justify-center items-center overflow-hidden bg-judiciary-black perspective-1000">
      
      {/* 3D Background Pillars - Optimized */}
      <div className="absolute inset-0 z-0 flex justify-center items-center preserve-3d opacity-20 pointer-events-none">
          {/* Left Pillar Group */}
          <motion.div style={{ y: pillarY }} className="absolute left-[10%] h-[120vh] w-[4vw] bg-gradient-to-r from-white/10 to-transparent transform -skew-y-12 blur-[2px] border-r border-white/5 hardware-accelerated"></motion.div>
          <motion.div style={{ y: pillarY }} className="absolute left-[20%] h-[120vh] w-[3vw] bg-gradient-to-r from-white/5 to-transparent transform -skew-y-12 blur-[2px] border-r border-white/5 hardware-accelerated"></motion.div>
          
          {/* Right Pillar Group */}
          <motion.div style={{ y: pillarY }} className="absolute right-[10%] h-[120vh] w-[4vw] bg-gradient-to-l from-white/10 to-transparent transform skew-y-12 blur-[2px] border-l border-white/5 hardware-accelerated"></motion.div>
          <motion.div style={{ y: pillarY }} className="absolute right-[20%] h-[120vh] w-[3vw] bg-gradient-to-l from-white/5 to-transparent transform skew-y-12 blur-[2px] border-l border-white/5 hardware-accelerated"></motion.div>

          {/* Central Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-judiciary-gold/5 blur-[80px] rounded-full"></div>
      </div>

      <motion.div 
        style={{ y, opacity }} 
        className="relative z-20 flex flex-col items-center text-center px-6 hardware-accelerated"
      >
        <div className="flex flex-col items-center gap-6 mb-12">
            <motion.div 
                initial={{ height: 0 }}
                animate={{ height: 80 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="w-[1px] bg-gradient-to-b from-transparent via-judiciary-buff to-transparent"
            ></motion.div>
            <span className="font-mono text-[10px] text-judiciary-buff uppercase tracking-[0.4em] drop-shadow-lg">Advocate & Solicitor</span>
        </div>
        
        <h1 className="font-display font-bold text-[10vw] md:text-[12vw] leading-[0.85] tracking-tight text-judiciary-pearl select-none mix-blend-lighten drop-shadow-2xl relative">
          <SplitText delay={0.2}>SIDDHI</SplitText>
          {/* Subtle reflection - reduced blur for performance */}
          <span className="absolute top-full left-0 w-full text-white/5 transform scale-y-[-1] blur-[1px] pointer-events-none select-none">SIDDHI</span>
        </h1>
        
        <h2 className="mt-8 font-serif text-2xl md:text-4xl italic text-judiciary-buff/80 font-light tracking-wide">
          Lex & Veritas
        </h2>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-24 flex flex-col items-center gap-6"
        >
          {/* Responsive list wrapping */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 font-mono text-[9px] text-judiciary-pearl/40 uppercase tracking-[0.2em] max-w-lg md:max-w-none">
            <span className="whitespace-nowrap">Litigation</span>
            <span className="hidden md:inline">•</span>
            <span className="whitespace-nowrap">Arbitration</span>
            <span className="hidden md:inline">•</span>
            <span className="whitespace-nowrap">Advisory</span>
          </div>
          
          <div className="w-[1px] h-16 bg-gradient-to-b from-judiciary-pearl/20 to-transparent"></div>
        </motion.div>
      </motion.div>

      {/* Footer Elements of Hero */}
      <div className="absolute bottom-12 w-full px-8 md:px-12 flex justify-between items-end z-20">
         <div className="flex flex-col gap-2">
             <span className="font-mono text-[9px] text-judiciary-pearl/40 uppercase tracking-widest">Est. MMXIV</span>
         </div>
         
         <div className="hidden md:flex flex-col items-end gap-2 text-right">
             <span className="font-mono text-[9px] text-judiciary-pearl/40 uppercase tracking-widest">Scroll for Evidence</span>
         </div>
      </div>

    </section>
  );
};

export default Hero;