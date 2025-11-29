import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Intro: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax effects
  const yText = useTransform(scrollYProgress, [0, 0.5], [50, 0]);
  const yCard1 = useTransform(scrollYProgress, [0, 1], [20, -60]);
  const yCard2 = useTransform(scrollYProgress, [0, 1], [60, -100]);
  
  return (
    <section id="the-firm" ref={ref} className="py-32 md:py-48 px-6 md:px-20 w-full bg-judiciary-black relative overflow-hidden">
      
      {/* Background Watermark - Static and Fitted */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden flex items-center justify-center pointer-events-none select-none z-0">
         <h1 className="font-display font-black text-[18vw] leading-none text-judiciary-pearl opacity-[0.02] tracking-tighter w-full text-center">
            JUSTICE
         </h1>
      </div>

      <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
        
        {/* Left: Authoritative Text */}
        <motion.div style={{ y: yText }} className="flex flex-col justify-center">
             <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-judiciary-buff"></div>
                <span className="font-mono text-[10px] text-judiciary-buff tracking-[0.3em] uppercase">The Philosophy</span>
             </div>
             
             <h2 className="font-display text-4xl md:text-6xl text-judiciary-pearl leading-[1.1] mb-12">
               Unwavering<br/>
               <span className="text-judiciary-buff italic font-serif">Representation.</span>
             </h2>
             
             <p className="font-serif text-xl md:text-2xl text-judiciary-pearl/80 leading-relaxed text-justify mb-10 border-l-2 border-judiciary-buff/30 pl-6">
               "Justice is not given. It is exacted through precision, intellect, and absolute command of the law."
             </p>
             
             <div className="space-y-6 font-sans text-sm text-judiciary-pearl/50 leading-loose max-w-md">
                <p>
                  Specializing in complex litigation and high-stakes dispute resolution at the High Court. We do not merely interpret the law; we construct the arguments that define it.
                </p>
                <p>
                  Every case is treated with the precision of a surgeon and the strategy of a grandmaster.
                </p>
             </div>
        </motion.div>

        {/* Right: Overlapping Evidence Cards */}
        <div className="relative h-[600px] md:h-[800px] w-full flex items-center justify-center lg:pl-20 perspective-1000">
             
             {/* Card 1: Bottom Layer - The Case File */}
             <motion.div 
               style={{ y: yCard2, rotate: -3 }}
               className="absolute top-1/2 left-0 w-full md:w-[28rem] glass-card p-10 rounded-sm z-10 border-t-4 border-t-judiciary-accent hardware-accelerated"
             >
                <div className="flex justify-between mb-8 border-b border-white/5 pb-4">
                    <span className="font-mono text-[9px] uppercase text-judiciary-pearl/40">Docket No. 892</span>
                    <span className="font-mono text-[9px] uppercase text-judiciary-buff">Dismissed</span>
                </div>
                <h3 className="font-display text-2xl text-judiciary-pearl mb-2">Corporate Espionage</h3>
                <p className="font-sans text-xs text-judiciary-pearl/60 mt-4 leading-relaxed">
                   Strategic defense for a multinational conglomerate involving IP theft allegations. Resulting in complete dismissal.
                </p>
             </motion.div>

             {/* Card 2: Top Layer - The Verdict */}
             <motion.div 
               style={{ y: yCard1, rotate: 6 }}
               className="absolute top-1/4 right-0 w-full md:w-[28rem] bg-[#0E1116] border border-white/10 p-10 rounded-sm shadow-2xl z-20 border-l-4 border-l-judiciary-buff hardware-accelerated"
             >
                <div className="flex justify-between mb-8 border-b border-white/5 pb-4">
                    <span className="font-mono text-[9px] uppercase text-judiciary-buff">Precedent Setting</span>
                    <span className="font-mono text-[9px] uppercase text-judiciary-pearl/40">2024</span>
                </div>
                <h3 className="font-display text-2xl text-judiciary-pearl mb-2">Constitutional Challenge</h3>
                <p className="font-sans text-xs text-judiciary-pearl/60 mt-4 leading-relaxed">
                   Successfully argued before the Division Bench on a matter of fundamental rights interpretation.
                </p>
                <div className="mt-8 flex items-center gap-4">
                    {/* Embossed Legal Mark */}
                    <div className="w-12 h-12 border border-judiciary-buff/20 rounded-full flex items-center justify-center bg-judiciary-buff/5">
                        <svg className="w-6 h-6 text-judiciary-buff opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                           <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-mono text-[8px] uppercase text-judiciary-pearl/40 tracking-widest">Lead Counsel</span>
                        <span className="font-display text-sm text-judiciary-pearl tracking-wider">SIDDHI</span>
                    </div>
                </div>
             </motion.div>

        </div>
      </div>
    </section>
  );
};