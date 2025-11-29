import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Quote: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section id="philosophy" ref={ref} className="py-40 bg-judiciary-pearl text-judiciary-black overflow-hidden relative flex flex-col justify-center min-h-[80vh]">
      
      {/* Background Kinetic Type */}
      <div className="absolute inset-0 flex flex-col justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <motion.div style={{ x: x1 }} className="whitespace-nowrap">
          <h2 className="font-display text-[18vw] leading-[0.8] font-bold">Fiat Justitia</h2>
        </motion.div>
        <motion.div style={{ x: x2 }} className="whitespace-nowrap">
          <h2 className="font-display text-[18vw] leading-[0.8] font-bold text-right">Ruat Caelum</h2>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-16">
            <span className="font-mono text-[10px] border border-judiciary-black/30 px-6 py-3 rounded-full uppercase tracking-[0.2em] font-medium">The Maxim</span>
          </div>
          <p className="font-display text-4xl md:text-7xl leading-[1.1] text-judiciary-black max-w-5xl mx-auto">
            "The law is reason, free from passion. We provide the <span className="italic font-light text-judiciary-gold font-serif">clarity</span> amidst the chaos of conflict."
          </p>
          
          <div className="mt-24 flex justify-center items-center gap-6">
             <div className="h-[1px] w-24 bg-judiciary-black/10"></div>
             <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-judiciary-black/60">Siddhi • Counsel</span>
             <div className="h-[1px] w-24 bg-judiciary-black/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;